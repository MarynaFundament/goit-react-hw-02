import PropTypes from 'prop-types';

const Description = ({header, text}) => {
    return (
        <div>    
        <h1> {header} </h1>
        <p> {text}</p>
        </div>
    )
}

Description.propTypes = {
    goodCount: PropTypes.number.isRequired,
    neutralCount: PropTypes.number.isRequired,
    badCount: PropTypes.number.isRequired,
    totalCount:PropTypes.number.isRequired,
  
  };
  

export default Description