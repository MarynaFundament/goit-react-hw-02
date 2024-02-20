import PropTypes from 'prop-types';

const Feedback = ({ goodCount, neutralCount, badCount, totalCount, percentage }) => {

  return (
    <div>
      <p>Good: {goodCount}</p>
      <p>Neutral: {neutralCount}</p>
      <p>Bad: {badCount}</p>
      <p>Total: {totalCount}</p>
      <p>Positive: {percentage} %</p>
    </div>
  );
};


Feedback.propTypes = {
  goodCount: PropTypes.number.isRequired,
  neutralCount: PropTypes.number.isRequired,
  badCount: PropTypes.number.isRequired,
  totalCount:PropTypes.number.isRequired,

};


export default Feedback;