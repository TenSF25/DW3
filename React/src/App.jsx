import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>¡Hola soy Thiago Filippo</h1>
        <p>Quisiera contarte que me gustaría hacer una página o aplicación que les llegue a varias personas, y les resulte de mucha utilidad y se haga muy famosa.</p>
        <p>Con React me gustaria poder hacer webs o aplicaciones con muy buena interfaz y buena estructura de codigo. Mis metas como futuro Dev Front-End, es trabajar para empresar muy grandes y ser reconocido. O empezar de cero mi propia marca, e implementar todo lo aprendido en estos cursos. Ya sea creando una pequeña tienda, la cuál se vaya expandiendo y termine siendo conocida.</p>
        <ul>
          <li>Webs o Apps con buena interfaz, y buena estructura y lectura de codigo.</li>
          <li>Trabajar para grandes empresas.</li>
          <li>Ser reconocido como Dev Front-End</li>
          <li>Empezar un propio emprendimiento, y poner en uso todo el conocimiento de los cursos.</li>
        </ul>
      </div>
    </>
  )
}

export default App
