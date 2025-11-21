// 1. Импортируем функцию, с помощью которой создаём slice
import { createAppSlice } from "store/createAppSlice";
import { CounterStateSLice } from "./type";
// 2. Создаём слайс для кайнтера с помощью вызова функции createAppSlice,
// в которую передаём обект настройки
const counterInitialState:CounterStateSLice ={
    count:0,
}
export const counterSlice = createAppSlice({
      // 3. Создаём имя, под которым будет храниться обект со значением каунтера (state)
    // Стейт для отдельных частей данных  всегда представляет собой объект!
    name: 'COUNTER',
    // 4 zadaem object v kotorom budet hranitsya nachalnoe sostoyanie 
    initialState: counterInitialState,
    // 5 shag  sozdaem object vnutri kotorogo budut hranitsya reducerov(funkcii kotorie otvechayut za izmen
    //izmeneniya informacii)
    reducers:create =>({
        // create eto kluch
        plus:create.reducer((state:CounterStateSLice)=>{state.count= state.count +1}),
        // 1 naimenovanie reducera , 2 parametr i ego tipisaciya  , potom parametr i counterInitinalState to est izmeneniya
        // vizivaetsya cherez dispatch  
        minus:create.reducer((state:CounterStateSLice)=>{state.count=state.count -1}),
    }),
    // shag 6 sozdaem selectori , kotorie pozvolyayut zabrat dannie iz state komponenta 
    selectors:{
        counterValue:(state:CounterStateSLice)=>state.count,
    },
})

// 7 shag delaem otdelniy export action i selectorov dlya udobstva ispolzovaniya ih v komponente 
export const counterActions = counterSlice.actions;
export const counterSelectors = counterSlice.selectors;
// //reducers:{
// plus:(=>{})
// minus:()=>{}
