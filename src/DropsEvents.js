import React from "react";
import "../src/index.css";
import "../src/DropEvents.css";

const DropsEvents = () => {
  return (
    <div className="container colorbg py-5">
      <div className="row">
        <div className="col-sm-8 col-bg-8 d-flex justify-content-end">
          <h1 className="textinDE fw-bold text-dark text-center">
            UPCOMING NFT DROPS & EVENTS
          </h1>
        </div>
        <div className="col-sm-4 col-bg-4  d-block ">
          <div className="d-flex justify-content-center ">
            <button className="buttonAddEvent rounded">
              <span>Add Event</span>
            </button>
            <button className="promoteEvent">Promote Your Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropsEvents;
