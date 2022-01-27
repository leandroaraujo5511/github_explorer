import { useState } from "react";

//imutabilidade -  Não pode altera o conteudo da variavel  - cria uma nova variavel com os valores da primeira mais o novo valor 


export function Counter(){
    
    const [counter, setCounter] =  useState(0);

    function increment(){
        setCounter(counter+1);
    }


    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}