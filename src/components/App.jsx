import { useState } from 'react'; 
import { useEffect } from 'react';

import Description from './Description';
import Feedback from "./FeedbackStats";
import Options from "./Options"
import Notification from "./Notification"

const getInitialData = { 
  good: 0,
  neutral: 0,
  bad: 0
}

export const App = () => {

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


const handleReset = () => {
  setFeedbackData(getInitialData);
};

useEffect(() => {
  window.localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
}, [feedbackData]);

const totalComments = feedbackData.good + feedbackData.neutral + feedbackData.bad
const positivePercentage = Math.round(((feedbackData.good + feedbackData.neutral) / totalComments) * 100)

  
  return (
    <div>

      <Description
      header = "Sip Happens Café "
      text = "Please leave your feedback about our service by selecting one of the options below." />
      <Options 
      onFeedback={updateFeedback}
      onReset={handleReset}
      totalComments = {totalComments}/>

      {totalComments === 0 ? 
         (<Notification message = "No feedback yet" /> ) : (
      <Feedback
      goodCount={feedbackData.good}
      neutralCount={feedbackData.neutral}
      badCount={feedbackData.bad}
      totalCount={totalComments}
      percentage={positivePercentage}
       /> 
       )}  


    </div>
  );
};




