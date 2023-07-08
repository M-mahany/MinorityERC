import React, { useState } from 'react';
import './Counter.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
  const [visible, setVisible] = useState();

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  return (
    <div className="mainBoxDivCounter">
      <div className="leftBoxCounter">
        <img
          className="imgCounter"
          src="https://snacknation.com/wp-content/uploads/2022/05/How-To-To-File-Your-Employee-Retention-Credit-e1653436371666.png"
          alt="img"
        />
        <p
          style={{
            color: 'grey',
            fontWeight: '600',
            fontSize: '32px',
            paddingTop: '15px',
          }}
        >
          What is ERC?
        </p>
        <p
          style={{ fontSize: '16px', textAlign: 'center', paddingTop: '10px' }}
        >
          The Employee Retention Credit (ERC) is a refundable tax credit for
          businesses that continued to pay employees while shut down due to the
          COVID-19 pandemic or had significant declines in gross receipts from
          March 13, 2020 to Dec. 31, 2021.
        </p>
      </div>
      <ScrollTrigger
        className="counters"
        onEnter={onEnterViewport}
        onExit={onExitViewport}
      >
        <div className="mainDiv">
          <div className="counter">
            {visible && <CountUp end={23570} duration={0.8} />}
          </div>
          <p>Business Enrolled</p>
        </div>

        <div className="mainDiv">
          <div className="counter">
            {visible && <CountUp end={275400} duration={0.8} />}
          </div>
          <p>Employees Qualified</p>
        </div>

        <div className="mainDiv">
          <div className="counter">
            {visible && <CountUp end={4} duration={0.8} />}
            <span style={{ fontSize: '35px' }}>Billion</span>
          </div>
          <p>Credit Recovered</p>
        </div>
      </ScrollTrigger>
    </div>
  );
};
export default Counter;
