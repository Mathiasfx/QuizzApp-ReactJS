import React from 'react';


const OptionButton = ({text,NextQuestion,value}) => {

    return ( 
        <button onClick={(e)=>NextQuestion(value)}  className="OptionButton">{text}</button>
     );
}
 
export default OptionButton;