import React from "react";
import Styles from "./index.module.scss";

function detailsDetails({ backHandler, details }) {
  // console.log(details);
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <div className={Styles.main__content__backBtn}>
            <button onClick={backHandler}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
          </div>
          <div className={Styles.main__content__heading}>
            <h1>{details?.title}</h1>
            <h5>Source - {details?.author}</h5>
          </div>
          <div className={Styles.main__content__img}>
            <img src={`${details?.urlToImage}`} alt="weather img" />
          </div>
          <div className={Styles.main__content__details}>
            <p>{details?.content}</p>
          </div>
          <div className={Styles.main__content__link}>
            <p>
              <a href={details?.url}> Go to full article</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default detailsDetails;
