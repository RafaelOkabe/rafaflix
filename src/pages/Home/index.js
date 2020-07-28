import React from 'react';
import Menu from '../../componentes/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../componentes/BannerMain'
import Carousel from '../../componentes/Carousel'
import Footer from '../../componentes/Footer'

function Home() {
  return (
    <div style={{background: '#141414'}}>
        <Menu></Menu>
        <BannerMain 
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
        /> 

        <Footer />
    </div>
  );
}

export default Home;