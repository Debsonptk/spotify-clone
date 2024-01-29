import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SideBarContainer = styled.div`
  top: 0;
  left: 0;
  width: 320px;
  background-color: #000;
  border-radius: 8px;
  padding: 10px;
`
export const ImageSize = styled.img`
  width: 120px;
`
export const NavSection = styled.div`
  background-color: #121212;
  border-radius: 8px;
`
export const LinkStyle = styled(Link)`
  text-decoration: none;
`
export const TextColor = styled.span`
  width: 120px;
  color: #b3b3b3;
`
export const UlStyled = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const BackgroundLibery = styled.div`
  background-color: #242424;
  border-radius: 8px;
`
export const FontSize = styled.span`
  font-size: 12px;
`
export const Button = styled.button`
  padding: 5px 10px 5px 10px;
  border-radius: 40px;
  background-color: #f7f7f7;
  color: #000;
  border: none;
  font-size: 13px;

  &&:hover {
    border: 1px solid #fff;
  }
`
export const CookiesStyles = styled.span`
  color: #b3b3b3;
  font-size: 15px;
`
export const FixedBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`
export const ButtonLenguage = styled.button`
  padding: 5px 10px 5px 10px;
  border-radius: 40px;
  background-color: transparent;
  color: #fff;
  font-size: 15px;
  border: 1px solid #fff;

  &&:hover {
    border: 2px solid #fff;
  }
`
/* ESTILOS DO MAIN */

export const MainContainer = styled.div`
  max-width: 80vw;
  max-height: 100vh;
  margin-left: 320px;
  margin-right: 30px;
`
export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 5px;
`
export const ContainerContent = styled.div`
  border-radius: 8px;
  background-color: #121212;
`

export const TransparentButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
export const HeaderSearch = styled.input`
  border: none;
  background: #242424;
  color: #fff;
`
export const SearchContainer = styled.div`
  border: none;
  border-radius: 32px;
  background: #242424;
  padding: 0px 120px 0 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  outline: none;

  &&:hover {
    border: 2px solid #fff;
  }
`
