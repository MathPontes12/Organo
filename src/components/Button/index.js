import './Button.css'
// com o children, eu consigo transformar o conteudo do props no q quiser, sem ser um texto somente
// <Button> Criar card </Button>
// no caso é um texto mas da pra por outros elementos
function Button(props) {
    return(
        <button className='botao'>
             {props.children}
        </button>
    )
}

export default Button