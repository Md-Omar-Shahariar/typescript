import React, { useEffect, useState } from 'react';

import User from './User';
import UserType from '../types/model';


const Users = () => {
    const [user,setUser] = useState<UserType[]>([])
    const [team, setTeam] = useState<UserType[]>([])
    const handleAddUser = (user:UserType):void =>{
        const newTeam = [...team,user]
        setTeam(newTeam)
    }

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>setUser(data))
    },[])
    return (
        <div>
            <h2>My Users</h2>
            <h3>Team Size:{team.length} </h3>
            {user.map(user=><User user={user} addUser={handleAddUser}></User>)}
            
        </div>
    );
};

export default Users;