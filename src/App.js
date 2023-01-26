import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from './img/logo-og.png'


class App extends React.Component{
constructor (props) {
    super(props)
    this.state = {
        helpText: 'Help text',
        userData: ''
    }

    this.inputClick = this.inputClick.bind(this)
}

componentDidUpdate(prevProp){
    if(this.state.helpText !== "Help")
    console.log('Something ')
}


render() {   
return (<div className='name'>
<Header title='CAp of site' name=''/> 
<h1>{this.state.helpText}</h1>
<h2>{this.state.userData}</h2>
 <input placeholder={this.state.helpText}
 onChange={event => this.setState({userData: event.target.value})}
 onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
 < img src={logo} />
 </div>) 
} 

inputClick  ()  {
    this.setState({helpText: 'Changed'})
    console.log('Clicked')}
mouseOver  ()  {console.log('Mouse over')}

}

export default App