import './TextField.css'

// utilizar o parametro. permite q n fique um monte de parametro, deixando mais organizado, declarando so como props.tag
function TextField(props) {

  const aoDigitado= (evento) => {
      props.aoAlterado(evento.target.value)
  }
    return(
        <div className="campo-texto">
            <label> {props.label} </label>
            <input 
            required= {props.obrigatorio}
            placeholder= {props.placeholder}
            value={props.valor}
            onChange={aoDigitado}
            />
        </div>
    )
}

export default TextField