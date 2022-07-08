import { list, list2, list3 } from "../src/data";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../src/Tabs.css";

const Tabss = () => {
  return (
    <Tabs>
      <TabList className="today text-center">
        <Tab>
          <button className=" rounded ">TODAY</button>
        </Tab>
        <Tab>
          <button className=" rounded ">UPCOMING</button>
        </Tab>
        <Tab>
          <button className=" rounded ">PAST</button>
        </Tab>
      </TabList>

      <TabPanel>
        <div className="container ">
          <div className="row">
            {list.map((item) => (
              <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center ">
                <div class="card card-style position-relative">
                  <div className="rectangle text-center">Conference</div>
                  <img class="card-img-top" src={item.image} alt="Card cap" />
                  <div class="card-body">
                    <p className="cardheading fw-bold">{item.heading1}</p>
                    <p className="cardheading1">{item.heading2}</p>
                    <p className="cardheading2">
                      {item.content}
                      <a href="link" className="readmore">
                        Read more
                      </a>
                    </p>

                    <div className="row">
                      <div className="col-lg-9 col-md-8 col-8">
                        <p className="eventdate d-inline">
                          Event Date :
                          <span style={{ color: "#20c0e8", marginLeft: "2px" }}>
                            {item.date}
                          </span>
                        </p>
                      </div>

                      <div className=" d-flex justify-content-end col-lg-3 col-md-4 col-4">
                        <a href={item.twitter}>
                          <button className="buttonicontwitter">
                            <i class="fa-brands fa-twitter icon"></i>
                          </button>
                        </a>
                        <a href={item.link}>
                          <button className="buttoniconlink">
                            <i class="fa-solid fa-link icon"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="container ">
          <div className="row">
            {list2.map((item) => (
              <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center ">
                <div class="card card-style position-relative">
                  <div className="rectangle text-center">Conference</div>
                  <img class="card-img-top" src={item.image} alt="Card cap" />
                  <div class="card-body">
                    <p className="cardheading fw-bold">{item.heading1}</p>
                    <p className="cardheading1">{item.heading2}</p>
                    <p className="cardheading2">
                      {item.content}
                      <a href="link" className="readmore">
                        Read more
                      </a>
                    </p>

                    <div className="row">
                      <div className="col-lg-9 col-md-8 col-8">
                        <p className="eventdate d-inline">
                          Event Date :
                          <span style={{ color: "#20c0e8", marginLeft: "2px" }}>
                            {item.date}
                          </span>
                        </p>
                      </div>

                      <div className=" d-flex justify-content-end col-lg-3 col-md-4 col-4">
                        <a href={item.twitter}>
                          <button className="buttonicontwitter">
                            <i class="fa-brands fa-twitter icon"></i>
                          </button>
                        </a>
                        <a href={item.link}>
                          <button className="buttoniconlink">
                            <i class="fa-solid fa-link icon"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="container ">
          <div className="row">
            {list3.map((item) => (
              <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center ">
                <div class="card card-style position-relative">
                  <div className="rectangle text-center">Conference</div>
                  <img class="card-img-top" src={item.image} alt="Card cap" />
                  <div class="card-body">
                    <p className="cardheading fw-bold">{item.heading1}</p>
                    <p className="cardheading1">{item.heading2}</p>
                    <p className="cardheading2">
                      {item.content}
                      <a href="link" className="readmore">
                        Read more
                      </a>
                    </p>

                    <div className="row">
                      <div className="col-lg-9 col-md-8 col-8">
                        <p className="eventdate d-inline">
                          Event Date :
                          <span style={{ color: "#20c0e8", marginLeft: "2px" }}>
                            {item.date}
                          </span>
                        </p>
                      </div>

                      <div className=" d-flex justify-content-end col-lg-3 col-md-4 col-4">
                        <a href={item.twitter}>
                          <button className="buttonicontwitter">
                            <i class="fa-brands fa-twitter icon"></i>
                          </button>
                        </a>
                        <a href={item.link}>
                          <button className="buttoniconlink">
                            <i class="fa-solid fa-link icon"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Tabss;
