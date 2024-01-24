import { memo, useEffect } from 'react'

import { Col, Row } from 'react-bootstrap'

import SideBar from 'components/SideBar'

import useTitle from 'hooks/useTitle'

import { ContainerBackground } from './styles'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home ')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContainerBackground>
      <Row className="d-flex row-cols-1 row-cols-md-4">
        <Col>
          <SideBar />
        </Col>
      </Row>
    </ContainerBackground>
  )
}

export default memo(Home)
