import { useState } from "react"
 
function Contador() {
 
  const[valor, setValor] = useState(0);
 
  function handleClick() {
    setValor(valor + 1);
  }

  function handleClickSubtrair(){
    setValor(valor - 1);
  }
 
  return (
    <div>
      <h1>Componente Contador</h1>
      <p>O valor atual é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
      <button onClick={handleClickSubtrair}>Subtrair 1</button>
      </div>
  )
}
 
export default Contador
 