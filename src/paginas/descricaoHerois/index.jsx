import './descricao.css'
import React from 'react'
import descricoes from './descricaoHerois.json'
import { Link } from 'react-router-dom';
import {TiArrowBackOutline} from 'react-icons/ti'

export default function DescricaoHerois({ id }) {

   let mostrar = 0;

   if (id === 1) {
      mostrar = 0
   } else if (id === 2) {
      mostrar = 1
   } else if (id === 3) {
      mostrar = 2
   } else if (id === 4) {
      mostrar = 3
   } else if (id === 5) {
      mostrar = 4
   } else if (id === 6) {
      mostrar = 5
   } else if (id === 7) {
      mostrar = 6
   } else if (id === 8) {
      mostrar = 7
   } else if (id === 9) {
      mostrar = 8
   } else if (id === 10) {
      mostrar = 9
   } else if (id === 11) {
      mostrar = 10
   } else if (id === 12) {
      mostrar = 11
   } else if (id === 13) {
      mostrar = 12
   } else if (id === 14) {
      mostrar = 13
   } else if (id === 15) {
      mostrar = 14
   }

   return (
      <main>
         <Link to='/' >
            <div className='botao-voltar'>
               <TiArrowBackOutline size={28} color={"black"} />
            </div>

         </Link>
         <div className='container-Descricao'>
            {
               descricoes[mostrar].map(heroi => {
                  return (
                     <div key={heroi.id}>
                        <img src={heroi.imagem} alt="" className='banner' />
                        <h1 className='nome-heroi'>{heroi.nome}</h1>
                        <h2>{heroi.tag}</h2>
                        <p className='bio'>{heroi.bio}</p>
                        <img src={heroi.skills} className='skills' alt=''></img>
                     </div>
                  )
               })}
         </div>
      </main>
   )
}
