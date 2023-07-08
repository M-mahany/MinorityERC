import React, { useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import "./Testmonial.css";
import testmonialData from "../../TestmonialData";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Tetsmonial = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  //   useEffect(() => {
  //     setInterval(() => {
  //       setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
  //     }, 500000);
  //   }, []);

  return (
    <div className="testmonial">
      <h2 style={{ textAlign: "center", margin: "50px 0px 50px 0px" }}>
        Testmonials
      </h2>
      <div
        direction="left"
        className="Arrow"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <FaCaretLeft />
      </div>

      <Wrapper slideIndex={slideIndex}>
        {testmonialData.map((p) => (
          <div className="SlideS" key={p.id}>
            <div className="ImgContainerS">
              <img className="Img" src={p.img} alt="img" />
            </div>
            <div className="InfoContainerS">
              <div className="WrapperContainer">
                <h1 className="Title">{p.name}</h1>
                <p className="Desc">{p.message}</p>
                <div className="starDiv">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Wrapper>
      <div
        direction="right"
        className="Arrow"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <FaCaretRight />
      </div>
    </div>
  );
};

export default Tetsmonial;
