import React from "react";
import { useState, useEffect } from "react";

function QuoteApi({}) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "440d7f76bbmsh4facf782795d9d5p1b51a0jsn6de6932883eb",
      "X-RapidAPI-Host":
        "uotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
    },
  };

  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    //Function to Fetch Data
    //convert response to javascript object using j.son
    const getData = async () => {
      fetch("http://localhost:3000/quote", options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setQuote({ ...quote, ...data });
        })
        .catch((err) => console.error(err));
    };

    getData();
  }, []);

  return (
    <div className="quote">
      <h1> Quote of the day</h1>
      <p> {quote.text}</p>
      <p> {quote.author}</p>
    </div>
  );
}

export default QuoteApi;
