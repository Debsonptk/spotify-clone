import { memo } from 'react'

import { GoHome } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'

import logo from 'assets/logo/logo-spotify.png'

import { BackgrondContainer, ImageSize } from './styles'

const SideBar: React.FC = () => {
  return (
    <BackgrondContainer className="m-3">
      <ImageSize src={logo} alt="Logo Spotify" className="img-fluid p-3" />
      <div className="pb-3  px-3">
        <GoHome color="white" size="30px" />
        <span className="text-white px-3">Início</span>
      </div>
      <div className="pb-3 px-3">
        <IoSearchOutline color="white" size="30px" />
        <span className="text-white p-3">Buscar</span>
      </div>
    </BackgrondContainer>
  )
}

export default memo(SideBar)
