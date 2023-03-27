import { useState } from 'react';
import FerramentaDeBusca from '../../componentes/ferramentaDeBusca';
import Herois from '../../componentes/herois';
import herois from '../../componentes/herois/herois.json';
import DescricaoHerois from '../descricaoHerois';
import descricaoHerois from '../../paginas/descricaoHerois/descricaoHerois.json';


export default function PaginaHerois() {
  const [renderHeroi, setRenderHeroi] = useState(herois)

  const chave = Date.now()

  const tags = [...new Set(herois.map((heroi) => heroi.tag))]

  const filtrado = (tag) => {
    const novosherois = herois.filter((heroi) => heroi.tag === tag)
    if(tag === "todos"){
      setRenderHeroi(herois)
    } else{
      setRenderHeroi(novosherois)
    }
  }

  const [descricao, setDescricao] = useState([]);
  

  const filtrando = (nome) => {
    const temporario = descricaoHerois.filter(heroi => heroi.nome === nome);
   
    setDescricao(temporario);
  };

  return (
    <div className="PaginaHerois">
      
      <FerramentaDeBusca 
        tags={tags} 
        chave={chave}  
        filtrado={filtrado} 
        setRenderHeroi={setRenderHeroi} />
      <Herois 
        renderHeroi={renderHeroi}
        filtrando={filtrando}
      />
      <DescricaoHerois descricao={descricao}/>
    </div>
  );
}
