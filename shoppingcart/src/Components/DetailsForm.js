import React from "react";
import SizeSelect from "./SizeSelect";
import QuantityCounter from "./QuantityCounter";
import '../Styles/DetailsForm.css'

function DetailsForm() {
  return (
    <>
      <form className="DetailsForm">
        <div className="details-bottom-container">
          <SizeSelect/>
          <QuantityCounter/>
        </div>
      </form>
    </>
  );
}
export default DetailsForm