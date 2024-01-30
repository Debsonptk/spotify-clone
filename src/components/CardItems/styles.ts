import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  position: relative;
  width: 220px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
`
export const SpanStyled = styled.span`
  padding: 16px;
  position: absolute;
  font-size: 24px;
  font-weight: 700;
`
export const ImageStyle = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: auto;
  width: 107px;
  transform: rotate(25deg) translate(18%, -2%);
`
