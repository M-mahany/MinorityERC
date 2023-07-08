import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/Faq';

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Faq">
      <NavBar />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Faq;
