
import { StyledNavLink } from "./style";
import type { NavigationLinkProps } from "./type";

function NavigationLink({ path, name }: NavigationLinkProps) {
  return (
    <StyledNavLink
      to={path}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
      })}
    >
      {name}
    </StyledNavLink>
  );
}
export default NavigationLink