import React from 'react'
import produtos from '../data/produtos'

export default props =>{

    function getProdutosListItem(){

        return produtos.map(prod=> {
        return <li key={prod.id}>{prod.id} - {prod.nome} - {prod.preco}</li>

        })
    }

 return (

     <div>
          <h2>Repetição</h2>
           <ul>
              <li>{getProdutosListItem()}</li>

           </ul>
     </div>

 )

}