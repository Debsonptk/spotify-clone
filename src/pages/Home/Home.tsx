import { memo, useEffect } from 'react'

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
      <SideBar />
    </ContainerBackground>
  )
}

export default memo(Home)
