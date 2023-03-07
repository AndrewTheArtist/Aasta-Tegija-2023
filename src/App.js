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
    
      const[isActive, setIsActive] = useState(false);
      const handleClick = event =>{
        setIsActive(current => !current);
      };

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
            <button class="register_btn_link"  onClick={handleClick}>Registreeri testile</button>
          </div>
        </section>

        <div class="form-popup" id="myForm" className={isActive ? 'dply-none' : ''}>
            <form action="/action_page.php" class="form-container">
                <h3>sisesta oma andmed</h3>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw"/>

                <button type="submit" class="btn">Login</button>
                <button  class="btn cancel">Close</button>
            </form>
        </div>


      <Footer/>
    </div>


  );

}

export default App;
