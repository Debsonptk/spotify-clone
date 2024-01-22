import { memo, useEffect } from 'react'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home | Spotify')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <h1>Spotify</h1>
}

export default memo(Home)
