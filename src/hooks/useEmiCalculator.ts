import { useMemo } from "react";

interface EmiResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
}

export const useEmiCalculator = (
  principal: number,
  annualRate: number,
  durationYears: number
): EmiResult => {
  return useMemo(() => {
    const durationMonths = durationYears * 12;
    const monthlyRate = annualRate / 12 / 100;

    if (monthlyRate === 0) {
      const emi = principal / durationMonths;
      const totalPayment = principal;
      return {
        emi: parseFloat(emi.toFixed(2)),
        totalInterest: 0,
        totalPayment: parseFloat(totalPayment.toFixed(2)),
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, durationMonths)) /
      (Math.pow(1 + monthlyRate, durationMonths) - 1);

    const totalPayment = emi * durationMonths;
    const totalInterest = totalPayment - principal;

    return {
      emi: parseFloat(emi.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2)),
    };
  }, [principal, annualRate, durationYears]);
};
