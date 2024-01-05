import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Ordertraker from "./Ordertraker";
import { Grid, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div className="">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <Ordertraker activeStep={3} />
      </div>
      {
        [1,2,3,4,5].map(item=><Grid className="space-y-5" container>
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70"
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men's shirt</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color : black</span>
                  <span>Size : M</span>
                </p>
                <p>Seller: Gajendra</p>
                <p>₹1999</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>)
      }
    </div>
  );
};

export default OrderDetails;
