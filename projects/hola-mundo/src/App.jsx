import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    
  return (
    <div className='App'>
    <TwitterFollowCard 
    isFollowing={false} 
    userName= "midudev" 
    name="Miguel Angel Duran" 
    />
    <TwitterFollowCard 
    isFollowing={false} 
    userName= "pheralb" 
    name="Pablo Hernandez" 
    />
    <TwitterFollowCard 
    isFollowing 
    userName= "elonmuzk" 
    name="Elon Musk" 
    />
    <TwitterFollowCard 
    isFollowing 
    userName= "vxnvander" 
    name="Pablo Pablito" 
    />
    </div>
  )

}