import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="Faq">
      <h2 className="title">Frequently Asked Questions (FAQ)</h2>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is the Employee Retention Credit (ERC)?
          </Accordion.Header>
          <Accordion.Body>
            The Employee Retention Credit is a tax credit designed to encourage
            employers to retain their employees during times of economic
            hardship, such as the COVID-19 pandemic. Eligible businesses can
            claim the credit on their federal payroll tax returns, reducing
            their tax liability and providing financial relief.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How can Minority ERC help my business with the ERC?
          </Accordion.Header>
          <Accordion.Body>
            Minority ERC assists businesses in navigating the complex process of
            claiming the Employee Retention Credit. Our team of experts will
            evaluate your eligibility, help you gather the necessary
            documentation, and guide you through the claim process, ensuring you
            maximize your credit and remain compliant with IRS regulations.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Who can benefit from Minority ERC's services?
          </Accordion.Header>
          <Accordion.Body>
            Minority ERC's services are suitable for businesses of all sizes and
            industries that are looking to maximize their Employee Retention
            Credit. We also assist CPAs and payroll companies by providing
            referrals and support for their clients seeking ERC assistance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How does Minority ERC's referral process work?
          </Accordion.Header>
          <Accordion.Body>
            Minority ERC has established a network of trusted CPAs and payroll
            companies to provide our clients with top-notch financial services.
            After assessing your business's needs, we will connect you with the
            most suitable partner to ensure a seamless and efficient experience.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Are there any industries or businesses that are not eligible for the
            ERC?
          </Accordion.Header>
          <Accordion.Body>
            While most businesses can qualify for the Employee Retention Credit,
            certain organizations, such as government entities and businesses
            receiving specific grants or credits, may not be eligible. Our team
            can help determine your eligibility and advise on any potential
            restrictions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How long does the ERC claim process take?
          </Accordion.Header>
          <Accordion.Body>
            The duration of the claim process can vary depending on the
            complexity of your case and the responsiveness of the IRS. Our team
            at Minority ERC will work diligently to expedite the process and
            ensure you receive your credit as quickly as possible.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Can I claim the ERC if I've already filed my payroll tax returns?
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can still claim the Employee Retention Credit even if you
            have already filed your payroll tax returns. Our team at Minority
            ERC can help you file an amended return to claim the credit
            retrospectively.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            How can I stay updated on ERC-related news and changes?
          </Accordion.Header>
          <Accordion.Body>
            We recommend regularly visiting the IRS website and subscribing to
            their updates. Additionally, you can follow Minority ERC on social
            media and check our website for the latest news and insights related
            to the Employee Retention Credit.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
