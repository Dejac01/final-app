import React from 'react'
import { useState, useEffect } from "react";
import Dashboard from './Dashboard';

function QuoteApi({ }) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '440d7f76bbmsh4facf782795d9d5p1b51a0jsn6de6932883eb',
      'X-RapidAPI-Host': 'uotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
  };
  

  const [quote, setQuotes] = useState([]);

  useEffect(() => {
    //Function to Fetch Data
    //convert response to javascript object using j.son
    const getData = async () => {
    fetch('https://rapidapi.com/ipworld/api/quotes-inspirational-quotes-motivational-quotes', options)
        .then(response => response.json())
        .then((response) => { 
          setQuotes((response.response));})
        .catch(err => console.error(err));
    };

    getData();
  }, []);

  return (
    <div>Quote of the day
 {quote.map((quote, id) => {
        return <Dashboard key={id} quote={quote}/>;
      })}



    </div>
  )
}

export default QuoteApi;