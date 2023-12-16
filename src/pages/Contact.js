import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from '@mui/icons-material/Place';
import "../styles/contact.css"
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "../styles/contact.css"

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWSeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          
Have questions, feedback, or simply want to chat about all things healthy and delicious? We'd love to hear from you! Reach out to our passionate team at xyz@gmail.com for prompt assistance. If you prefer the personal touch, give us a ring at 1800-00-0000. Your journey to a healthier, tastier lifestyle starts with a conversation—let's talk!
        </p>
      </Box>
      <Box
        className="conbox"
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
        
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "#9e9e86", color: "black" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> xyz@gmail
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PlaceIcon sx={{ color: "red", pt: 1 }} /> Phase 1, Greater Noida, 221152
                  
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box><br/><br/><br/><br/><br/>
    </Layout>
  );
};

export default Contact;
