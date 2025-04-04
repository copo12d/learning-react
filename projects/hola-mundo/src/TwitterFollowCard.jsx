export function TwitterFollowCard ({userName, name, isFollowing}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                src= {`https://unavatar.io/${userName}`} alt="Avatar "/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-inforuserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-buttom'>Seguir</button>
            </aside>
    </article>
    )
}