import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './Services.css';
import {
  MdGppGood,
  MdOutlineContactSupport,
  MdOutlineBusiness,
  MdOutlineScreenshotMonitor,
} from 'react-icons/md';
import { CgCalculator } from 'react-icons/cg';
import { ServicesData } from '../../ServicesData';
import { GrDocumentText } from 'react-icons/gr';
import { BsBookmarkCheck } from 'react-icons/bs';
import { AiFillIdcard } from 'react-icons/ai';
import { TbReceiptTax } from 'react-icons/tb';
import { FaRegLightbulb } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="SerMainDiv">
      <NavBar />
      <div className="mainContainerSer">
        <div className="titleDivServ">
          <h1>Our Services</h1>
        </div>
        <div className="boxContainerSer">
          {ServicesData.map((service) => (
            <div className="BoxService" key={service.id}>
              <div className="iconDivSer">
                {(service.id === 1 && <MdGppGood />) ||
                  (service.id === 2 && <CgCalculator />) ||
                  (service.id === 3 && <GrDocumentText />) ||
                  (service.id === 4 && <BsBookmarkCheck />) ||
                  (service.id === 5 && <AiFillIdcard />) ||
                  (service.id === 6 && <MdOutlineContactSupport />) ||
                  (service.id === 7 && <MdOutlineBusiness />) ||
                  (service.id === 8 && <TbReceiptTax />) ||
                  (service.id === 9 && <FaRegLightbulb />) ||
                  (service.id === 10 && <MdOutlineScreenshotMonitor />)}
              </div>
              <p style={{ fontWeight: 'bold', fontSize: '14px' }}>
                {service.title}
              </p>
              <p style={{ textAlign: 'center', fontSize: '13px' }}>
                {service.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
