import { useState } from 'react'; 
import { useEffect } from 'react';

import styles from "./app.module.css"
import Feedback from "./Feedback"
import Options from "./Options"


const TotalFeedback = ({data: {good, neutral, bad} }) => {

const FeedbackAmount = good + neutral + bad
  return (
  <div>
  <p> Total: {FeedbackAmount}</p> 
  </div>
)}

const Notification = () => {
  return (
  <div>
  <p> No feedback yet</p> 
  </div>
)}

export const App = () => {
  const [feedbackData, setFeedbackData]  = useState ({
    good: 0,
    neutral: 0,
    bad: 0
}) 

const updateFeedback = feedbackType => {
  setFeedbackData(prevData => {
    const updatedData = {
    ...prevData,
    [feedbackType]: prevData[feedbackType] + 1
    };
  
    window.localStorage.setItem("good", updatedData.good);
    window.localStorage.setItem("neutral", updatedData.neutral);
    window.localStorage.setItem("bad", updatedData.bad);
  
    return updatedData;
    });
  };

  useEffect(() => {
    const savedGood = window.localStorage.getItem("good");
    const savedNeutral = window.localStorage.getItem("neutral");
    const savedBad = window.localStorage.getItem("bad");


    if (savedGood !== null && savedNeutral !== null && savedBad !== null) {
      setFeedbackData({
        good: parseInt(savedGood),
        neutral: parseInt(savedNeutral),
        bad: parseInt(savedBad)
      });
    }
  
  }, [])


const totalComments = feedbackData.good + feedbackData.neutral + feedbackData.bad

const handleReset = () => {
    setFeedbackData({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  
  const handlePositive = () => {

  let PositiveRes = 0
  PositiveRes = Math.round((feedbackData.good + feedbackData.neutral  / totalComments) * 100)

  if(feedbackData.bad === 0){
   PositiveRes = 100
  }

  if(feedbackData.bad > feedbackData.good + feedbackData.neutral){
    PositiveRes = 0
  }

  return PositiveRes
 }


  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Feedback updateFeedback={updateFeedback} />
     
      {totalComments === 0 ? (
        <Notification /> ) : (
        <div>
        <div>
        <button className={styles.reset}
        onClick={handleReset}>Reset</button>
        </div>

        <div>
          <Options data={feedbackData} />
          <TotalFeedback data={feedbackData} />
          <p> Positive: {handlePositive()} %</p>
        </div>

        </div>
        )}



    </div>
  );
};




