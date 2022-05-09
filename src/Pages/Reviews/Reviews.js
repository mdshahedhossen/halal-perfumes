import React from "react";
import './Reviews.css'
import img1 from '../../Images/review/o45.png'
import img2 from '../../Images/review/o2.png'
import img3 from '../../Images/review/01.png'

const Reviews = () => {
  return (
    <div className="review-section" id="reviews">
      <h1 className="text">Client Reviews</h1>
      <div className="reviews">
        <div className="review-card color-1">
          <h4 >
            "This is a best warehouse . All perfumes is good smellable"
          </h4>
          <img
            src={img1}
            alt=""
          />
          <h2>-Shakib-Al-Hasan</h2>
        </div>
        <div className="review-card color-2">
          <h4>
            "This is a best warehouse . All perfumes quality is good."
          </h4>
          <img
            src={img2}
            alt=""
          />
          <h2>-MR. Jhon</h2>
        </div>
        <div className="review-card color-3">
          <h4>
            "Good Perfumes and usable"
          </h4>
          <img
            src={img3}
            alt=""
          />
          <h2>-Mr. Kibriya</h2>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
