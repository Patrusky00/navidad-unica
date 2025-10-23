import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{textAlign:'center',marginTop:'50px',fontFamily:'sans-serif'}}>
      <h1>🎄 Bienvenida a Navidad Única 🎅</h1>
      <p>Tu historia navideña ya está viva 💫</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
