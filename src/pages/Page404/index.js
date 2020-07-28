import React from 'react'
import PageDefault from '../../componentes/PageDefault'
import { Link } from 'react-router-dom'

function Page404 () {
    return (
      <PageDefault>
        <h1>Erro 404</h1>

        <div>Ops... Acredito que você esteja perdido.</div>

        <Link to='/'>
            Retornar a Página Inicial
        </Link>
      </PageDefault>
    )
  }

export default Page404