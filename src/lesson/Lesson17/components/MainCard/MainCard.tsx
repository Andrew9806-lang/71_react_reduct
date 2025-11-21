import { createContext, useState } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import type { MainCardContextType, UserData } from "./types";

// Шаг 1. Создаём хранилище - контекст, с помощью функции createContext
// которую нужно импортировать
// export const MainCardContext = createContext<undefined | UserData>(undefined);
export const MainCardContext = createContext<MainCardContextType>({
  data: undefined,
  onDataChange: () => {},
});

function MainCard() {
  const [userData, setUserData] = useState<UserData | undefined>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });

  return (
    // 2 шаг - создаём обертку, которая позволяет положить свои значения в
    // контекст и затем предоставляет к ним доступ всем вложенным компонентам
    // <MainCardContext.Provider value={userData}>
    <MainCardContext.Provider
      value={{
        data: userData,
        onDataChange: setUserData,
      }}
    >
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}

export default MainCard;