import { memo } from 'react'

import { CiSearch } from 'react-icons/ci'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'
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
  ContainerContent,
  CookiesStyles,
  FixedBar,
  FontSize,
  HeaderNavigation,
  HeaderSearch,
  ImageSize,
  LinkStyle,
  MainContainer,
  NavSection,
  SearchContainer,
  SideBarContainer,
  TextColor,
  TransparentButton,
  UlStyled,
} from './styles'

const SideBar: React.FC = () => {
  return (
    <>
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
            <div className="px-3 mb-3">
              <VscLibrary color="#b3b3b3" size="30px" />
              <TextColor className="p-3">Sua Biblioteca</TextColor>
              <LuPlus color="#b3b3b3" size="20px" />
            </div>
            <BackgroundLibery className="d-flex flex-column mb-4">
              <h6 className="text-white pt-3 px-3">
                Crie sua primeira playlist
              </h6>
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
      <main>
        <MainContainer>
          <HeaderNavigation>
            <div className="d-flex align-items-center">
              <div className="px-3">
                <TransparentButton type="button" className="mx-2">
                  <FaAngleLeft size="20px" color="white" />
                </TransparentButton>
                <TransparentButton type="button">
                  <FaAngleRight size="20px" color="white" />
                </TransparentButton>
              </div>
              <SearchContainer className="d-flex align-items-center">
                <CiSearch size="20px" color="white" />
                <HeaderSearch
                  type="text"
                  maxLength={50}
                  placeholder="O que você quer ouvir?"
                  className="pt-2 pb-2 px-2"
                />
              </SearchContainer>
            </div>
            <div>
              <TransparentButton type="button" className="text-white px-4">
                Inscreva-se
              </TransparentButton>
              <Button type="button">
                <strong className="p-3 pt-3">Entrar</strong>
              </Button>
            </div>
          </HeaderNavigation>
        </MainContainer>
        <section>
          <MainContainer>
            <ContainerContent className="p-3">
              <h4 className="text-white">Navegar por todas as seções</h4>
            </ContainerContent>
          </MainContainer>
        </section>
      </main>
    </>
  )
}

export default memo(SideBar)
