import React from 'react';
import { useParams } from 'react-router-dom';

const WordorNum = (props)=>{

    const {word, color, backColor} = useParams();

    return(
        <div>

            {
                isNaN(word)?
                <p style={
                    //If color param exists, then style this element with the values passed in
                    color? 
                    {color: color, backgroundColor: backColor}
                    :null
                }>
                    This is a word: {word}
                </p>
                : //If the word param IS a number:
                <p>
                    This is a number: {word}
                </p>
            }

        </div>
    )
}


export default WordorNum;