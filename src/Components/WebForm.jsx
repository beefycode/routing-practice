import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const WebForm = (props) => {
    // state getters and setters
    const [color,setColor] = useState('');
    const [number,setNumber] = useState(0);
    // function to query input urls against paths
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault()
        navigate(`/wordandNum/${color}/${number}`)
    }
    return(
        <div>
            <form>
                <label>Enter a color</label>
                <input type="text" onChange={(e)=>{setColor(e.target.value)}}/>
                <label>Enter a number</label>
                <input type="number" onChange={(e)=>{setNumber(e.target.value)}}/>
                <br/>
                <button>Submit</button>

            </form>

        </div>
    )
}

export default WebForm;