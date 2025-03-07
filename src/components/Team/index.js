import hexToRgba from 'hex-to-rgba'
import Employees from '../Employees'
import './Team.css'

function Team(props) {
    return (
       
        // para criar um style no react se chama o style e dentro dele se cria chaves e as propriedades de estilo dentro dela
        // sem as chaves internas, ele entenderia como variavel, procurando a variavel por exemplo backgroundColor, que nao existe
        // RENDERIZAÇAO CONDICIONAL: se a lista for maior q 0, renderize (&&) a section
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hexToRgba(props.cor, '0.2') }}>
            <input onChange={evento=> props.mudarCor(evento.target.value, props.id)} type='color' className='input-cor' value={props.cor} />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Employees 
                key={colaborador.nome} 
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem} 
                corDeFundo= {props.cor}
                aoDeletar= {props.aoDeletar}
                />)}
            </div>
        </section>
    )
}

export default Team