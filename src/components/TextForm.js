import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLoClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }

    const handleClearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been Cleared","success")
    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been Copied","success")
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been reomved","success")
    }

    const [text, setText] = useState('Enter Text Here');
    // setText("New text");
    return (
        <>
        <div className="container" style ={{color: props.mode === 'dark'?'white':'black'}} >
            <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text}   onChange={handleOnChange} style ={{backgroundColor: props.mode === 'dark'?'rgb(104 126 144)':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox"rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick=  {handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick=  {handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick=  {handleClearText}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick=  {handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick=  {handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style ={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summry</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.01 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read Time </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
  )
}
