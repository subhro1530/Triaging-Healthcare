// components/SymptomPrediction.js

import React, { useState } from "react";

const SymptomPrediction = () => {
  const [symptoms, setSymptoms] = useState("");
  const [predictions, setPredictions] = useState([]);

  const handleSymptomsSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/DinaSalama/symptom_to_disease_distb",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: symptoms,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch predictions");
      }

      const data = await response.json();
      setPredictions(data[0]); // Assuming data is an array of predictions

      console.log("Predictions:", data);
    } catch (error) {
      console.error("Error predicting diseases:", error.message);
      setPredictions([]);
    }
  };

  return (
    <div>
      <h2>Enter Symptoms</h2>
      <form onSubmit={handleSymptomsSubmit}>
        <input
          type="text"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter symptoms (comma-separated)"
        />
        <button type="submit">Predict Diseases</button>
      </form>

      {predictions.length > 0 && (
        <div>
          <h3>Top Predicted Diseases:</h3>
          <ul>
            {predictions.map((prediction) => (
              <li key={prediction.label}>
                {prediction.label}: {prediction.score.toFixed(2) * 100}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SymptomPrediction;
