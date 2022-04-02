const ErrorAlert = ({ error, handleError }) => {

  return (
    <div className="danger-alert">
      <div className="danger-message">
        { error }
      </div>
      <button onClick={() => handleError(null)} className="close">
        X
      </button>
    </div>
    
  );
}
 
export default ErrorAlert;