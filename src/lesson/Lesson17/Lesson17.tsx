import Counter from "Components/Counter/Counter"
import { Lesson17Wrapper } from "./styles"
//9 . Importirovat hook dlya dispatcha(useAppDispatch,useAppSelector) i polucheniya dannih 
import { useAppDispatch,useAppSelector } from "store/hooks"
// 10 shag . importiruem action i selectori iz faila so slice
import { counterActions,counterSelectors } from "store/counter/counterSlice"

function Lesson17() {
  //11. poluchit  funkciyu dispatch kotoruyu vozvrashaet hook useAppDispatch 
  const dispatch = useAppDispatch();
  //12  zabiraem znacheniya countera iz store , iz selectora kotoruyu mi sozdali v selectore v counter slice 
  // useAppSelector otvechaet za vizov selectora
  const counter = useAppSelector(counterSelectors.counterValue)
  //13 vizivaem dispatch i peredaem v nego vizov action 
  // vizov dispatcha nuzhno delat vnutri funkcii kotoraya srabativaet pri nazhatii knopki ili trigera
  const onPlus=()=>{
    dispatch(counterActions.plus())
  }
   const onMinus=()=>{
    dispatch(counterActions.minus())
  }
  return (
    <Lesson17Wrapper>
      <Counter counter={counter} onPlusClick={onPlus} onMinusClick={onMinus} />
      {/* counter dolzhen bit iz selectora useAppSelector  */}
    </Lesson17Wrapper>
  )
}

export default Lesson17
