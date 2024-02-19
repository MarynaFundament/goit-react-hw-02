const Options = ({ data: {good, neutral, bad}, onFeedback, onReset, totalComments }) => {
  
    return (
    <div>
        <button onClick={() => onFeedback("good")}> Good</button>
        <button onClick={() => onFeedback("neutral")}>Neutral</button>
        <button onClick={() => onFeedback("bad")}> Bad</button>
        {totalComments > 0 && (
        <button onClick={onReset}>Reset</button>
      )}

    </div>
    )}


  export default Options;