import React from "react";
import { useParams } from "react-router-dom";
import DetailsForm from "./DetailsForm";
import '../Styles/Details.css';

function Details({allStates}) {
  let {id} = useParams();
  const filtered = allStates.filter((element) => {
    return element.id === id
  });
  return (
      <>
        <div className="details-content">
          {filtered[0].category === 'accessory' ?
          <h1 className="details-header">{`${filtered[0].theme} ${filtered[0].type}`}</h1> :
          <h1 className="details-header">{`${filtered[0].gender}'s ${filtered[0].color} ${filtered[0].theme} ${filtered[0].type}`}</h1>}
          <div className="details-image-container">
            <img src={filtered[0].image} alt="a"/>
          </div>
          <div className="details-bottom-container">
            <DetailsForm/>
          </div>
        </div>
      </>
  );
}
export default Details