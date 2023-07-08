import React from 'react';
import './Cards.css';
const Cards = () => {
  return (
    <div className="Cards">
      <h2>
        We've secured over <em>$125 milion</em> in ERC funds for businesses like
        yours - money that can be used for anything.
      </h2>
      <div className="CardsConatiner">
        <div className="CardsBoxes">
          <h5>Limousine in New York</h5>
          <div className="imgConatiner">
            <div className="imgTitle">
              <span>Amount</span>
              <span>$400,000</span>
              <span>Funded</span>
            </div>
            <img
              src="https://bdlslc.com/wp-content/uploads/2018/05/Car-Service-Arlington-MA.jpg"
              alt="img"
            />
          </div>
          <p>Used funds for fleet expansion and marketing camaigns.</p>
        </div>
        <div className="CardsBoxes">
          <h5>Retail business in New Jersey</h5>
          <div className="imgConatiner">
            <div className="imgTitle">
              <span>Amount</span>
              <span>$85,000</span>
              <span>Funded</span>
            </div>
            <img
              src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/04/Interior-Image-of-a-empty-tailor-shop-for-custom-clothing-1-1536x1024.jpg"
              alt="img"
            />
          </div>
          <p>Used funds for new store equipments and raising inventory.</p>
        </div>
        <div className="CardsBoxes">
          <h5>Hotel in Las Vegas</h5>
          <div className="imgConatiner">
            <div className="imgTitle">
              <span>Amount</span>
              <span>$2,050,000</span>
              <span>Funded</span>
            </div>
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/06/25/10/las-vegas-strip.jpg"
              alt="img"
            />
          </div>
          <p>Used ERC funds for marketing and stuff bonus</p>
        </div>
        <div className="CardsBoxes">
          <h5>Restaurant in Washington</h5>
          <div className="imgConatiner">
            <div className="imgTitle">
              <span>Amount</span>
              <span>$200,000</span>
              <span>Funded</span>
            </div>
            <img
              src="https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123"
              alt="img"
            />
          </div>
          <p>Used funds for patio expansion and new equipments</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
