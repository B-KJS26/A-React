import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
  let [photos, setPhotos] = useState([]);
  function Follow(){
  const url = "https://jsonplaceholder.typicode.com/photos";
  axios.get(url)
  .then(function(response) {
    setPhotos(response.data);
    console.log("성공");
  })
  .catch(function(error) {
    console.log("실패");
  })
}
if(photos.length > 0) {
  return(
    photos.map(photo => (
      (photo.id < 10) ?(
        <div key={photo.id}>
          <h1>{photo.id}</h1>
          <p>title: {photo.title}</p>
        </div>
      ) :null
    ))
  );
}
  else{
  return (
    <div className="App">
      <button onClick={Follow}>ㅋㅋ</button>
    </div>
  )}
}

export default App;
