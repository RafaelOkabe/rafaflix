
import {useState} from 'react'

export function useForm(valoresIniciais) {
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
  
    function clearForm() {
      setValues(valoresIniciais)
    }
  
    return {
      values,
      handlerChange,
      clearForm,
    }
  }

  export default useForm