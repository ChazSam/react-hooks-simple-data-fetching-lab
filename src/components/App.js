// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImg, setDogImg] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
      setDogImg(data)
      setIsLoaded(true)
      })
    }, []);

if (!isLoaded) return <p>Loading...</p>;

return <img src = {dogImg.message} alt = "A Random Dog" ></img>
}

export default App;