import { useRef } from "react"
export default function Modal(props) 
{    
    const pTest = useRef(myRef)
    return(
        <div className="modal-window">
            <p ref={myRef} onChange={() =>onChange}></p>
        </div>
    ) 
} 