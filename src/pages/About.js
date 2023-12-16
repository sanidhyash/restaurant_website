import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          bgcolor:"#9e9e86",
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Our Resturant</Typography>
        <p>
        At our healthy food restaurant, we take pride in offering a menu that prioritizes both flavor and nutrition. Start your day right with hearty bowls of oats or slices of wholesome brown bread generously spread with creamy peanut butter. For those seeking a crisp and satisfying crunch, our corn flakes are a delightful choice. When it comes to snacking, we've got you covered with an array of options high in protein. From nutrient-packed nuts to seeds bursting with goodness, our menu ensures that every bite contributes to your well-being. For a savory twist, we also offer lean meat options that not only satisfy your protein needs but also tantalize your taste buds. Embrace a delicious journey towards a healthier you at our vibrant and protein-rich haven.
        </p>
        <br />
        <p>
          
Our commitment to health extends beyond taste, as we understand the importance of maintaining a balanced lifestyle. Our protein-packed snacks are thoughtfully curated to cater to various dietary preferences, ensuring that everyone can indulge guilt-free. Whether you're craving the robust crunch of roasted chickpeas, the subtle sweetness of Greek yogurt parfait with nuts, or the savory satisfaction of turkey jerky, our high-protein snack selection has something for every palate. We believe that nourishing your body shouldn't mean compromising on flavor, and our menu is a testament to that philosophy. Join us on a culinary adventure where wholesome meets delicious, and where every bite brings you one step closer to your wellness goals.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
