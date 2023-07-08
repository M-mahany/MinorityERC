import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './About.css';
import { GiOnTarget, GiCutDiamond, GiImpactPoint } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="AboutMainDiv">
      <NavBar />
      <div className="mainContainerA">
        <div className="topContainer">
          <div className="topLeft">
            <h1
              style={{
                fontSize: '60px',
                color: '#0693e3',
              }}
            >
              About Us
            </h1>
          </div>
        </div>
        <div id="bottomContainerA">
          <div className="bottomBox">
            <div className="boxA">
              <h3>Our Story</h3>
              <p>
                Minority ERC was founded with a vision to empower businesses by
                helping them maximize their Employee Retention Credit (ERC). Our
                team of experienced professionals recognized the complexities
                and challenges many businesses faced when trying to claim the
                ERC. We saw an opportunity to make a difference by simplifying
                the process and providing comprehensive support to businesses of
                all sizes and industries.
              </p>
            </div>
          </div>
          <div className="boxB">
            <div className="AboutIcon">
              <GiOnTarget />
            </div>

            <h3>Our mission</h3>
            <p>
              at Minority ERC is to help businesses unlock the full potential of
              the Employee Retention Credit, providing financial relief and
              stability during challenging times. We are committed to fostering
              strong relationships with industry-leading CPAs and payroll
              companies to ensure our clients receive the best possible services
              and support.
            </p>
          </div>
          <div className="boxB">
            <div className="AboutIcon">
              <GiCutDiamond />
            </div>
            <h3>Our Values</h3>
            <h4>At Minority ERC, we believe in:</h4>
            <ul>
              <li>
                Integrity: We are dedicated to providing honest, transparent,
                and reliable services to our clients.
              </li>
              <li>
                Professionalism: Our team of experts brings a wealth of
                experience and knowledge to every engagement, ensuring
                high-quality results.
              </li>
              <li>
                Customer Focus: We prioritize our clients' needs, working
                tirelessly to provide personalized solutions that deliver
                exceptional outcomes.
              </li>
              <li>
                Diversity: We value and celebrate the unique perspectives and
                backgrounds of our team, clients, and partners, believing that
                diversity drives innovation and success.
              </li>
              <li>
                Collaboration: We work closely with our clients and partners,
                fostering an environment of open communication and teamwork.
              </li>
            </ul>
          </div>
          <div className="boxB">
            <div className="AboutIcon">
              <HiOutlineLightBulb />
            </div>
            <h3>Our Approach</h3>
            <h4>
              At Minority ERC, our approach to helping businesses with the ERC
              process involves:
            </h4>

            <ol>
              <li>
                Personalized Consultations: We take the time to understand your
                business's unique needs and goals, tailoring our services to
                provide the best possible support.
              </li>
              <li>
                Comprehensive Analysis: Our team conducts a thorough analysis of
                your business's eligibility and potential ERC benefits, ensuring
                you maximize your credit
              </li>
              <li>
                Trusted Referrals: We connect you with our network of trusted
                CPAs and payroll companies, providing seamless and efficient
                collaboration to achieve optimal results.
              </li>
              <li>
                Ongoing Support: Minority ERC remains your dedicated partner
                throughout the ERC process, offering guidance and assistance as
                needed.
              </li>
            </ol>
          </div>
          <div className="boxB">
            <div className="AboutIcon">
              <GiImpactPoint />
            </div>
            <h3>Our Impact</h3>
            <p>
              Since our founding, Minority ERC has helped numerous businesses
              successfully navigate the Employee Retention Credit process. We
              are proud of the positive impact we've had on our clients and
              their communities, and we continually strive to expand our reach
              and improve our services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
