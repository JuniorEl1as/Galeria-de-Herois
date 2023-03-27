import './search.css'
import herois from '../herois/herois.json'

export default function Search({setRenderHeroi}) {

  return (
    <>
        <div className='container-Search'>
          
            <input type="text" placeholder='Buscar por nome' onChange={ evento =>{
              const texto = evento.target.value
              const verificaTexto = herois.filter( heroi => heroi.nome.includes(texto))
              setRenderHeroi(verificaTexto)
            }}/>
        </div>
    </>
  )
}
