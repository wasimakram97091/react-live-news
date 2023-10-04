import React from "react";
import Styles from "./index.module.scss";

function News({ item, desHandler }) {
  //   console.log(item);
  return (
    <>
      {item && (
        <div className={Styles.main}>
          <div className={Styles.main__content}>
            <div className={Styles.main__content__head}>
              <p>Date - {item?.publishedAt}</p>
              <p>Author - {item?.author}</p>
            </div>

            <div className={Styles.main__content__newsHeading}>
              <h2>{item?.title}</h2>
            </div>
            <div className={Styles.main__content__img}>
              <img src={`${item?.urlToImage}`} alt="Image not supported" />
            </div>
            <div className={Styles.main__content__des}>
              <p>{item?.description}</p>
            </div>
            <div className={Styles.main__content__btn}>
              <button onClick={desHandler}>Read more...</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default News;
