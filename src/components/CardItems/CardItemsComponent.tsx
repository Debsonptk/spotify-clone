import { memo } from 'react'

import { CardContainer, ImageStyle, SpanStyled } from './styles'

interface ICardItemsProps {
  subtitle: string
  image: string
  backgroundColor?: string
}

const CardItems: React.FC<ICardItemsProps> = ({
  subtitle,
  image,
  backgroundColor,
}) => {
  return (
    <CardContainer to="" style={{ backgroundColor }}>
      <div>
        <ImageStyle src={image} alt="" className="img-fluid" />
        <SpanStyled className="text-white">{subtitle}</SpanStyled>
      </div>
    </CardContainer>
  )
}

export default memo(CardItems)
