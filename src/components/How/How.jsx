import React from "react";
import "./How.css";

const How = () => {
  return (
    <div className="HowItWorksMainDiv">
      <h2 style={{ marginBottom: "70px" , color:'grey', fontWeight:'600'}}>How Does It Works?</h2>
      <div className="mainDivHow">
        <div className="numberDivHow">
          <span style={{ color: "#0693e3" }}>1</span>
          <span
        className='spanStyled'
          ></span>
        </div>

        <div className="numberTextDiv">
          <p>Schedule free qualification call and check eligibility</p>
        </div>
      </div>

      <div className="mainDivHow">
        <div className="numberDivHow">
          <span style={{ color: "#0693e3" }}>2</span>
          <span
        className='spanStyled'
          ></span>
        </div>

        <div className="numberTextDiv">
          <p>Work with our team to get docs and info filed</p>
        </div>
      </div>

      <div className="mainDivHow">
        <div className="numberDivHow">
          <span style={{ color: "#0693e3" }}>3</span>
          <span
        className='spanStyled'
          ></span>
        </div>

        <div className="numberTextDiv">
          <p>Receive funds that you don't have to pay back!</p>
        </div>
      </div>
    </div>
  );
};
export default How;
