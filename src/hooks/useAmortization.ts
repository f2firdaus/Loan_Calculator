import { useMemo } from 'react';

interface AmortizationEntry {
  month: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export const useAmortization= (
  principal: number,
  annualRate: number,
  durationYears: number
): AmortizationEntry[] => {
  return useMemo(() => {
    const monthlyRate = annualRate / 12 / 100;
    const durationMonths = durationYears * 12;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, durationMonths)) /
      (Math.pow(1 + monthlyRate, durationMonths) - 1);

    let balance = principal;
    const schedule: AmortizationEntry[] = [];

    for (let month = 1; month <= durationMonths; month++) {
      const interest = balance * monthlyRate;
      const principalPaid = emi - interest;
      balance -= principalPaid;

      schedule.push({
        month,
        principal: parseFloat(principalPaid.toFixed(2)),
        interest: parseFloat(interest.toFixed(2)),
        remainingBalance: parseFloat(balance > 0 ? balance.toFixed(2) : '0.00'),
      });
    }

    return schedule;
  }, [principal, annualRate, durationYears]);
};
