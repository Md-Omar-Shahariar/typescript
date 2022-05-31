import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';
import User from './components/User';

let student:string = "Jolly"

let age: number=12

let isSmart : boolean = true


let students: string[] = ['Joe','Biden','Harris']

let fees: number[] = [12,23,234,221]


interface Person {

  name:string,
  age:number,
  isEmployed : string| boolean
  job?:string,
  location? : string | number


}

let person: Person = {
  isEmployed:true,
  name: "afridi",
 age : 34,
location:55
}

// const handleAddUser = (firstName:string, age:number, address:string)=>{
//   const total:number = 50
//   console.log(firstName);
//   console.log(age);
//   console.log(address);
// return [total,address]
// }
const handleAddUser = ():void=>{

}
function App() {
  return (
    <div className="App">
      <Users></Users>
      <Counter></Counter>
      <Users></Users>
      
    </div>
  );
}

export default App;
