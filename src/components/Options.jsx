import PropTypes from 'prop-types';

const Options = ({ onFeedback, onReset, totalComments }) => {
  
    return (
    <div>
        <button onClick={() => onFeedback("good")}> Good</button>
        <button onClick={() => onFeedback("neutral")}> Neutral</button>
        <button onClick={() => onFeedback("bad")}> Bad</button>
        {totalComments > 0 && (
        <button onClick={onReset}>Reset</button>
      )}

    </div>
    )}

    Options.propTypes = {
      onFeedback: PropTypes.func.isRequired,
      onReset: PropTypes.func.isRequired,
      totalComments: PropTypes.number.isRequired,
    };
    


  export default Options;