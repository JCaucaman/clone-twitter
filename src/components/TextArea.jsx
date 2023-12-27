//import {useState, useEffect,useRef, TextareaHTMLAttributes} from "react";

export function TextArea() {
    
    return(
        <textarea className="max-h-64 min-h-16 w-full
        
        "
        maxLength={180} placeholder="What is happening?!" name="post">
        </textarea>
    )
}