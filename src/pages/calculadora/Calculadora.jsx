import React, { useEffect, useState } from "react";
import Button from "../../componentes/botoes/Button";
import "./Calculadora.css"
import { CalculadoraService } from "../../service/CalculadoraService";

const Calculadora = () => {

    const [valor1, setValor1] = useState();
    const [valor2, setValor2] = useState();
    const [resultado, setResultado] = useState();
    const [calculos, setCalculos] = useState(null);
    
   

    const calculadoraService = new CalculadoraService();


    const save = (valor1, valor2, operacao) => {
        calculadoraService.save({
            valor1: valor1,
            valor2: valor2,
            operacao: operacao
        }).then(data => {
            console.log(data)

        })
    }

    const consultar = () => {
        calculadoraService.consultar().then(data => {
            setCalculos(data.data);
        })

    }
    useEffect(() => {
        if (calculos == null) {
            consultar();
            console.log("efeeeeeeeeeeeeeeect");
        }

    }, [calculos])



    const somar = () =>{
        setResultado(parseFloat(valor1) + parseFloat(valor2));
        save(valor1, valor2, 1);
    }
    const subtrair = () => {
        setResultado(parseFloat(valor1) - parseFloat(valor2));
        save(valor1, valor2, 3);
    }

    return (<>
    <div>

        <h3>
            Calculadorasssss
            
        </h3>
        <div className="container">
                <input className="field" id="valor1" type="number" onChange={(e)=>setValor1(e.target.value)}/>
                <input className="field" id="valor2" type="number" onChange={(e) => setValor2(e.target.value)} />
                
                
               <div className="resultado"> {resultado}</div>

               <div className="teclado">
                    <Button label="1" onClick={somar} />
                    <Button label="2" onClick={somar} />
                    <Button label="3" onClick={somar} />
                    <Button label="Soma" onClick={somar  } />
                    <Button label="4" onClick={somar} />
                    <Button label="5" onClick={somar} />
                    <Button label="6" onClick={somar} />
                    <Button label="Subtrair" onClick={subtrair} />
                    <Button label="7" onClick={somar} />
                    <Button label="8" onClick={somar} />
                    <Button label="9" onClick={somar} />
                    <Button label="Dividir" onClick={subtrair} />
                    <Button label="0" onClick={somar} />



 {calculos != null && calculos.map(calculo => (
                    <p>{calculo.valor1}
                    {calculo.valor2}</p>
                )
                )}
               </div>
               
        </div>
        


    </div>
    
    
    
    </>
)}

export default Calculadora;