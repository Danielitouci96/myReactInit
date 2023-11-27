import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //pointer move
  useEffect(() => {
    console.log('efecto', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', (handleMove))
    }

    //cleanup
    // --> se ejecuta cuando el componente se desmonta
    // --> o cuando cambia la dependencia, antes de ejecutar el efecto
    //de nuevo
    return () => {
      window.removeEventListener('pointermove', (handleMove))
    }
  }, [enabled])

  //change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        top: -20,
        left: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
      <button onClick={() => setEnable(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(false)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}

export default App
