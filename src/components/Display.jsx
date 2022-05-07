import React from 'react'
import './css/style.css'
const Display = (props) => {
    
    return (
        <div>
            
            <p> Current Message: {props.currMessage}</p>
            {
                props.messages.map((unicorn, i)=>{
                    return(
                        
                        <div className='box' key={i} style={{ backgroundColor: unicorn }}> </div>
                    )
                })
            }
        </div>
      )
}

export default Display