import React from "react";
import img1 from "../assets/49e58d5922019b8ec4642a2e2b9291c2-removebg-preview.png";

const NoData = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "12%",
      }}
    >
      <img style={{ width: "25%" }} src={img1} alt="abc" />
    </div>
  );
};

export default NoData;
