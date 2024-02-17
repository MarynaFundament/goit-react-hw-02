import styles from "./app.module.css"

const Feedback = ({  updateFeedback }) => {
    return (
      <div className={styles.list}>
        <button onClick={() => updateFeedback('good')}> Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button> 
      </div>
    );
}


export default Feedback;