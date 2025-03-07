import { AiFillCloseCircle } from "react-icons/ai";
import './Employees.css'

function Employees(props) {
    return(
        //foi importado o componente icons, e usado <AiFillCloseCircle/>
        <div className='colaborador'>
            <AiFillCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => props.aoDeletar(props.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )   
}

export default Employees