import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

//ARQUIVO DE CONFIGURAÇÃO POR ISSO MINUSCULO
//DENTRO DA ROOT HAVERÁ UM APP ONDE TEM OUTRAS DIVs

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
