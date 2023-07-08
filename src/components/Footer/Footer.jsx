import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestSquare,
  // FaMapMarkerAlt,
  FaPhoneAlt,
  FaMailBulk,
} from 'react-icons/fa';
import styled from 'styled-components';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px 10px 20px;
  background-color: black;
  color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
  font-size: 22px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  width: 30%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <img
            src={logo}
            style={{ height: '70px', borderRadius: '50px', marginRight: '5px' }}
            alt="logo"
          />
          Minority ERC
        </Logo>
        <Desc>
          As a company specializing in the Employee Retention Credit (ERC),
          Minority ERC can offer a range of services to assist businesses in
          claiming the credit and managing related
        </Desc>

        <SocialContainer>
          <SocialIcon color="385999">
            <FaFacebookSquare />
          </SocialIcon>
          <Link
            style={{ textDecoration: 'none' }}
            to="https://instagram.com/minority_erc?igshid=YmMyMTA2M2Y="
          >
            <SocialIcon color="E4405F">
              <FaInstagram />
            </SocialIcon>
          </Link>
          <SocialIcon color="55ACEE">
            <FaTwitterSquare />
          </SocialIcon>

          <SocialIcon color="E60023">
            <FaPinterestSquare />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>USEFUL LINK</Title>
        <List>
          <ListItem>
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
              to="/"
            >
              HOME
            </Link>
          </ListItem>

          <ListItem>
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
              to="/aboutus"
            >
              ABOUT US
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
              to="/services"
            >
              SERVICES
            </Link>
          </ListItem>
          <ListItem>
            {' '}
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
              to="/contact"
            >
              CONTACT US
            </Link>
          </ListItem>
          <ListItem>
            {' '}
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
              to="/faq"
            >
              FAQ
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT US</Title>
        {/* <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px", fontSize: "22px" }} />
          LINE 7 NORTH AHMED BADAWY INTERSECTION, GAMIET AHMED ORABY, EL OBOUR
          CITY
        </ContactItem> */}
        <ContactItem>
          <FaPhoneAlt style={{ marginRight: '10px', fontSize: '26px' }} />
          561-839-6013
        </ContactItem>
        <ContactItem>
          <FaMailBulk style={{ marginRight: '10px', fontSize: '26px' }} />
          Support@minorityerc.com
        </ContactItem>
        <span style={{ marginTop: '40px' }}>
          Copyright notice: "© 2023 Minority ERC. All rights reserved."
        </span>
      </Right>
    </Container>
  );
};

export default Footer;
