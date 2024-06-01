import { Link, Outlet, NavLink, Routes, useParams, useRouteError } from 'react-router-dom';
import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #B0C4B1;
  padding: 0px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin-left: 15px;
  a.active {
    color: black;
    font-weight: 700;
  }
`;

const NavLinkStyled = styled(NavLink)`
  padding: 25px;
  color: #4A5759; 
  text-decoration: none;
  transition: color, background-color 0.3s ease;

  border-radius:20px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;

  &:hover {
    text-decoration: none; 
    color: black;
  }
  
  h1 {
    margin: 0;
  }
`;

export function Root() {
  const styles = css`
    .appContainer {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    .mainContent {
      /* flex: 1; */
    }
  `;

  return (
    <div css={styles} className='appContainer'>
      <NavBar>
        <div id='title'>
          <NavLinkStyled to='/'> 
            <h1 >Wanderful</h1>
          </NavLinkStyled>
        </div>
        <nav>
          <NavList className='navBar'>
            <NavItem className="navLink"><NavLinkStyled to='/explore'>Explore</NavLinkStyled></NavItem>
            <NavItem className="navLink"><NavLinkStyled to='/plan'>Plan</NavLinkStyled></NavItem>
            <NavItem className="navLink"><NavLinkStyled to='/journal'>Journal</NavLinkStyled></NavItem>
            <NavItem className="navLink"><NavLinkStyled to='/social'>Social</NavLinkStyled></NavItem>
          </NavList>
        </nav>
      </NavBar>

      <div className='mainContent'>
        <Outlet />
      </div>
    </div>
  );
}

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hmm... I wonder where I should go with my date...</h1>
    </>
  );
}
