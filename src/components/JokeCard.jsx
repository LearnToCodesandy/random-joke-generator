import { useState, useEffect } from "react";

const JokeCard = () => {
  const URL = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single";
  const [joke, setJoke] = useState("");

  const getJOKE = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const JOKE = data.joke;
    setJoke(JOKE);
  };

  useEffect(() => {
    getJOKE();
  }, []);

  return (
    <div className="container">
      <h1>Random JOKE Generator</h1>
      <div className="joke-card">{joke}</div>
      <button className="btn" onClick={getJOKE}>
        Get a joke
      </button>
    </div>
  );
};

export default JokeCard;
