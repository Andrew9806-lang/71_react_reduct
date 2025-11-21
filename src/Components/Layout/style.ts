import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #a7c7d7ff;
  color: #0a2837ff;
`;
export const Logo = styled.div`
  min-width: 80px;
  min-height: 80px;
  background-color: #0a2837ff;
  border-radius: 50%;
  cursor: pointer;
`;
export const NavContainer = styled.nav`
  display: flex;
  gap: 16px;
`;
export const StyledNavLink= styled(NavLink)`
/* zdes tak dobavlyaem ssilku zamenyaet a,pod kapotom a no soderzhit dop vozmozhnosti */
 text-decoration: none;
  font-size: 20px;
  color: #0a2837ff;
`
export const Main = styled.main`
  display: flex;
  flex: 1;
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #b2d7a7ff;
`;

export const ButtonLogo= styled.div`
display: flex;
align-items: center;
gap: 16px;
max-width: 200px;
`