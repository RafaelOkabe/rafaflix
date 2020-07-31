import React, { useState, useEffect } from 'react'
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../componentes/FormFiled'
import Button from '../../../componentes/Button'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor) {
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

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias'
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json()
        setCategorias([
          ...resposta,
        ])
      })

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       "id": 1,
    //       "nome": "Análise de Dados",
    //       "descricao": "Vídeos sobre análise e modelagem de Dados",
    //       "cor": "#00C86F"
    //     },
    //     {
    //       "id": 2,
    //       "nome": "Desenvolvimento Web",
    //       "descricao": "Tudo o que você precisa saber para o desenvolvimento Web",
    //       "cor": "#6BD1FF"
    //     },
    //     {
    //       "id": 3,
    //       "nome": "Hardware",
    //       "descricao": "Para quem é fanático por Hardwares",
    //       "cor": "#9cd33b"
    //     },
    //     {
    //       "id": 4,
    //       "nome": "Linux",
    //       "descricao": "Para quem gosta de se aventurar com outros Sistemas Operacionais",
    //       "cor": "orange"
    //     },
    //     {
    //       "id": 5,
    //       "nome": "Aprendendo a aprender tecnologia",
    //       "descricao": "Descubra como aprender de fato a programar",
    //       "cor": "#6b5be2"
    //     }
    //   ])
    })

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
              <li key={`${categorias.nome}${indice}`}>
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