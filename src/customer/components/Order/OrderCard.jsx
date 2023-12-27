import React from "react";
import { Grid } from "@mui/material";
const OrderCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object object-top"
              src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="mb-2">Nice shirt</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;