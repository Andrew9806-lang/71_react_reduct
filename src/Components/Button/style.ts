import styled from "@emotion/styled";

interface ButtonProps{
  primary?:boolean
}


  export const ButtonStyle = styled.button<ButtonProps>`
    width: 100%;
  padding: 20px;
  background-color:${({primary})=>(primary? " #1F27F5":"red")};
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;