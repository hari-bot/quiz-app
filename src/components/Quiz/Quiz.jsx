import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>1. Which device is required for the internet connection ?</h2>
      <ul>
        <li>Moderm</li>
        <li>Router</li>
        <li>Lan Cable</li>
        <li>Pend Drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
};

export default Quiz;
