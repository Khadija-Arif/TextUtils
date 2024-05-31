import React ,{useState} from "react"
export default function Textform(props){
const [text, setText] = useState('Enter text plz '); 
const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
}
const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
}
const handleClear = ()=>{
    let newText = " ";
    setText(newText);
}
const handleOnChange = (event)=>{
    setText(event.target.value);
}
    return(
        <>
        
   <div className="container "style={{color: props.mode==='dark'?'white':'black'}}>
         < h1> {props.heading} </h1>
         < div className="mb-3">
         <textarea className="form-control" value=  {text} onChange={handleOnChange} style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}} id="box" rows="8"></textarea>
         </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
          <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lower case</button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}}>
        <h2> Your text summary </h2>
        <p> your text is of {text.length} length and words {text.split( " ").length} </p>
        Minutes to read words {0.008 *text.split( " ").length}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>


    </div>
    </>
    )
}