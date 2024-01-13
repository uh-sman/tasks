"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ListingComponent = () => {
  const [listing, setListing] = useState();

  const fetchListing = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/listing/:?userId=6597d2d6fb0269802d3a29c2"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListing()
  }, [])
  return <div></div>;
};

export default ListingComponent;
