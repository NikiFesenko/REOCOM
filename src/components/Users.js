import React from "react"
import User from "./User"


class Users extends React.Component {
constructor(props) {
super(props)
this.state ={
    users: [
        {
            id: 1 ,
            firstname:'Bob',
            lastname:'Simonov',
            bio: 'Some bio',
            age:'37'
        },
        {
            id: 2 ,
            firstname:'Dmitriy',
            lastname:'Vasilevich',
            bio: 'Some bio',
            age:'63'
        },
    ]
}
}
render()  {  
    if(this.users.length > 0) 
return (<div>
    {this.users.map((el) => (
        < User key={el.id}/>
    ))}
</div>)
else
return(<div className="user">
<h3>There are in no users</h3>
</div>)
 
} 

}

export default Users