import { useState } from 'react'; 
import { useEffect } from 'react';

import FeedbackStats from "./FeedbackStats";
import Options from "./Options"
import Notification from "./Notification"


export const App = () => {

const description = { 
  good: 0,
  neutral: 0,
  bad: 0
}

const [feedbackData, setFeedbackData]  = useState(description);

const updateFeedback = feedbackType => {
  setFeedbackData(prevData => {
    const updatedData = {
    ...prevData,
    [feedbackType]: prevData[feedbackType] + 1
    };
  
    window.localStorage.setItem("feedbackData", JSON.stringify(updatedData));
  
    return updatedData;
    });
  };

  useEffect(() => {
    const savedData = window.localStorage.getItem("feedbackData");

    if (savedData !== null) {
      setFeedbackData(JSON.parse(savedData));
    }
  }, []);
  

const totalComments = feedbackData.good + feedbackData.neutral + feedbackData.bad

const handleReset = () => {
    setFeedbackData(description);
  };

useEffect(() => {
    window.localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
  }, [feedbackData]);
  

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
  
      <div>
        <Options data={feedbackData} onFeedback={updateFeedback} onReset={handleReset} totalComments = {totalComments}/>
      </div>
  
      <div>

      {totalComments === 0 ? 
      <Notification /> : 
      <FeedbackStats
      goodCount={feedbackData.good}
      neutralCount={feedbackData.neutral}
      badCount={feedbackData.bad}
      totalCount={totalComments}
       /> }  

    
      </div>
    </div>
  );
};




