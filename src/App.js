import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from "./components/Photo";

import "./App.css";

function App() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=HGxVt3ruxkP6cWlX6rWc1yoccuK8UV7rgBjRiZD0")
      .then(response => {
        console.log(response);
        setPhotoData(response.data)
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <Photo title={photoData.title} url={photoData.url} explanation={photoData.explanation} date={photoData.date} copyright={photoData.copyright} />
    </div>
  );
}

export default App;
