import React, { Fragment, useState } from "react";
import "./dashboard.css";
import img from "../../images/Frame 6.png";
import img1 from "../../images/1.jpg";
import img2 from "../../images/illustration-of-store-or-market-flat-design-vector.jpg";

export default function DashboardV2() {
  const [getStarting, setgetStarting] = useState({
    publishStore: 1,
    customizeDesign: 0,
    addFirstProduct: 0,
    addDomain: 0,
  });
  const [open, setOpen] = useState("customizeDesign");

  const handleOpen = (type) => {
    setOpen(type);
  };
  const handleDone = (current, next) => {
    setOpen(next);
    setgetStarting({
      ...getStarting,
      [current]: 1,
    });
  };
  return (
    <Fragment>
      <div className="container my-5 w-50">
        <div className="onboaringSec">
          <div className="mb-3">
            <div className="setupStore">
              <p>Setup your store with these simple steps!</p>
              <p>2 out of 4 completed</p>
            </div>
            <div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="DFLEX StepSmStyle">
            <div>publish store online</div>
            <div className="bg-success text-white p-1">Done</div>
          </div>
          {open !== "customizeDesign" ? (
            <div
              onClick={() =>
                getStarting.customizeDesign !== 1 &&
                handleOpen("customizeDesign")
              }
              className="DFLEX StepSmStyle"
            >
              <div>Customize store design</div>
              {getStarting.customizeDesign === 1 ? (
                <div className="bg-success text-white p-1">Done</div>
              ) : (
                <button className="LinkedBtn">Customize Design</button>
              )}
            </div>
          ) : (
            <div className="StepBgStyle DFLEX">
              <div className="stepBgHeader">
                <h6>Customize store design</h6>
                <p>
                  Choose one of our professionally designed, responsive
                  templates. Also, add your logo, colors, and images that
                  reflects your brand.
                </p>
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => handleOpen("addFirstProduct")}
                    className="skipBtn"
                  >
                    Skip
                  </button>
                  <button
                    onClick={() =>
                      handleDone("customizeDesign", "addFirstProduct")
                    }
                    className="blueBtn"
                  >
                    Customize Design
                  </button>
                </div>
              </div>
              <div>
                <img src={img} alt="img1" className="imgStyle" />
              </div>
            </div>
          )}
          {open !== "addFirstProduct" ? (
            <div
              onClick={() =>
                getStarting.addFirstProduct !== 1 &&
                handleOpen("addFirstProduct")
              }
              className="DFLEX StepSmStyle"
            >
              <div>Add your first product!</div>
              {getStarting.addFirstProduct === 1 ? (
                <div className="bg-success text-white p-1">Done</div>
              ) : (
                <button className="LinkedBtn">Add a Product</button>
              )}
            </div>
          ) : (
            <div className="StepBgStyle DFLEX">
              <div className="stepBgHeader">
                <h6>Add your first product</h6>
                <p>
                  Showcase your products and services to customers.Add products
                  one by one or using bulk import from an Excel sheet.
                </p>
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => handleOpen("addDomain")}
                    className="skipBtn"
                  >
                    Skip
                  </button>
                  <button
                    onClick={() => handleDone("addFirstProduct", "addDomain")}
                    className="blueBtn"
                  >
                    Add Products
                  </button>
                </div>
              </div>
              <div>
                <img src={img1} alt="img1" className="imgStyle" />
              </div>
            </div>
          )}

          {open !== "addDomain" ? (
            <div
              onClick={() =>
                getStarting.addDomain !== 1 && handleOpen("addDomain")
              }
              className="DFLEX StepSmStyle"
            >
              <div>Get known with a unique domain</div>
              {getStarting.addDomain === 1 ? (
                <div className="bg-success text-white p-1">Done</div>
              ) : (
                <button className="LinkedBtn">Customize Domain</button>
              )}
            </div>
          ) : (
            <div className="StepBgStyle DFLEX">
              <div className="stepBgHeader">
                <h6>Get known with a unique domain</h6>
                <p>
                  Give your store a unique domain to reach your customers You
                  will get a free domain when you subscribe to one of our paid
                  plans.
                </p>
                <div className="d-flex align-items-center">
                  <button onClick={() => handleOpen(null)} className="skipBtn">
                    Skip
                  </button>
                  <button
                    onClick={() => handleDone("addDomain", null)}
                    className="blueBtn"
                  >
                    Setup Domain
                  </button>
                </div>
              </div>
              <div>
                <img src={img2} alt="img1" className="imgStyle" />
              </div>
            </div>
          )}
          <div>
            <p>Skip All Steps</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
