import { memo } from 'react'

import { CiSearch } from 'react-icons/ci'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'

import card1 from 'assets/images/1.jpeg'
import card2 from 'assets/images/10.jpeg'
import card3 from 'assets/images/11.jpeg'
import card4 from 'assets/images/12.jpeg'
import card5 from 'assets/images/13.jpeg'
import card6 from 'assets/images/14.jpeg'
import card7 from 'assets/images/15.jpeg'
import card8 from 'assets/images/2.png'
import card15 from 'assets/images/3.jpeg'
import card10 from 'assets/images/4.jpeg'
import card11 from 'assets/images/5.jpeg'
import card12 from 'assets/images/6.jpeg'
import card13 from 'assets/images/7.jpeg'
import card14 from 'assets/images/8.jpeg'
import card9 from 'assets/images/9.jpeg'

import CardItems from 'components/CardItems'

import {
  Button,
  ContainerContent,
  HeaderNavigation,
  HeaderSearch,
  MainContainer,
  OfferListItem,
  OfferScrollContainer,
  SearchContainer,
  TransparentButton,
} from './styles'

const Main: React.FC = () => {
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
            <OfferScrollContainer>
              <OfferListItem>
                <CardItems image={card1} subtitle="Boas Festas" />
                <CardItems image={card2} subtitle="Boas Festas" />
                <CardItems image={card3} subtitle="Boas Festas" />
                <CardItems image={card4} subtitle="Boas Festas" />
                <CardItems image={card5} subtitle="Boas Festas" />
                <CardItems image={card6} subtitle="Boas Festas" />
                <CardItems image={card7} subtitle="Boas Festas" />
                <CardItems image={card8} subtitle="Boas Festas" />
                <CardItems image={card9} subtitle="Boas Festas" />
                <CardItems image={card10} subtitle="Boas Festas" />
                <CardItems image={card11} subtitle="Boas Festas" />
                <CardItems image={card12} subtitle="Boas Festas" />
                <CardItems image={card13} subtitle="Boas Festas" />
                <CardItems image={card14} subtitle="Boas Festas" />
                <CardItems image={card15} subtitle="Boas Festas" />
              </OfferListItem>
            </OfferScrollContainer>
          </ContainerContent>
        </MainContainer>
      </section>
    </main>
  )
}

export default memo(Main)
