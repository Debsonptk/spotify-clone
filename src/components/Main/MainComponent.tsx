import { memo } from 'react'

import { CiSearch } from 'react-icons/ci'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'

import {
  Button,
  ContainerContent,
  HeaderNavigation,
  HeaderSearch,
  MainContainer,
  SearchContainer,
  TransparentButton,
} from './styles'

const SideBar: React.FC = () => {
  return (
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
  )
}

export default memo(SideBar)
