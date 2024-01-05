import React from "react";

const AddressCard = () => {
  return (
    <div className="shadow-xl rounded-md p-5 border"
    sx={{ alignItems: "center", justifyContent: "space-between" }}>
      <div className="space-y-3">
        <p className="font-semibold">Gajendra singh</p>
        <p>Jaipur,302020</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>xxxxxxxx</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
