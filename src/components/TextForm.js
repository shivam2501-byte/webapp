import React, { useState } from 'react'


export default function TextForm(props) {
    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState("");

    const handleUpClick = () => {
        // console.log("handleupclick is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase",  "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase",  "success");

    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleared all text",  "success");

    }

    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard",  "success");


    }


    const handleOnChange = (event) => {
        // console.log("handleOnChange is clicked");
        setText(event.target.value);
    }


    return (
        <>
            <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'  }}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'? '#d5caca': 'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary " onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary"  onClick={handleCopyClick}>Copy</button>
            </div>

            <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
                <h2>Text Details:</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters.</p>
                <h2>PreView</h2>
                <p>{text.length>0 ? text: "Enter something in the above textbox to preview here."}</p>
            </div>

        </>
    )
}
