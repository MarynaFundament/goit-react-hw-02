import { useState } from 'react'; 
import { useEffect } from 'react';

import Description from './Description';
import Feedback from "./FeedbackStats";
import Options from "./Options"
import Notification from "./Notification"

export const App = () => {

const getInitialData = { 
    good: 0,
    neutral: 0,
    bad: 0
  }

const getInitialClicks = () => {
  const savedData = window.localStorage.getItem("feedbackData");
  return savedData ? JSON.parse(savedData) : getInitialData;
}

const [feedbackData, setFeedbackData]  = useState(getInitialClicks);

const updateFeedback = feedbackType => {
  setFeedbackData(prevData => {
    const updatedData = {
    ...prevData,
    [feedbackType]: prevData[feedbackType] + 1
    };
  
      return updatedData;
    });
  };

const totalComments = feedbackData.good + feedbackData.neutral + feedbackData.bad

const handleReset = () => {
  setFeedbackData(getInitialData);
};

const setClicks = () => {
  window.localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
}

useEffect(setClicks, [feedbackData]);
  

  return (
    <div>

      <Description/>
      <Options 
      onFeedback={updateFeedback}
      onReset={handleReset}
      totalComments = {totalComments}/>

      {totalComments === 0 ? 
      <Notification message = "No feedback yet" /> : 
      <Feedback
      goodCount={feedbackData.good}
      neutralCount={feedbackData.neutral}
      badCount={feedbackData.bad}
      totalCount={totalComments}
       /> 
       }  

  
    </div>
  );
};




