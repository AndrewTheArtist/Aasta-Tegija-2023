import React, { useState } from 'react';

async function logoutUser(credentials) {
    return fetch('http://localhost:8080/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function Logout({ setToken }) {

   const handleOut = async e => {
    e.preventDefault();
    const token = await logoutUser({
      
    });
    setToken('');
  }
  return (
    
    <form onSubmit={handleOut}>
    <div>
        <button type="submit">Submit</button>
      </div>
    </form>
); }
