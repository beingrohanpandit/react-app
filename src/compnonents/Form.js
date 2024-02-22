import React, { useState } from 'react'
import Highlighter from "react-highlight-words";

export default function Form(props) {

    const handleUpperCase = () => {
        console.log("Upper Case function call!")
        setText(text.toUpperCase())
    }
    const handleLowerCase = () => {
        console.log("Lower Case function call!")
        setText(text.toLowerCase())
    }
    const handlerOnChange = (event) => {
        console.log("Handle on change function call!")
        setText(event.target.value)
    }
    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const clearBox = () => {
        setText("")
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container mt-3">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label" id='text-area'>Text Area</label>
                    <textarea className="form-control" value={text} placeholder='Enter Your text here' onChange={handlerOnChange} id="myBox" rows="5"></textarea>
                </div>
                <button type="button" onClick={handleUpperCase} className="btn btn-primary m-2">Upper Case</button>
                <button type="button" onClick={handleLowerCase} className="btn btn-primary m-2">Lower Case</button>
                <button type="button" onClick={removeSpaces} className="btn btn-primary m-2">Remove Extra Spaces</button>
                <button type="button" onClick={clearBox} className="btn btn-danger m-2">Clear</button>
            </div>
            <div className="container mt-3">
                <h1>Your Text Summary</h1>
                <p>{(text.split(" ")).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ")).length} Minutes read</p>
                <h2>Preview</h2>
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[props.searchQuery]}
                    autoEscape={true}
                    textToHighlight={text}
                />
            </div>
        </>
    )
}

