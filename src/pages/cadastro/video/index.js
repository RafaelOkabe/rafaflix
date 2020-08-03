import React, { useEffect, useState } from 'react'
import PageDefault from '../../../componentes/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../componentes/FormFiled'
import Button from '../../../componentes/Button'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(({titulo}) => titulo)
  const { handlerChange, values } = useForm({
    titulo:'',
    url: '',
    categoria: ''
  })

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
      })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault()
        // alert('Video cadastrado com sucesso!')

        const categoriaIdEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria
        })

        console.log('categoriaIdEscolhida',categoriaIdEscolhida)

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaIdEscolhida.id
        })
        .then(() => {
          console.log('Cadastrou com sucesso!')
          history.push('/')
        })
      }}>
        <FormField
          label='Titulo do Vídeo'
          name='titulo'
          value={values.titulo}
          onChange={handlerChange}
        />
        <FormField
          label='URL'
          name='url'
          value={values.url}
          onChange={handlerChange}
        />
        <FormField
          label='Categoria'
          name='categoria'
          value={values.categoria}
          onChange={handlerChange}
          suggestions={categoryTitles}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      <Link to='/cadastro/categoria'>
        Cadastrar Categoria
        </Link>
    </PageDefault>
  )
}

export default CadastroVideo