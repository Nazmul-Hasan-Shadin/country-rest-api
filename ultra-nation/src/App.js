import React , {useState,useEffect} from 'react'

import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries,setCounties]=useState([]);

 useEffect(()=>{
  fetch ('https://restcountries.com/v3.1/all')
  .then(res=> res.json())
  .then (data=>{
    setCounties(data);
   console.log(data);
   const names=  data.map(country=>country.name)


   

  });
 },[]);
 
  return (
    <div className="App">
     
<h1> country loaded: {countries.length}</h1>
<ul>
  {
    countries.map(country=> <Country key={country.cca2} country={country}></Country>)
  }
</ul>


    </div>
  );
}

export default App;
