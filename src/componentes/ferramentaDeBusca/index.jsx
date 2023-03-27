import './busca.css'
import Search from '../search'

export default function FerramentaDeBusca({filtrado, setRenderHeroi}) {

    return (
        <>
            <div className='container-Seletor'>
                <select name="" id="" onChange={(e)=> filtrado(e.target.value)}  >
                    <option value={"todos"}  >{"Todos"}</option>
                    <option value={"Assassino"} >{"Assassino"}</option>
                    <option value={"Atirador"} >{"Atirador"}</option>
                    <option value={"Lutador"} >{"Lutador"}</option>
                    <option value={"Mago"} >{"Mago"}</option>
                    <option value={"Suporte"} >{"Suporte"}</option>
                    <option value={"Tank"} >{"Tank"}</option>
                </select>
                <Search setRenderHeroi={setRenderHeroi}/>
            </div>
        </>
    )
}
