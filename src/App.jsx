import './index.css'

import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'


export default (props)=> (

  <div className="App">

<Card titulo="#06 - Condicional com If" color="#FA6900">
  
  <CondicionalComIf numero={10}></CondicionalComIf>

</Card> 

<Card titulo="#05 - Condicional" color="#E94C6F">
  
  <Condicional numero={11}></Condicional>

</Card>

<Card titulo="#04 - Repetição" color="#008BBA">
  
  <Repeticao></Repeticao>

</Card>
<Card titulo="#03 - Componente com Filhos" color="#D96459">
  
  <ComFilhos >
     <ul>
        <li>Ana </li>
        <li>Bia </li>
        <li>Carlos </li>
        <li>Daniel </li>

     </ul>

 </ComFilhos>

</Card>

<Card titulo="#02 - Componente com Parametro" color="#FF85CB">
  
  <ComParametro  titulo="Esse é o titulo" subtitulo="esse é o subtitulo" />

</Card>

<Card titulo="#01 - Primeiro Componente" color="#92B06A">
     <Primeiro/>
</Card>

  </div>


  
  
)