import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        username: 'midu',
        name: 'Miguel Angel',
        isFollowing: true
    },
    {
        username: 'miaKal',
        name: 'Mia Khalifa',
        isFollowing: true
    },
    {
        username: 'danielitouci96',
        name: 'Daniel',
        isFollowing: false
    }
]


export function App() {
    return (
        <section className='App'>
            {
                users.map(({ username, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={username}
                        username={username}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }

        </section>
    )
}

//de esta manera es sin fetch
/* export function App() {

    const [name, setName] = useState('danielitouci96')

    const midu = { isFollowing: false, username: 'midudev'}
    // dos variantes para pasarle props a los componentes
    return (
        <section className='App'>
            <TwitterFollowCard {...midu} initialIsFollowing>
                Miguel Angel
            </TwitterFollowCard>
            
            <TwitterFollowCard
                isFollowing
                username = {name}>
                Daniel
            </TwitterFollowCard>

            <button onClick={() => setName('carmona')}>
                cambiar nombre
            </button>

        </section>
    )
} */