import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box component="div" sx={{ textAlign: "center", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
          <Typography variant="h4"  className="error-message">Something went wrong in the application.</Typography>
          
          <Link to="/" >
    
        <Button variant="outlined">Go Home</Button>
      </Link>
    </Box>
  );
};
export default NotFound;
