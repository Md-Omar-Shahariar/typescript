import React, { FC } from 'react';
import UserType from '../types/model';


// interface Props{
//     name:string,
//     age:number,
//     addUser:()=> void
// }


interface Props {
    user:UserType,
    addUser:(user:UserType)=>void
}

const User:FC<Props> = ({user,addUser}) => {

   
    return (
        <div>
            <h2>Hello From : {user.name}</h2>
            <h2>Email : {user.email}</h2>
            <button onClick={()=>addUser(user)}>Add</button>
        </div>
    );
};

export default User;