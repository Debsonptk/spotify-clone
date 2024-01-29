import { memo, useEffect } from 'react'

import Footer from 'components/Footer'
import Main from 'components/Main'
import SideBar from 'components/SideBar'

import useTitle from 'hooks/useTitle'

import { ContainerBackground } from './styles'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Spotify')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContainerBackground>
      <SideBar />
      <Main />
      <Footer />
    </ContainerBackground>
  )
}

export default memo(Home)
