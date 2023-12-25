import { Grid, Typography, Button,Link} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center mt-10">
      <Grid
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Company
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Solutions
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Documentation
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Legal
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 5,fontSize:'25px' }}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          e_commerce_project
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
