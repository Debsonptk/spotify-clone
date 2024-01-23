import { memo } from 'react'

import { GoHome } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { LuPlus } from 'react-icons/lu'
import { VscLibrary } from 'react-icons/vsc'

import logo from 'assets/logo/logo-spotify.png'

import {
  BackgrondContainer,
  BackgroundLibery,
  ImageSize,
  TextColor,
} from './styles'

const SideBar: React.FC = () => {
  return (
    <>
      <BackgrondContainer className="p-3 mb-2 mx-2">
        <ImageSize src={logo} alt="Logo Spotify" className="img-fluid p-3" />
        <div className="pb-3  px-3">
          <GoHome color="#b3b3b3" size="30px" />
          <TextColor className="px-3">Início</TextColor>
        </div>
        <div className="pb-3 px-3">
          <IoSearchOutline color="#b3b3b3" size="30px" />
          <TextColor className="p-3">Buscar</TextColor>
        </div>
      </BackgrondContainer>
      <section>
        <BackgrondContainer className="p-3 mb-2 mx-2">
          <div className="px-3 mb-3">
            <VscLibrary color="#b3b3b3" size="30px" />
            <TextColor className="p-3">Sua Biblioteca</TextColor>
            <LuPlus color="#b3b3b3" size="20px" />
          </div>
          <BackgroundLibery className="d-flex flex-column mb-4">
            <h6 className="text-white pt-3 px-3">Crie sua primeira playlist</h6>
            <span className="text-white pt-1 px-3 pb-3">
              É fácil, vamos te ajudar
            </span>
          </BackgroundLibery>
          <BackgroundLibery className="d-flex flex-column">
            <h6 className="text-white pt-3 px-3">
              Que tal seguir um podcast novo?
            </h6>
            <span className="text-white pt-1 px-3 pb-3">
              Avisaremos você sobre novos episódios
            </span>
          </BackgroundLibery>
        </BackgrondContainer>
      </section>
    </>
  )
}

export default memo(SideBar)
