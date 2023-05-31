import './herois.css'
import React from 'react'
import { Link} from 'react-router-dom'

export default function Herois({ renderHeroi, filtrando }) {
    return (
        <>
            <div className="container-Heroi">
                {renderHeroi.map((heroi) => {
                    return (
                        <div className="card-Heroi" key={heroi.id}>
                            <div to="descricaoHerois">
                                <Link to={`/descricao/${heroi.nome}`}> 
                                    <img
                                        src={heroi.imagem}
                                        alt="ok" value={heroi.nome} className="imagem-Heroi"
                                        
                                        ></img>
                                </Link>
                            </div>
                            <p className="nome-Heroi">{heroi.nome}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
