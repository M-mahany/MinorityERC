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
import {
  collection,
  Timestamp,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { Link, useParams } from 'react-router-dom';

const ApplicationPrev = () => {
  const [tab, setTab] = useState('Business Information');
  const [data, setData] = useState([]);
  const { docId } = useParams();
  const [docs1, setDocs1] = useState();
  const [docs, setDocs] = useState();
  const [docs2, setDocs2] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const docRef = doc(db, 'Application Form', docId);
        const docSnap = await getDoc(docRef);
        setData(docSnap.data().BusinessTaxInfoData);
        const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
        const arry1 = BusinessInfo.map((label) => label.label);
        const arry2 = PersonalInfo.map((label) => label.label);
        const arry3 = BusinessTaxInfo.map((label) => label.label);
        setDocs(zip(arry1, Object.values(docSnap.data().BusinesInfoData)));
        setDocs1(zip(arry2, Object.values(docSnap.data().PersonalInfoData)));
        setDocs2(zip(arry3, Object.values(docSnap.data().BusinessTaxInfoData)));
      } catch (err) {
        console.log(err);
      }
    };
    if (docId) {
      fetchDoc();
    }
  }, [docId]);

  // console.log(businessEntries);

  // const doc = BusinessInfo.map((value, index) => {
  //   const linkContent = businessValue[index];
  //   return (
  //     <div>
  //       <p>{value}</p>
  //       <p>{linkContent}</p>
  //     </div>
  //   );
  // });
  console.log(data);
  return (
    <div className="application">
      <NavBar />

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
              {docs &&
                docs.map((doc) => (
                  <div>
                    <h3>{doc[0]}</h3>
                    <p>{doc[1]}</p>
                  </div>
                ))}
            </div>
          </Tab>
          <Tab
            eventKey="Business Owner Personal Information"
            title="Business Owner Personal Information"
          >
            <div className="mainAppDiv">
              {docs1 &&
                docs1.map((doc) => (
                  <div>
                    <h3>{doc[0]}</h3>
                    <p>{doc[1]}</p>
                  </div>
                ))}
            </div>
          </Tab>
          <Tab
            eventKey="Business Tax Related Questions"
            title="Business Tax Related Questions"
          >
            <div className="mainAppDiv">
              {docs2 &&
                docs2.map((doc) => (
                  <div>
                    <h3>{doc[0]}</h3>
                    <p>{doc[1]}</p>{' '}
                  </div>
                ))}
              <h3>Print Name</h3>
              <p>{data.PrintName}</p>
              <h3>signature</h3>
              <p>{data.signature}</p>
              <h3>title</h3>
              <p>{data.title}</p>
              <h3>Date</h3>
              <p>{data.date}</p>
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

      <Footer />
    </div>
  );
};

export default ApplicationPrev;
