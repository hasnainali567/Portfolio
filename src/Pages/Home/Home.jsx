import React, { useState } from "react";
import "./style.scss";
import Card from "../../components/Card/Card.jsx";
import ChatApp_Image from "../../assets/chatapp.png";
import LocknSecdApp_Image from "../../assets/locknsend.png";
import QuizApp_Image from "../../assets/quizapp.png";
import NewsApp_Image from "../../assets/newsapp.png";
import Hb_mart_Image from "../../assets/hbmart.png";
import WeatherApp_Image from "../../assets/weatherapp.png";

const Home = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <div className='main-container'>
      <div className='title'>
        <h1>
          Howdy, I'm <i>Hasnain</i>
        </h1>
        <p>
          I'm an <b>React developer,</b> crafting clean, fast, and accessible
          interfaces for modern web experiences.
        </p>
      </div>

      <div className='selected-work'>
        <p className='title'>Selected Work</p>
        <div className='projects'>
          <Card
            src={LocknSecdApp_Image}
            link={"https://locknsend.netlify.app/"}
            title={"Dropbox meets a lock — welcome to LocknSend."}
            year={"2025"}
            key='project2'
          />
          <Card
            src={ChatApp_Image}
            link={"https://chatapp-hasnain.netlify.app/chat.html"}
            title={"Real-time chat app built with Firebase and React."}
            year={"2025"}
            key={"project1"}
          />
          <Card
            src={Hb_mart_Image}
            link={"hb-mart.netlify.app"}
            title={"E-commerce App with Cart"}
            year={"2025"}
          />
          <Card
            src={WeatherApp_Image}
            link={"https://hasnainali567.github.io/weatherApp/"}
            title={"Weather App"}
            year={"2025"}
          />
          {loadMore && (
            <>
              <Card
                src={QuizApp_Image}
                link={"https://quiz-hasnain.netlify.app/"}
                title={"Quiz App"}
                year={"2025"}
              />
              <Card
                src={NewsApp_Image}
                link={"https://newsapp-hasnain.netlify.app/"}
                title={"News App"}
                year={"2025"}
              />
            </>
          )}
        </div>
      </div>

      {!loadMore && (
        <div className='flex justify-end-safe'>
          <button
            onClick={() => setLoadMore(true)}
            className='py-2 px-5 bg-gray-200 rounded font-medium cursor-pointer'
          >
            More
          </button>
        </div>
      )}

      {loadMore && (
        <div className='flex justify-end-safe'>
          <button
            onClick={() => setLoadMore(false)}
            className='py-2 px-5 bg-gray-200 rounded font-medium cursor-pointer'
          >
            More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
