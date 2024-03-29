import { memo } from 'react'

import { FiGlobe } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { LuPlus } from 'react-icons/lu'
import { VscLibrary } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

import logo from 'assets/logo/logo-spotify.png'

import {
  BackgroundLibery,
  Button,
  ButtonLenguage,
  CookiesStyles,
  FixedBar,
  FontSize,
  ImageSize,
  LinkStyle,
  NavSection,
  SideBarContainer,
  TextColor,
  UlStyled,
} from './styles'

const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <FixedBar>
        <NavSection className="p-2">
          <Link to="">
            <ImageSize
              src={logo}
              alt="Logo Spotify"
              className="img-fluid p-3"
            />
          </Link>
          <UlStyled className="px-3">
            <li className="pb-3">
              <LinkStyle to="">
                <GoHome color="#b3b3b3" size="30px" />
                <TextColor className="px-3">Início</TextColor>
              </LinkStyle>
            </li>
            <li>
              <LinkStyle to="">
                <IoSearchOutline color="#b3b3b3" size="30px" />
                <TextColor className="px-3">Buscar</TextColor>
              </LinkStyle>
            </li>
          </UlStyled>
        </NavSection>
        <NavSection className="mt-2 pt-3 px-3 pb-3">
          <div className="px-3 mb-3 d-flex justify-content-between">
            <div>
              <VscLibrary color="#b3b3b3" size="30px" />
            </div>
            <div>
              <TextColor className="p-3">Sua Biblioteca</TextColor>
            </div>
            <div>
              <LuPlus color="#b3b3b3" size="20px" />
            </div>
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
              <span className="px-2 pt-3">Português do Brasil</span>
            </ButtonLenguage>
          </div>
        </NavSection>
      </FixedBar>
    </SideBarContainer>
  )
}

export default memo(SideBar)
