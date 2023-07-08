import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NavBar from '../../components/NavBar/NavBar';
import './Application.css';
import {
  Additional1,
  Additional2,
  BusinessInfo,
  PersonalInfo,
  BusinessTaxInfo,
} from '../../formsource';
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../../components/Footer/Footer';
import { collection, Timestamp, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

const Application = () => {
  const [BusinesInfoData, setBusinessInfoData] = useState([]);
  const [PersonalInfoData, setPersonalInfoData] = useState([]);
  const [BusinessTaxInfoData, setBusinessTaxInfoData] = useState([]);
  const [arry1, setArry1] = useState([]);
  const [arry2, setArry2] = useState([]);
  const [arry3, setArry3] = useState([]);
  const [arry4, setArry4] = useState([]);
  const [response, setResponse] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [fetch, setFetch] = useState(false);
  const [tab, setTab] = useState('Business Information');
  const [arryId, setArryId] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFetch(true);
      await addDoc(collection(db, 'Application Form'), {
        BusinesInfoData,
        PersonalInfoData,
        BusinessTaxInfoData,
        Date: Timestamp.fromDate(new Date()),
      });
      setFetch(false);
      setResponse('success');
    } catch (err) {
      setResponse('fail');
      setError(true);
      setErrorMessage(err);
    }
  };

  const handleChecboxes = (input, e) => {
    const id = input.id;
    const { value, checked } = e.target;
    if (checked) {
      if (id === 1) {
        setArry1([...arry1, value]);
        setArryId(id);
      }
      if (id === 2) {
        setArry2([...arry2, value]);
        setArryId(id);
      }
      if (id === 3) {
        setArry3([...arry3, value]);
        setArryId(id);
      }
      if (id === 4) {
        setArry4([...arry4, value]);
        setArryId(id);
      }
    } else {
      if (!checked) {
        if (id === 1) {
          setArry1((pre) => {
            return [...pre.filter((selection) => selection !== value)];
          });
          setArryId(id);
        }
        if (id === 2) {
          setArry2((pre) => {
            return [...pre.filter((selection) => selection !== value)];
          });
          setArryId(id);
        }
        if (id === 3) {
          setArry3((pre) => {
            return [...pre.filter((selection) => selection !== value)];
          });
          setArryId(id);
        }
        if (id === 4) {
          setArry4((pre) => {
            return [...pre.filter((selection) => selection !== value)];
          });
          setArryId(id);
        }
      }
    }
  };

  useEffect(() => {
    if (arryId) {
      if (arryId === 1) {
        setBusinessTaxInfoData({ ...BusinessTaxInfoData, [arryId]: arry1 });
      }
      if (arryId === 2) {
        setBusinessTaxInfoData({ ...BusinessTaxInfoData, [arryId]: arry2 });
      }
      if (arryId === 3) {
        setBusinessTaxInfoData({ ...BusinessTaxInfoData, [arryId]: arry3 });
      }
      if (arryId === 4) {
        setBusinessTaxInfoData({ ...BusinessTaxInfoData, [arryId]: arry4 });
      }
    }
  }, [arry1, arry2, arry3, arry4]);

  const handleChange = (input, e) => {
    const title = input.title;
    const id = input.id;
    const value = e.target.value;
    console.log(title);
    if (title === 'BusinessInfo') {
      setBusinessInfoData({ ...BusinesInfoData, [id]: value });
    }
    if (title === 'PersonalInfo') {
      setPersonalInfoData({ ...PersonalInfoData, [id]: value });
    }
    if (title === 'BusinessTaxInfo' && id !== undefined) {
      setBusinessTaxInfoData({ ...BusinessTaxInfoData, [id]: value });
    }
    if (id === undefined) {
      setBusinessTaxInfoData({ ...BusinessTaxInfoData, [input]: value });
    }
  };
  console.log(PersonalInfoData, BusinesInfoData, BusinessTaxInfoData);
  return (
    <div className="application">
      <NavBar />
      {response === 'success' ? (
        <div className="successDiv">
          <p>
            Thank you for your Application, we will get back to your shortly
          </p>
          <button className="mainButton">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              Go to Home Page
            </Link>
          </button>
        </div>
      ) : (
        <div className="AppContainer">
          <h2 style={{ textAlign: 'center', padding: '40px 0px 40px 0px' }}>
            Application Form
          </h2>
          <Tabs
            defaultActiveKey="Business Information"
            id="fill-tab-example"
            className="mb-3"
            fill
            activeKey={tab}
            onSelect={(e) => setTab(e.target)}
          >
            <Tab eventKey="Business Information" title="Business Information">
              <div className="mainAppDiv">
                {BusinessInfo.map((input) => (
                  <div style={{ flex: '1' }} key={input.id}>
                    <label>{input.label}</label>
                    {input.type === 'select' ? (
                      <select onChange={(e) => handleChange(input, e)}>
                        <option disabled selected>
                          please Choose Option
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    ) : (
                      <input
                        type={input.type}
                        onChange={(e) => handleChange(input, e)}
                      />
                    )}{' '}
                  </div>
                ))}
                <button
                  className="submitBttn"
                  onClick={() => setTab('Business Owner Personal Information')}
                >
                  Next
                </button>
                <button
                  className="submitBttn"
                  onClick={handleSubmit}
                  disabled={fetch}
                >
                  Submit
                </button>
              </div>
            </Tab>
            <Tab
              eventKey="Business Owner Personal Information"
              title="Business Owner Personal Information"
            >
              <div className="mainAppDiv">
                {PersonalInfo.map((input) => (
                  <div style={{ flex: '1' }} key={input.id}>
                    <label>{input.label}</label>{' '}
                    {input.type === 'select' ? (
                      <select onChange={(e) => handleChange(input, e)}>
                        <option disabled selected>
                          please Choose Option
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    ) : (
                      <input
                        type={input.type}
                        onChange={(e) => handleChange(input, e)}
                      />
                    )}
                  </div>
                ))}
                <div
                  stye={{
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <button
                    className="submitBttn"
                    onClick={() => setTab('Business Information')}
                  >
                    back
                  </button>
                  <button
                    className="submitBttn"
                    onClick={() => setTab('Business Tax Related Questions')}
                  >
                    Next
                  </button>
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="Business Tax Related Questions"
              title="Business Tax Related Questions"
            >
              <div className="mainAppDiv">
                {BusinessTaxInfo.map((input) => (
                  <div style={{ flex: '2' }} key={input.id}>
                    {input.header && <h5>{input.header}</h5>}
                    <label>{input.label}</label>{' '}
                    {input.type === 'select' && (
                      <select onChange={(e) => handleChange(input, e)}>
                        <option disabled selected>
                          please Choose Option
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    )}
                    {input.type === 'checkbox' &&
                      input.option.map((o) => (
                        <label
                          style={{
                            marginLeft: '4px',
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <input
                            className="checkboxInput"
                            type={input.type}
                            value={o}
                            onChange={(e) => handleChecboxes(input, e)}
                          />
                          {''} {o}
                        </label>
                      ))}
                    {input.type === 'text' && (
                      <input
                        type={input.type}
                        onChange={(e) => handleChange(input, e)}
                      />
                    )}
                  </div>
                ))}
                <div className="singingDiv">
                  <h5>
                    By signing Below, you agree to have Minority ERC and Badie
                    Alliance Tax Service to review your documents and you agree
                    that all the information provided above and sent from you in
                    any follow up email is true and accurate.
                  </h5>
                  <input
                    type="text"
                    placeholder="PRINT NAME"
                    onChange={(e) => handleChange('PrintName', e)}
                  />
                  <input
                    type="text"
                    placeholder="TITLE"
                    onChange={(e) => handleChange('title', e)}
                  />
                  <input
                    type="text"
                    placeholder="SIGNATURE"
                    onChange={(e) => handleChange('signature', e)}
                  />
                  <label>
                    Date {''}
                    <input
                      type="date"
                      onChange={(e) => handleChange('date', e)}
                    />
                  </label>
                </div>
                <div
                  stye={{
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <button
                    className="submitBttn"
                    onClick={() =>
                      setTab('Business Owner Personal Information')
                    }
                  >
                    back
                  </button>
                  <button
                    className="submitBttn"
                    onClick={() =>
                      setTab('Additional Business Owner Personal Information')
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </Tab>
            {/*  <Tab
              eventKey="Additional Business Owner Personal Information"
              title="Additional Business Owner Personal Information"
            >
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1</Accordion.Header>
                  <Accordion.Body>
                    <div className="mainAppDiv">
                      {Additional1.map((input) => (
                        <div style={{ flex: '1' }} key={input.id}>
                          <label>{input.label}</label>{' '}
                          {input.type === 'select' ? (
                            <select onChange={(e) => handleChange(input.id, e)}>
                              <option disabled selected>
                                please Choose Option
                              </option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          ) : (
                            <input
                              type={input.type}
                              onChange={(e) => handleChange(input.id, e)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>2</Accordion.Header>
                  <Accordion.Body>
                    <div className="mainAppDiv">
                      {Additional2.map((input) => (
                        <div style={{ flex: '1' }} key={input.id}>
                          <label>{input.label}</label>{' '}
                          {input.type === 'select' ? (
                            <select onChange={(e) => handleChange(input.id, e)}>
                              <option disabled selected>
                                please Choose Option
                              </option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          ) : (
                            <input
                              type={input.type}
                              onChange={(e) => handleChange(input.id, e)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="buttonDivApp">
                <button
                  className="submitBttn"
                  onClick={() => setTab('Business Tax Related Questions')}
                >
                  back
                </button>
                <button
                  className="submitBttn"
                  onClick={handleSubmit}
                  disabled={fetch}
                >
                  Submit
                </button>
                {error && (
                  <span style={{ color: 'red' }}>
                    {`Unknown Error: ${errorMessage}`}
                  </span>
                )}
              </div> */}
            {/* </Tab> */}
          </Tabs>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Application;
