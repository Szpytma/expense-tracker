import Card from "./Card";
const ErrorModal = ({ title, message, setError }) => {
  const handleOnConfirm = () => {
    setError(null);
  };

  return (
    <div>
      <div className="backdrop" onClick={handleOnConfirm}></div>
      <Card className="modal">
        <header className="header">
          <h2>{title}</h2>
        </header>
        <div className="content">
          <p>{message}</p>
        </div>
        <footer className="actions">
          <button onClick={handleOnConfirm}>Okay</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
