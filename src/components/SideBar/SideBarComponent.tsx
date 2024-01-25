import { memo } from 'react'

import { FiGlobe } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { LuPlus } from 'react-icons/lu'
import { VscLibrary } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

import logo from 'assets/logo/logo-spotify.png'

import {
  BackgrondContainer,
  BackgroundLibery,
  Button,
  ButtonLenguage,
  CookiesStyles,
  FontSize,
  ImageSize,
  LinkStyle,
  TextColor,
} from './styles'

const SideBar: React.FC = () => {
  return (
    <>
      <BackgrondContainer className="p-3 mb-2 mx-2">
        <div>
          <Link to="">
            <ImageSize
              src={logo}
              alt="Logo Spotify"
              className="img-fluid p-3"
            />
          </Link>
        </div>
        <div className="pb-3  px-3">
          <LinkStyle to="">
            <GoHome color="#b3b3b3" size="30px" />
            <TextColor className="px-3">Início</TextColor>
          </LinkStyle>
        </div>
        <div className="pb-3 px-3">
          <LinkStyle to="">
            <IoSearchOutline color="#b3b3b3" size="30px" />
            <TextColor className="p-3">Buscar</TextColor>
          </LinkStyle>
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
            <FontSize className="text-white pt-1 px-3 pb-3">
              É fácil, vamos te ajudar.
            </FontSize>
            <div className="pb-3 px-3">
              <Button type="button">
                <strong>Criar Playlist</strong>
              </Button>
            </div>
          </BackgroundLibery>
          <BackgroundLibery className="d-flex flex-column">
            <h6 className="text-white pt-3 px-3">
              Que tal seguir um podcast novo?
            </h6>
            <FontSize className="text-white pt-1 px-3 pb-3">
              Avisaremos você sobre novos episódios.
            </FontSize>
            <div className="pb-3 px-3">
              <Button type="button">
                <strong>Explore podcasts </strong>
              </Button>
            </div>
          </BackgroundLibery>
          <div className="p-3">
            <CookiesStyles>Cookies</CookiesStyles>
          </div>
          <div className="pb-4 pt-2 px-3">
            <ButtonLenguage type="button">
              <span>
                <FiGlobe color="white" size="18px" />
              </span>
              <span className="px-2">Português do Brasil</span>
            </ButtonLenguage>
          </div>
        </BackgrondContainer>
      </section>
    </>
  )
}

export default memo(SideBar)
