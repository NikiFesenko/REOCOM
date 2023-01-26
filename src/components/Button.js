import React, { useEffect } from "react"
import { useState } from "react"


const Button = (props) => {
    const [click, setClick] = useState(0)
        
    useEffect(() => {
    document.title = `You are push ${click}`
})

    
    return(
           <button onClick={() => setClick(click + 1)}>{props.text}{click}</button>
        )
    }

Button.defaultProps = {
    text:"Button"
}

export default Button