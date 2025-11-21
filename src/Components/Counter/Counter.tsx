// import huka razobrat
// import { useState } from "react";
import{CounterWrapper,ButtonWrapper,ResultContainer} from "./styles"
import Button from "../Button/Button";
import type { CounterProps } from "./type";


function Counter({counter,onPlusClick,onMinusClick}:CounterProps) {
    // shag - vizov huka 
    //  v vizove huka neobhodimo peredat znachenie po umolchaniyu (luboi tip dannih)
    // vizov huka vozvrashaet massiv iz 2 elementov
    // 1 - eto znachenie  state
    //2- funkciya kotoraya mozhet izmenit state (^tak kak tolko ona mozhet izmenyat sostoyanie)
//    const state = useState(0);
//    console.log(state);

// const[counter,setCounter] = useState<number>(0);
// console.log(counter);
// shag 3 sozdaem funkciyu kotorie budem peredavat knopkam , a vnutri etuh funkciy 
// mi dolzhni vizvat funkciyu SetCounter v kotori propishem logiku

// const OnMinusClick = ():void=>{
//     // mi mozhem ispolzovat funkciyu setCounter 2 sposobami 1 proshe 2 bezopasnee
//     // 1 - prosto peredavaya novoe znachenie 
//     // 2 - peredavat funkciyu call back , vnutri kotori mi mozhem poluchit predidiushee sostoyanie 
//     // 1 variant setCounter(counter++)
//     setCounter((prevState)=>prevState-1)

// };

// const onPlusClick = ():void=>{
//     setCounter((prevState)=> prevState + 1)
// };
   
  return (
    <CounterWrapper primary>
      <ButtonWrapper>
        <Button name="-" onClick={onMinusClick} primary />
          {/* tut mi sdelali props knopki ona krasnaya  */}
      </ButtonWrapper>
  <ResultContainer primary >{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterWrapper>
  );
}
export default Counter;
