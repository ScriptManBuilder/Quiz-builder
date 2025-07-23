import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from './shared';

export const Nav = styled.nav`
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.border};
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primary};
  margin: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ $isActive }) => $isActive ? colors.primary : colors.secondary};
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  transition: color 0.2s;

  &:hover {
    color: ${colors.primary};
  }
`;
