import { useState } from "react";

const INITIAL_INVESTMENT_DETAILS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function UserInput() {
  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT_DETAILS);

  function handleInputChange(event, inputIdentifier) {
    const {
      target: { value },
    } = event;

    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: value,
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => handleInputChange(e, "initialInvestment")}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => handleInputChange(e, "annualInvestment")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => handleInputChange(e, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => handleInputChange(e, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
