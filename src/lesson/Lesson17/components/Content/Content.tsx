import { useContext } from "react";

import { ContentComponent, DataItem } from "./styles";
import { MainCardContext } from "../MainCard/MainCard";
import Button from "../../../../Components/Button/Button";

function Content() {
  // 3 шаг - получить данные из контекста с помощью useContext
  // const userData = useContext(MainCardContext);
  const { data, onDataChange } = useContext(MainCardContext);

  return (
    <ContentComponent>
      <DataItem>First Name: {data?.firstName} </DataItem>
      <DataItem>Last Name: {data?.lastName}</DataItem>
      <DataItem>Age: {data?.age}</DataItem>
      <Button
        name="DELETE DATA"
        onClick={() => {
          onDataChange(undefined);
        }}
      />
    </ContentComponent>
  );
}

export default Content;
