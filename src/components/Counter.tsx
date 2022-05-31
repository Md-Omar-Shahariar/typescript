import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';



const Counter = () => {

    

    const [counter,setCounter]= useState<number>(0)
    const handleIncerse = ():void=>{
        setCounter(counter+1)
    }

    const handleUserSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>):void=>{

    }

    const handleAdduser = ():void=>{}
    
    return (
        <div>
            <h1>This Is Counter </h1>
            <h2>{counter}</h2>
            <button onClick={handleIncerse}>Increase</button>
            
        </div>
    );
};

export default Counter;