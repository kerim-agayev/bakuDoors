import React from "react";

function ProductTitle({ title }) {
  return (
    <>
      <div className="my-5 text-center fontFamily  ">
        <span className="borderBottom   fS fUpperCase sauna-ourworks "> {title}</span>
      </div>
    </>
  );
}

export default ProductTitle;