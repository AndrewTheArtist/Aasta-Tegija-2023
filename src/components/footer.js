import React from "react";
import {useState,useEffect} from 'react';

export default function Footer(){
    // const [data,setData]= useState([]);
    // const getData=()=>{
    //     fetch('data.json'
    //     ,{
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }
    //     }
    //     )
    //       .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         // console.log(myJson);
    //         setData(myJson)
    //       });   
    //   }
    //   useEffect(()=>{
    //     getData()
    //   },[])
      
    return(
        <footer>
            <div class="contact-methods">
                <span>KONTAKT</span>
                <p>info@voco.ee</p>
                <p>7 361 810</p>
            </div>
            <div class="contact-methods secondary">
                <span>VOCO</span>
                <p>Kopli 1</p>
                <p>Tartu 50115 Eesti</p>
            </div>
            <div class="fb-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            </div>

            <img src={require('../img/Layer_1.png')} class="footer-logo-img"/>
        </footer>
    )    
}