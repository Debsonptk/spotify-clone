import { memo, useEffect } from 'react'

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
      <h1 className="text-white">Spotify</h1>
    </ContainerBackground>
  )
}

export default memo(Home)
