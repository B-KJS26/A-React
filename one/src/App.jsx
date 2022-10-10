import logo from './logo.svg';
import Hello from './Hello';
import React from 'react';
import Sub from './sub';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
  let [datas, setDatas] = useState([]);
  function Follow(){
  const url = "http://13.125.225.199:8001/api/school/neisAPI/schedule?year=2022&month=9";
  axios.get(url)
  .then(function(response) {
    setDatas(response.data);
    console.log("성공");
  })
  .catch(function(error) {
    console.log("실패");
  })
}

console.log(datas);

if(datas.length > 0) {
  return(
    datas.map(data => (
      (data.id < 10) ?(
        <div key={data.id}>
          <h1>{data.id}</h1>
          <p>title: {data.title}</p>
        </div>
      ) :null
    ))
  );
}
  else{
  return (
    <Sub>
      <Hello color="red" name="ss" isSpecial/>
      <Hello color="green" />
    <h1>이겁니다</h1>
    </Sub>
  )}
}

export default App;
