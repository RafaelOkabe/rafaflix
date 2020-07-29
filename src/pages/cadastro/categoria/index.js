import React, {useState} from 'react'
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../componentes/FormFiled'

function CadastroCategoria () {
  const [categorias, setCategorias] = useState([])
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handlerChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    )
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault()
          setCategorias([
            ...categorias,
            values
          ])

          setValues(valoresIniciais)
        }}>

          <FormField
            label='Nome da Categoria: '
            type='text'
            name='nome'
            value={values.nome}
            onChange={handlerChange}
          />
          
          <FormField
            label='Descrição: '
            type='textarea'
            name='descricao'
            value={values.descricao}
            onChange={handlerChange}
          />
          <FormField
            label='Cor: '
            type='color'
            name='cor'
            value={values.cor}
            onChange={handlerChange}
          />
            <button>
              Cadastrar
            </button>
        </form>

        <ul>
          {categorias.map((categorias, indice) => {
            return (
              <li key={`${categorias}${indice}`}>
                {categorias.nome}
              </li>
            )
          })}
        </ul>

        <Link to='/'>
            Ir para a Home
        </Link>
      </PageDefault>
    )
  } 

export default CadastroCategoria