import React from "react";
import list2 from "./data2";
import "../src/Featuredevent.css";

const Featuredevent = () => {
  return (
    <div className="container">
      <h1 className="featuredevent justify-content-center justify-content-sm-start d-flex">FEATURED EVENTS</h1>
      <div className="row">
        {list2.map((item) => (
          <div className=" d-flex justify-content-center col-lg-3 col-md-4 col-sm-12">
            <div class="card fecard">
              <img class="card-img-top" src={item.image} alt="Card  cap" />
              <div class="card-body">
                <p className="featuredeventtitle">{item.title}</p>
                <p className="">
                  <i class="fa-solid fa-calendar facal"></i>
                  <span className="ms-2 textcalender">{item.event}</span>
                </p>
                <p className="location">
                  <i class="fa-solid fa-location-dot faloc"></i>
                  <span className="ms-2">{item.location}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredevent;
