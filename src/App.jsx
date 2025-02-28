import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_INVESTMENT_DETAILS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT_DETAILS);

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(event, inputIdentifier) {
    const {
      target: { value },
    } = event;

    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +value,
    }));
  }

  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChangeInput={handleInputChange} />
      {!inputIsValid && <p className="center">Please enter valid input data</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
