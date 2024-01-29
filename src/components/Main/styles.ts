import styled from 'styled-components'

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
export const Button = styled.button`
  padding: 5px 10px 5px 10px;
  border-radius: 40px;
  background-color: #f7f7f7;
  color: #000;
  border: none;
  font-size: 13px;
`
