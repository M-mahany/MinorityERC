import React, { useEffect, useState } from 'react';
import './Contact.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { FaLocationArrow } from "react-icons/fa";
import { MdAlternateEmail, MdPhoneInTalk } from 'react-icons/md';
import { BsGlobeAmericas } from 'react-icons/bs';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'Contact Form'), {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
        date: Timestamp.fromDate(new Date()),
      });
      setResponse('success');
    } catch (err) {
      setResponse('fail');
      setError(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Contact">
      <NavBar />
      <div className="containerC">
        <div className="leftBox">
          <div className="infoBox">
            <h4 style={{ marginBottom: '20px', color: '#0693e3' }}>
              Contact us
            </h4>
            {/* <div className="box1">
              <FaLocationArrow
                style={{ paddingTop: "10px", fontSize: "28px" }}
              />
              <div className="box2">
                <h5 style={{ color: "rgb(170, 170, 170)" }}>ADDRESS</h5>
                <p></p>
              </div>
            </div> */}
            <div className="box1">
              <MdAlternateEmail
                style={{ paddingTop: '10px', fontSize: '28px' }}
              />
              <div className="box2">
                <h5 style={{ color: 'rgb(170, 170, 170)' }}>EMAIL</h5>
                <p>Support@minorityerc.com</p>
              </div>
            </div>
            <div className="box1">
              <MdPhoneInTalk style={{ paddingTop: '10px', fontSize: '28px' }} />
              <div className="box2">
                <h5 style={{ color: 'rgb(170, 170, 170)' }}>PHONE</h5>
                <p>561-839-6013</p>
              </div>
            </div>
            <div className="box1">
              <BsGlobeAmericas
                style={{ paddingTop: '10px', fontSize: '28px' }}
              />
              <div className="box2">
                <h5 style={{ color: 'rgb(170, 170, 170)' }}>WEBSITE</h5>
                <p>www.miniorityerc.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBoxC">
          <div className="formBox">
            <div className="form">
              <h5 style={{ marginBottom: '20px' }}>Get in touch</h5>
              {!response && (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      aria-label="With textarea"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
              {response === 'success' && (
                <p>Thank you for your message. We will get back to you soon </p>
              )}
              {response === 'fail' && <p>Unknown Error {error}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
