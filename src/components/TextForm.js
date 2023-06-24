import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here")

    const handleOnChange = (e)=>{
        setText(e.target.value)
    }

    const handleOnClick = ()=>{
        let a = text.toUpperCase()
        setText(a)
    }

    const handleOnClick2 = ()=>{
        let b = text.toLowerCase()
        setText(b)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleOnClick3 = ()=>{
        let c = ''
        setText(c)
    }

    const handleOnClick4 = ()=>{
        navigator.clipboard.writeText(text)
    }

    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'black',
        color: 'white'
    })

    if (myStyle.backgroundColor === 'white') {
        setMyStyle({
            backgroundColor: 'white',
            color: 'black'
        })
    }


    return (
        <>
        <div className='container my-3'>
                <h2>{props.heading}</h2>
                <textarea class="form-control mb-3" style={{backgroundColor :props.mode === `dark`? `black`:`white`,color:props.mode===`dark`?`white`:`black`}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                <button disabled={text.length===0} style={{backgroundColor:props.mode===`dark`?`transparent`:`#0B5ED7`}} className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} style={{backgroundColor:props.mode===`dark`?`transparent`:`#0B5ED7`}} className="btn btn-primary mx-1" onClick={handleOnClick2}>Convert to Lowercase</button>
                <button disabled={text.length===0} style={{backgroundColor:props.mode===`dark`?`transparent`:`#0B5ED7`}} className="btn btn-primary mx-1" onClick={speak}>Speak</button>
                <button disabled={text.length===0} style={{backgroundColor:props.mode===`dark`?`transparent`:`#0B5ED7`}} className="btn btn-primary mx-1" onClick={handleOnClick3}>Clear text</button>
                <button disabled={text.length===0} style={{backgroundColor:props.mode===`dark`?`transparent`:`#0B5ED7`}} className="btn btn-primary mx-1" onClick={handleOnClick4}>Copy text</button>
        </div>
        <div className='container'>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
