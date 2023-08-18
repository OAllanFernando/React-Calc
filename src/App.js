
import { Route } from 'react-router-dom';
import './App.css';
import Calculadora from './pages/calculadora/Calculadora';
import Home from './pages/home/Home';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import { useState } from 'react';

function App() {
  // Sempre que eu tiver um componente, são duas partes
  // Não posso ter concorrentes, por exemplo duas divs 

  // const [valor, setValor] = useState(23);


  // const alteraValor = () => {
  //   setValor(valor-1);
  // }
  // const alteraValorNovo = () => {
  //   setValor(valor+1);
  // }
  // const alteraValorNovoDeNovo = (parametro) => {
  //   setValor(valor + parametro );
  // }
  // console.log(valor)


return(

  <>
    {/* <Home nome="Allan" idade={valor} />
  <button onClick={alteraValor}>Quero ser mais novo</button>
    <button onClick={alteraValorNovo}>Quero ser mais velho</button>
    <button onClick={() =>{alteraValorNovoDeNovo(10)}}>Soma 10</button> */}
    <>
      <BrowserRouter>
        <Routes>  
          <Route exact path='/' Component={() => 
          <Home nome="Frank" idade="35"/>}/>
          <Route path='/calculadora' Component={Calculadora}
          />
        </Routes>
      </BrowserRouter>
    </>
  </>
)
  
}

export default App;
