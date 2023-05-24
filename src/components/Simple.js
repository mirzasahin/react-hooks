import React, { useEffect } from "react";

const Simple = () => {
  console.log("simple içerisi tetiklendi.");
  useEffect(() => {
    console.log("Sahneye eklendi.");
    return () => {
      console.log("Sahneden silindi.");
    };
  }, []);

  return <div>Simple</div>;
}

export default Simple;

