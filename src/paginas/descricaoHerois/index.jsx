import './descricao.css'
import React from 'react'

export default function DescricaoHerois({descricao}) {

  

  return (
    <div className='container-Descricao'>
        { descricao.map( heroi => {
            return (
                <div key={heroi.id}>
                    <img src={heroi.imagem} alt="" className='banner'/>
                    <h1 className='nome-heroi'>{heroi.nome}</h1>
                    <h2>{heroi.tag}</h2>
                    <p className='bio'>{heroi.bio}</p>
                    <img src={heroi.skills} className='skills' alt=''></img>
                </div>
            )   
        })}
        
    </div>
  ) 
}
