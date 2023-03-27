import './herois.css'
import React from 'react'


export default function Herois({renderHeroi, filtrando}) {
    
    return (
        <>
            <div className="container-Heroi">
                {renderHeroi.map((heroi) => {
                    return (

                        <div className="card-Heroi" key={heroi.id}>
                            <div to="descricaoHerois">
                                
                                <img 
                                src={heroi.imagem} 
                                alt="ok" value={heroi.nome}className="imagem-Heroi" 
                                onClick={()=> filtrando(heroi.nome)}></img>

                            </div>
                            <p className="nome-Heroi">{heroi.nome}</p>
                        </div>
                        
                    )
                })}
            </div>
        </>
    )
}
