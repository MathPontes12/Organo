import './DropdownList.css'

// se cria um map de itens que retorna option desses itens
// o .map retorna um novo array de elementos, baseado no que retornamos na função passada por callback.
function DropdownList(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value={''}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList