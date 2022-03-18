import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404");
  }, []);

  return <>404!</>;
};

export default Page404;
