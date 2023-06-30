import './App.css';
import { useState } from 'react'
import data from './flaglist.json'
import random_num_array from './rnumgen'
import onerand from './1rand'

function App() {
  const [random_num, setb] = useState(random_num_array())
  const [rand_one, setc] = useState(onerand())
  const a =()=>{
    setb(random_num_array())
    setc(onerand())
  }
  const choose0 = () => {
    if(data[random_num[0]].name === data[random_num[rand_one]].name){
      document.getElementById("choice1").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice1").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else{
      document.getElementById("choice1").style.backgroundColor = "red";
      setTimeout(() => {
        document.getElementById("choice1").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    if(data[random_num[1]].name === data[random_num[rand_one]].name){
      document.getElementById("choice2").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice2").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else if(data[random_num[2]].name === data[random_num[rand_one]].name){
      document.getElementById("choice3").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice3").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else if(data[random_num[3]].name === data[random_num[rand_one]].name){
      document.getElementById("choice4").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice4").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }


  }
  const choose1 = () => {
    if(data[random_num[1]].name === data[random_num[rand_one]].name){
      document.getElementById("choice2").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice2").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else{
      document.getElementById("choice2").style.backgroundColor = "red";
      setTimeout(() => {
        document.getElementById("choice2").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    if(data[random_num[0]].name === data[random_num[rand_one]].name){
      document.getElementById("choice1").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice1").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else if(data[random_num[2]].name === data[random_num[rand_one]].name){
      document.getElementById("choice3").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice3").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else if(data[random_num[3]].name === data[random_num[rand_one]].name){
      document.getElementById("choice4").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice4").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
  }
  const choose2 = () => {
    if(data[random_num[2]].name === data[random_num[rand_one]].name){
      document.getElementById("choice3").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice3").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else{
      document.getElementById("choice3").style.backgroundColor = "red";
      setTimeout(() => {
        document.getElementById("choice3").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    if(data[random_num[1]].name === data[random_num[rand_one]].name){
      document.getElementById("choice2").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice2").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else if(data[random_num[0]].name === data[random_num[rand_one]].name){
      document.getElementById("choice1").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice1").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else if(data[random_num[3]].name === data[random_num[rand_one]].name){
      document.getElementById("choice4").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice4").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
  }
  const choose3 = () => {
    if(data[random_num[3]].name === data[random_num[rand_one]].name){
      document.getElementById("choice4").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice4").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else{
      document.getElementById("choice4").style.backgroundColor = "red";
      setTimeout(() => {
        document.getElementById("choice4").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    if(data[random_num[1]].name === data[random_num[rand_one]].name){
      document.getElementById("choice2").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice2").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else if(data[random_num[2]].name === data[random_num[rand_one]].name){
      document.getElementById("choice3").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice3").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
    else if(data[random_num[0]].name === data[random_num[rand_one]].name){
      document.getElementById("choice1").style.backgroundColor = "green";
      setTimeout(() => {
        document.getElementById("choice1").style.backgroundColor = "lightgrey"
        a()
      }, 1000);
    }
  }
  return (
    <div>
      <div className="header">Welcome to f-guss</div>
      <div>
        <div className="img-section"><img style={{border:"solid 10px black"}}src={data[random_num[rand_one]].url} alt={data[random_num[rand_one]].name}></img></div>
        {/* <div>{data[random_num[rand_one]].name}</div> */}
        <div className="choice-flex">
          <div className="choice-grid">
            <div id="choice1" onClick={choose0}>{data[random_num[0]].name}</div>
            <div id="choice2" onClick={choose1}>{data[random_num[1]].name}</div>
            <div id="choice3" onClick={choose2}>{data[random_num[2]].name}</div>
            <div id="choice4" onClick={choose3}>{data[random_num[3]].name}</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
