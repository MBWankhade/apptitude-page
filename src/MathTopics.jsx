import React, { useState, useEffect } from 'react';

function MathTopics() {
  const [topics, setTopics] = useState(() => {
    const storedTopics = localStorage.getItem('mathTopics');
    return storedTopics ? JSON.parse(storedTopics) : {
      "Problems on Trains": false,
      "Time and Distance": false,
      "Height and Distance": false,
      "Time and Work": false,
      "Simple Interest": false,
      "Compound Interest": false,
      "Profit and Loss": false,
      "Partnership": false,
      "Percentage": false,
      "Problems on Ages": false,
      "Calendar": false,
      "Clock": false,
      "Average": false,
      "Area": false,
      "Volume and Surface Area": false,
      "Permutation and Combination": false,
      "Numbers": false,
      "Problems on Numbers": false,
      "Problems on H.C.F and L.C.M": false,
      "Decimal Fraction": false,
      "Simplification": false,
      "Square Root and Cube Root": false,
      "Surds and Indices": false,
      "Ratio and Proportion": false,
      "Chain Rule": false,
      "Pipes and Cistern": false,
      "Boats and Streams": false,
      "Alligation or Mixture": false,
      "Logarithm": false,
      "Races and Games": false,
      "Stocks and Shares": false,
      "Probability": false,
      "True Discount": false,
      "Banker's Discount": false,
      "Odd Man Out and Series": false
    };
  });

  useEffect(() => {
    localStorage.setItem('mathTopics', JSON.stringify(topics));
  }, [topics]);

  const handleCheckboxChange = (topic) => {
    setTopics({
      ...topics,
      [topic]: !topics[topic]
    });
  };

  const topicsArray = Object.keys(topics);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}>Math Topics</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ul style={{ listStyle: "none", padding: 0, width: "48%" }}>
          {topicsArray.map((topic, index) => (
            index % 2 === 0 &&
            <li key={index} style={{ fontSize: "18px", marginBottom: "10px" }}>
              <input 
                type="checkbox" 
                id={topic} 
                checked={topics[topic]} 
                onChange={() => handleCheckboxChange(topic)} 
                style={{ marginRight: "10px", transform: "scale(1.5)" }} 
              />
              <label htmlFor={topic} style={{ marginLeft: "10px" }}>{topic}</label>
            </li>
          ))}
        </ul>
        <ul style={{ listStyle: "none", padding: 0, width: "48%" }}>
          {topicsArray.map((topic, index) => (
            index % 2 !== 0 &&
            <li key={index} style={{ fontSize: "18px", marginBottom: "10px" }}>
              <input 
                type="checkbox" 
                id={topic} 
                checked={topics[topic]} 
                onChange={() => handleCheckboxChange(topic)} 
                style={{ marginRight: "10px", transform: "scale(1.5)" }} 
              />
              <label htmlFor={topic} style={{ marginLeft: "10px" }}>{topic}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MathTopics;
