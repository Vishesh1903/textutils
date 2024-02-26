import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success")
  };
  const handleOnChange = (event) => {
    console.log("On CHange");
    setText(event.target.value);
  };
  const handleLoClick = (event) => {
    console.log("Lowercase was clicked.");
    let loText = text.toLowerCase();
    setText(loText);
    props.showAlert("Converted to LowerCase!", "success")
  }
  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  }

  return (
    <>
      <div className="container" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style = {{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-2" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Your Text To Get The Preview Here"}</p>
      </div>
    </>
  );
}
