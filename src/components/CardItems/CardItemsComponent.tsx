import { memo } from 'react'

import { CardContainer, ImageStyle, SpanStyled } from './styles'

interface ICardItemsProps {
  subtitle: string
  image: string
}

const CardItems: React.FC<ICardItemsProps> = ({ subtitle, image }) => {
  return (
    <CardContainer to="">
      <div>
        <ImageStyle src={image} alt="" className="img-fluid" />
        <SpanStyled>{subtitle}</SpanStyled>
      </div>
    </CardContainer>
  )
}

export default memo(CardItems)
