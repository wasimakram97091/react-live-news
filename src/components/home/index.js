import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import News from "../News/News";
import NewsDetails from "../NewsDetails/NewsDetails";

function Home() {
  const [news, setNews] = useState();
  const [showMore, setShowMore] = useState(false);
  const [details, setDetails] = useState(null);
  async function getAPI() {
    const API_KEY = "9252ea08a4e34f93a6d73bf365c28a71";

    try {
      const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${API_KEY}`);
      const data = await res.json();
      setNews(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const deatilsHandler = (data) => {
    setShowMore(true);
    // console.log(data);
    setDetails(data);
  };

  const handlerToBack = () => {
    setShowMore(false);
  };

  useEffect(() => {
    getAPI();
    setNews(news);
    // console.log(news);
  }, []);

  let currentTime;
  let currentDate;

  const getTime = () => {
    currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };
  const getDate = () => {
    currentDate = new Date().toLocaleDateString();
    return currentDate;
  };

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <div className={Styles.main__content__heading}>
            <div className={Styles.main__content__heading__logo}>
              <h1>News360</h1>
            </div>
            <div className={Styles.main__content__heading__headlines}>
              <h2>Today Headlines</h2>
            </div>
            <div className={Styles.main__content__heading__head}>
              <h3>Time - {getTime()}</h3>
              <h3>Date - {getDate()}</h3>
            </div>
          </div>

          <div className={Styles.main__content__runningHeading}>
            <h1>
              <span>Breaking News !!!</span> <span>Breaking News !!!</span> <span>Breaking News !!!</span> <span>Breaking News !!!</span>
            </h1>
          </div>
        </div>
        {showMore ? (
          <NewsDetails backHandler={handlerToBack} details={details} />
        ) : (
          <div className={Styles.main__con}>
            {news && (
              <div className={Styles.main__con__section}>
                {news?.articles?.map((item, index) => (
                  <News
                    desHandler={() => {
                      deatilsHandler(news.articles[index]);
                    }}
                    item={item}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
