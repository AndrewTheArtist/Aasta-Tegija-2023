import './App.css';
import './components/footer';
import Footer from './components/footer';
import Header from './components/header';
import {useState,useEffect} from 'react';

function App() {
  const [data,setData]= useState([]);
    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson.index)
          });   
      }
      useEffect(()=>{
        getData()
      },[])
  return (
    <div className="App">
      <Header/>
        <section class="welcome-txt">
          {data && data.length > 0 && data.map((index)=>
          <div>
              <h2>{index.welcome}</h2>
              <p>{index.sectiontxt}</p>
          </div>
          )}
          <div class="register_btn">
            <button type="submit" class="register_btn_link">Registreeri testile</button>
          </div>
        </section>
      <Footer/>
    </div>


  );
}

export default App;
