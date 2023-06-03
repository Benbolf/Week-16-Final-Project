import './App.css'
import { Component } from 'react';
import App from './App.js'


export function Home() {

	
  return (<h2>Home</h2>
     
      

   




      )

}

let date = new Date()

let singleUser = {

time: date.toDateString(),
}


export default class Section extends Component {
render() {
  return (
    
    

    <section className="welcomeSection">
      <h3>Welcome,{singleUser.name}</h3>
      <p>The date is: {singleUser.time}</p>
      <p>
      If anything is an emergency you can email me at "123@gmail.com"
     </p>
      </section>

      
    )
  }
}









