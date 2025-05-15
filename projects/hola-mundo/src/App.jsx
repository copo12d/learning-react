import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


 const users = [
  { 
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true 
  },
  { 
    userName: "pheralb", 
    name: "Pablo Hernandez",
    isFollowing: false 
  },
  { 
    userName: "kickdavid", 
    name: "Rafael Gonzalez",
    isFollowing: true 
  },
  { 
    userName: "pablomontes", 
    name: "Pablo Montes",
    isFollowing: false 
  },
  { 
    userName: "alberto", 
    name: "Alberto",
    isFollowing: true 
  },
 ]
export function App() {
 
  return (
    <div className='App'>
      {
        users.map(user =>{
          const {userName,name ,isFollowing} = user
          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>

          )
        })
      }
    </div>
  )

}