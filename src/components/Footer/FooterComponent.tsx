import { memo } from 'react'

import { Col, Row } from 'react-bootstrap'

import {
  BackgroundColor,
  ButtonSubscribe,
  SizeSubtitle,
  SizeTitle,
} from './styles'

const Footer: React.FC = () => {
  return (
    <BackgroundColor>
      <div className="pt-3 pb-1 px-3">
        <Row className="d-flex row-cols-1 row-cols-md-2">
          <Col>
            <div>
              <SizeTitle className="text-white">
                Testar o Premium de graça
              </SizeTitle>
            </div>
            <SizeSubtitle className="text-white">
              Inscreva-se para curtir músicas ilimitadas e podcasts só com
              alguns anúncios. Não precisa de cartão de crédito.
            </SizeSubtitle>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="pb-4 pt-2 px-3">
              <ButtonSubscribe type="button">
                <span className="px-2">
                  <strong> Inscreva-se Grátis</strong>
                </span>
              </ButtonSubscribe>
            </div>
          </Col>
        </Row>
      </div>
    </BackgroundColor>
  )
}

export default memo(Footer)
