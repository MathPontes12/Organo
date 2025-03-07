import { useState } from 'react';
import Banner from './components/Banner';
import FormField from './components/Form';
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE5F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // so por o .push n funciona, é preciso mostrar pro react a nova inserçao e renderizaçao, dessa forma, pra adicionar é assim
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      } return time;
        
    }))
  }

  return (
    <div className="App">
      <Banner />
      <FormField times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => 
      <Team
        id= {time.id}
        key= {time.nome}
        nome= {time.nome}
        cor= {time.cor}
        colaboradores= {colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor= {mudarCorDoTime}
      />)}


    </div>
  );
}

export default App;
