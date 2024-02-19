
const FeedbackStats = ({ goodCount, neutralCount, badCount, totalCount }) => {

const positivePercentage = 
totalCount = Math.round((goodCount / totalCount) * 100) ;


  return (
    <div>
      <p>Good: {goodCount}</p>
      <p>Neutral: {neutralCount}</p>
      <p>Bad: {badCount}</p>
      <p>Total: {totalCount}</p>
      <p>Positive: {positivePercentage} %</p>
    </div>
  );
};


export default FeedbackStats;