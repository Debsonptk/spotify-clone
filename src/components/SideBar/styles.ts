import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BackgrondContainer = styled.div`
  background-color: #121212;
  border-radius: 8px;
  flex: 1;
  width: 25%;
`

export const ImageSize = styled.img`
  width: 120px;
`
export const TextColor = styled.span`
  width: 120px;
  color: #b3b3b3;
`
export const BackgroundLibery = styled.div`
  background-color: #242424;
  border-radius: 8px;
`
export const FontSize = styled.span`
  font-size: 12px;
`
export const CookiesStyles = styled.span`
  color: #b3b3b3;
`
export const LinkStyle = styled(Link)`
  text-decoration: none;
`
export const Button = styled.button`
  padding: 5px 10px 5px 10px;
  border-radius: 40px;
  background-color: #f7f7f7;
  color: #000;
  border: none;
  font-size: 15px;

  &&:hover {
    border: 1px solid #fff;
  }
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
