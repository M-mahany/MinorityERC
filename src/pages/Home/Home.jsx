import React, { useEffect } from 'react';
import './Home.css';
import Calculator from '../../components/Calculator/Calculator';
import NavBar from '../../components/NavBar/NavBar';
import Faq from '../../components/FAQ/Faq';
import Tetsmonial from '../../components/Testmonial/Testmonial';
import Footer from '../../components/Footer/Footer';
import Counter from '../../components/Counter/Counter';
import How from '../../components/How/How';
import Swipper from '../../components/Swipper/Swipper';
import Cards from '../../components/Cards/Cards';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Home">
      <NavBar />
      <Calculator />
      <Counter />
      <Cards />
      <How />
      <Swipper />
      <Tetsmonial />
      <Faq />
      <Footer />
    </div>
  );
};
export default Home;
