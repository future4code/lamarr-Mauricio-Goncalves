import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.ffln11-1.fna.fbcdn.net/v/t39.30808-6/269778616_4586454354770471_497301145980511935_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFNPHX4rQWCfIQwF5FEs4Vd3QPhiyPFxvLdA-GLI8XG8pgFSZJf__7Wue2dgXaAPE6qfp9mo9nQRgrR3JKRQ5Aw&_nc_ohc=Pig8-Sh586IAX8iEh4k&tn=n-8fR5zCmpNWaadK&_nc_ht=scontent.ffln11-1.fna&oh=00_AT9V_g5bxlDnWrqB8sTmBWEIIw85UegYzTxolvIkkvI70w&oe=62B80EB5" 
          nome="Mauricio Gonçalves " 
          descricao="Oi, eu sou o Mauricio. Estudante da Labenu sempre procurando aprender mais sobre React."
        />
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
       <CardPequeno
       imagem="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image"
       email="Email:"
       email2="mauriciorg89@hotmail.com"/>
       <CardPequeno
       imagem="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
       endereco="Endereço:"
       endereco2="Tubarão, Santa Catarina"/>
      
        
        
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.ffln11-1.fna.fbcdn.net/v/t1.18169-9/22089951_1534995833214725_4934308675182830163_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEz1j1QbzT_CgJgpId5ydFjIM0Tp2ERWNkgzROnYRFY2dnflq5btysg8EKNUOk6SuTzp7xJGPe33W9WR1iXVgVP&_nc_ohc=tOP3oxUqJSMAX_6dvEs&_nc_ht=scontent.ffln11-1.fna&oh=00_AT_au972lRDY2nuP-1hCxpvVQYJbVSpo0LrVMWD3B9WDeQ&oe=62DA54A4" 
          nome="Imperiums" 
          descricao="Tecnico em informatica!" 
        />
        
        <CardGrande 
          imagem="https://scontent.ffln11-1.fna.fbcdn.net/v/t39.30808-6/218608719_4361576207234947_5461942156138692771_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE-7gMf48KdH14drvjzge5AjQJ0LH7Wdx2NAnQsftZ3HdgsWV9BMxTDarNTK9lS19EjM2up7CEgPPUwdmX31Vdx&_nc_ohc=JHaz8F-xyAEAX-V1XYK&_nc_ht=scontent.ffln11-1.fna&oh=00_AT8ov_YwY1LQvPFKnb_kmbfmIt0zQlPUtEvKSTY6zz6RhA&oe=62B7B873" 
          nome="Portinari" 
          descricao="Portaria." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
