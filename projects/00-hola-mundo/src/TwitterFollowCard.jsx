import { useState } from "react";

export function TwitterFollowCard({children, username = 'unknown', initialIsFollowing}  ) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : "Seguir";
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-Following'
        : 'tw-followCard-button';

    const handlerClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-header'>
                <img
                    className='tw-follow-img'
                    src="/src/assets/image.jpg"
                    alt="avatar de midu" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handlerClick}>
                <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}