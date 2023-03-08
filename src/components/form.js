import React from "react";
import {useState} from 'react';

export default function Form(){
    const[style, setStyle] = useState("conture2");
    const closeForm = () =>{
        setStyle("conture");
    };
    return(
        <div class="form-popup" id="myForm" className={style}>
            <form action="/action_page.php" class="form-container">
                <h3>sisesta oma andmed</h3>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw"/>

                <button type="submit" class="btn">Login</button>
                <button type="button" class="btn cancel" onclick={closeForm}>Close</button>
            </form>
        </div>
        
    )    
 
      
};
