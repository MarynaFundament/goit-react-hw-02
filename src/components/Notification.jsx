import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
    <div>
    <p>{message}</p> 
    </div>
  )}

  Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };
  
  Notification.defaultProps = {
    message: 'No feedback yet'
  };

  
export default Notification