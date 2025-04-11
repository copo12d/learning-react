import { useState } from "react"
export function TwitterFollowCard ({children,userName,initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // las dos lineas son lo mismo si no que una es mas corta con destructuracion

    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-buttom is-following' : 'tw-followCard-buttom'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                src= {`https://unavatar.io/${userName}`} alt="Avatar "/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-inforuserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
    </article>
    )
}