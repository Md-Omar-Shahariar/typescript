import React from 'react';
import logo from './logo.svg';
import './App.css';

let student:string = "Jolly"

let age: number=12

let isSmart : boolean = true


let students: string[] = ['Joe','Biden','Harris']

let fees: number[] = [12,23,234,221]


interface Person {

  name:string,
  age:number,
  job?:string


}

let person: Person = {name: "afridi", age : 34}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
