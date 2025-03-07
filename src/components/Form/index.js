import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

function FormField(props) {

    
    //Sempre que queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, 
    //precisamos indicar isto utilizando o useState. Do contrário, o valor vai ser alterado mas o DOM não será atualizado.
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    //aoSalvar é uma funçao q retorna a msg no console e o evento.preventDefault q previne a pagina de atualizar sozinha e voltar ao
    // estado inicial antes de escrever e submeter
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    // o formulario possui um botao, entendendo q quando clica ele, submete as informaçoes
    // e quando submete "onSubmit" dispara a funçao aoSalvar.

    // hook(use) do estado, e permitindo que o react renderize a pagina smp q algo é escrito
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite o seu nome" valor={nome}  aoAlterado={valor => setNome(valor)}/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <DropdownList label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default FormField