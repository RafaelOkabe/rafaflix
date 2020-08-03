import React, { useState, useEffect } from 'react'
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../componentes/FormFiled'
import Button from '../../../componentes/Button'
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const {handlerChange, values, clearForm} = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost') 
    ? 'http://localhost:8080/categorias'
    : 'https://rafinhaflix.herokuapp.com/categorias'
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json()
        setCategorias([
          ...resposta,
        ])
      })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])

        clearForm(valoresIniciais)
      }}>

        <FormField
          label='Nome da Categoria'
          type='text'
          name='nome'
          value={values.nome}
          onChange={handlerChange}
        />

        <FormField
          label='Descrição'
          type='textarea'
          name='descricao'
          value={values.descricao}
          onChange={handlerChange}
        />
        <FormField
          label='Cor'
          type='color'
          name='cor'
          value={values.cor}
          onChange={handlerChange}
        />
        <Button>
          Cadastrar
            </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categorias, indice) => {
          return (
            <li key={`${categorias}${indice}`}>
              {categorias.titulo}
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