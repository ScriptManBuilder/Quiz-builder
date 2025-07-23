import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationStyles } from '../../styles';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <NavigationStyles.Nav>
      <NavigationStyles.NavContainer>
        <NavigationStyles.Logo>Quiz Builder</NavigationStyles.Logo>
        <NavigationStyles.NavLinks>
          <NavigationStyles.NavLink 
            to="/quizzes" 
            $isActive={location.pathname === '/quizzes' || location.pathname === '/'}
          >
            All Quizzes
          </NavigationStyles.NavLink>
          <NavigationStyles.NavLink 
            to="/create" 
            $isActive={location.pathname === '/create'}
          >
            Create Quiz
          </NavigationStyles.NavLink>
        </NavigationStyles.NavLinks>
      </NavigationStyles.NavContainer>
    </NavigationStyles.Nav>
  );
};

export default Navigation;
