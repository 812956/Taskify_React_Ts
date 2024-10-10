import React,{ useState } from "react"

export default function Review(){

    const [number1,setnumber1] = useState<number>(0)
    const [number2,setnumber2] = useState<number>(0)
    const [sumof,setSum] = useState<number>(0)
     
    function number1Change(eve:React.ChangeEvent<HTMLInputElement>) {
         
        let num = parseInt(eve.target.value)
        setnumber1(num)
    }

     
    function number2Change(eve:React.ChangeEvent<HTMLInputElement>) {
         
        let num = parseInt(eve.target.value)
        setnumber2(num)
    }
    
    function sum(){
        setSum(number1 + number2)
    }
    

    return (
        <>
         <input name="num1" value={number1} onChange={number1Change} type="number" />
         <input name="num2" value={number2} type="number" onChange={number2Change}/>
         <button onClick={sum}>click</button>
         <p>{sumof}</p>
        </>
    )

}