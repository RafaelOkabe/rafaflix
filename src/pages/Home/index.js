import React, { useEffect, useState } from 'react';
import BannerMain from '../../componentes/BannerMain'
import Carousel from '../../componentes/Carousel'
import categoriasRepository from '../../repositories/categorias'
import PageDefault from '../../componentes/PageDefault'

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categorias, indice) => {
        if (indice === 0){
          return (
            <div key={categorias.id}>
              <BannerMain 
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={"Python é o novo Excel? Para que serve o R, Pandas e Jupyter? E qual é, afinal, a diferença entre o Data Science, Business Intelligence e Machine Learning? Descubra no primeiro episódio de Hipsters Ponto Tube!"}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
                />
            </div>
          )
        }
        return (
          <Carousel
            key={categorias.id}
            category={categorias}
          />
        )
        })
        }

        {/* <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Python é o novo Excel? Para que serve o R, Pandas e Jupyter? E qual é, afinal, a diferença entre o Data Science, Business Intelligence e Machine Learning? Descubra no primeiro episódio de Hipsters Ponto Tube!"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        />  */}
    </PageDefault>
  );
}

export default Home;