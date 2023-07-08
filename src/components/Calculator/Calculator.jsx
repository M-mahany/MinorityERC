import React, { useEffect, useState } from 'react';
import './Calculator.css';
import { BiArrowBack } from 'react-icons/bi';
import Form from 'react-bootstrap/Form';
import questionsData from '../../questionsData';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [next, setNext] = useState(0);
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState(true);
  const [questionsArry, setQuestionsArry] = useState([]);
  const [credit, setCredit] = useState(0);
  const [year, setYear] = useState();
  const [q2020, setQ2020] = useState(4);
  const [q2021, setQ2021] = useState(3);

  function getQuarter(date = new Date()) {
    return Math.floor(date.getMonth() / 3 + 1);
  }

  useEffect(() => {
    if (questionsArry.length > 3) {
      const date = new Date(questionsArry[3].answer);
      setYear(date.getFullYear());
      const StandardDate = '2021-02-15';
      const eligibleDate = new Date(StandardDate);
      if (eligibleDate.getDate() < date.getDate()) {
        console.log('eigible for 2021 4th quarter');
        setQ2020(0);
        setQ2021(4 - getQuarter(date) + 1);
      }
      if (
        eligibleDate.getDate() > date.getDate() &&
        date.getFullYear() === 2021
      ) {
        setQ2020(0);
        setQ2021(3);
      }
      if (date.getFullYear() === 2020) {
        setQ2021(3);
        setQ2020(4 - getQuarter(date) + 1);
      }
      if (date.getFullYear() < 2020) {
        setQ2021(3);
        setQ2020(4);
      }
    }
  }, [questionsArry]);

  const handleBack = () => {
    if (next > 0 && next !== 0) {
      setNext(next - 1);
      setAnswer('');
      setQuestionsArry(questionsArry.slice(0, -1));
    }
  };
  function handleClickNext(q) {
    setQuestionsArry([
      ...questionsArry,
      {
        id: q.id,
        question: q.question,
        answer: answer,
      },
    ]);
    setNext(next + 1);
    setAnswer('');
    setStatus(true);
  }

  useEffect(() => {
    const checkAnswer = () => {
      if (answer === 'Yes' || (next > 0 && answer)) {
        setStatus(false);
      } else {
        setStatus(true);
      }
    };
    checkAnswer();
  }, [answer, next]);

  useEffect(() => {
    const CheckEligibility = () => {
      const answeOne = Number(questionsArry[4].answer);
      const answeTwo = Number(questionsArry[5].answer);
      const totalOne = answeOne * 5000 * q2020;
      const totalTwo = answeTwo * 7000 * q2021;
      const sum = totalOne + totalTwo;
      const total = answeOne + answeTwo;
      console.log(q2020, q2021);
      if (total >= 1) {
        if (
          questionsArry[1].answer === 'Yes' ||
          questionsArry[2].answer === 'Yes'
        ) {
          if (year <= 2021) {
            setCredit(sum);
          }
        }
      } else {
        setCredit(0);
      }
    };
    if (questionsArry.length > 5) {
      CheckEligibility();
    }
  }, [questionsArry, next, year]);

  return (
    <div className="Calculator">
      <div className="mainContainer">
        <div className="leftBox">
          <div className="wrapper">
            <h2 style={{ marginBottom: '20px' }}>
              Maximize Your Employee Retention Credit with Minority ERC
            </h2>
            <h5 style={{ marginBottom: '10px' }}>
              We help businesses navigate the ERC process and connect them with
              expert CPAs and payroll companies.
            </h5>
            <button className="mainButton">
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAf3_1KIa041lCuIx8SbEgEJ-QVGa9uh7gdRlOsgtG0z0qcMloeDMvM3F5v8lhEyOo*"
              >
                Apply Now
              </Link>
            </button>
          </div>
        </div>
        <div className="rightBox">
          <p className="blinkMe">
            <em style={{ fontSize: '46px', fontWeight: '600' }}>
              TRY OUR FREE
            </em>{' '}
            ERC Calculator to see how much you may qualify for!!
          </p>
          <h6
            style={{
              borderBottom: '1px solid grey',
              paddingBottom: '20px',
              fontSize: '14px',
              color: 'rgb(223, 223, 223)',
              textAlign: 'center',
            }}
          >
            Verify Your ERC Eligibility And Calculate Your Maximum Tax Credit.
          </h6>
          {credit > 0 && (
            <div className="question">
              <p>Great News!</p>
              <p>
                Looks like you may qualify for the Employee Retention Credit.
                Based on the employee questions above you can qualify for up to{' '}
                ${credit}
              </p>
              <button className="nextButton">
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAf3_1KIa041lCuIx8SbEgEJ-QVGa9uh7gdRlOsgtG0z0qcMloeDMvM3F5v8lhEyOo*"
                >
                  Apply Now!
                </Link>
              </button>
            </div>
          )}

          {next > 5 && credit === 0 && (
            <div className="question">
              <p>Sorry! looks like you are not eligible</p>
            </div>
          )}

          {questionsData
            .filter((q) => q.id === next)
            .map((data) => (
              <div className="question" key={data.id}>
                <p>{data.question}</p>
                {data.type ? (
                  <input
                    type={data.type}
                    diabled
                    placeholder={data.placeholder && data.placeholder}
                    style={{
                      width: '100%',
                      height: '40px',
                      borderRadius: '5px',
                      textAlign: 'center',
                      fontSize: '16px',
                      border: 'none',
                    }}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                ) : (
                  <Form.Select
                    style={{
                      width: '100%',
                      height: '40px',
                      borderRadius: '5px',
                      textAlign: 'center',
                      fontSize: '16px',
                    }}
                    onChange={(e) => setAnswer(e.target.value)}
                  >
                    <option disabled selected>
                      Please choose option
                    </option>
                    {data.answer.map((a) => (
                      <option>{a}</option>
                    ))}
                  </Form.Select>
                )}

                <div className="buttonDiv">
                  {data.id < 6 && data.id !== 0 && (
                    <div className="backButton" onClick={handleBack}>
                      <BiArrowBack />
                      <span>Back</span>
                    </div>
                  )}
                  <button
                    className="nextButton"
                    onClick={() => handleClickNext(data)}
                    disabled={status}
                  >
                    Next
                  </button>
                </div>
                {answer === 'No' && data.id === 0 && (
                  <span style={{ color: 'red', marginTop: '5px' }}>
                    Sorry, you are not eligible
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
