import { memo } from 'react'

import { CiSearch } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import {
  FaAngleRight,
  FaAngleLeft,
  FaXTwitter,
  FaFacebook,
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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
import { SpanColor } from 'components/CardItems/styles'

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

const cardsArray = [
  { id: 1, image: card1, title: 'Boas festas', color: 'rgb(0, 100, 80)' },
  { id: 2, image: card2, title: 'Feitos para você', color: 'rgb(132, 0, 231)' },
  { id: 3, image: card3, title: 'Lançamentos', color: 'rgb(30, 50, 100)' },
  { id: 4, image: card4, title: 'Creators', color: 'rgb(140, 25, 50)' },
  { id: 5, image: card5, title: 'Para treinar', color: 'rgb(232, 17, 91)' },
  { id: 6, image: card6, title: 'Podcasts', color: 'rgb(83, 122, 161)' },
  { id: 7, image: card7, title: 'Sertanejo', color: 'rgb(142, 102, 172)' },
  { id: 8, image: card8, title: 'Samba e pagode', color: 'rgb(20, 138, 8)' },
  { id: 9, image: card9, title: 'Funk', color: 'rgb(30, 50, 100)' },
  { id: 10, image: card10, title: 'MPB', color: 'rgb(233, 20, 41)' },
  { id: 11, image: card11, title: 'Rock', color: 'rgb(80, 55, 80)' },
  { id: 12, image: card12, title: 'Hip Hop', color: 'rgb(216, 64, 0)' },
  { id: 13, image: card13, title: 'Indie', color: 'rgb(186, 93, 7)' },
  { id: 14, image: card14, title: 'Relax', color: 'rgb(60, 30, 80)' },
  { id: 15, image: card15, title: 'Música Latina', color: 'rgb(0, 30, 80)' },
]

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
            <h4 className="text-white px-4">Navegar por todas as seções</h4>
            <OfferScrollContainer>
              <OfferListItem className="g-1">
                {cardsArray.map((card) => (
                  <CardItems
                    key={card.id}
                    image={card.image}
                    subtitle={card.title}
                    backgroundColor={card.color}
                  />
                ))}
              </OfferListItem>
            </OfferScrollContainer>
            <div className="d-flex pt-5 px-4 justify-content-between border-bottom">
              <div>
                <h6 className="text-white">Empresa</h6>
                <div>
                  <SpanColor>Sobre</SpanColor>
                </div>
                <div>
                  <SpanColor>Empregos</SpanColor>
                </div>
                <div>
                  <SpanColor>For the Record</SpanColor>
                </div>
              </div>
              <div className="pb-5">
                <h6 className="text-white">Comunidades</h6>
                <div>
                  <SpanColor>Para Artistas</SpanColor>
                </div>
                <div>
                  <SpanColor>Desenvolvedores</SpanColor>
                </div>
                <div>
                  <SpanColor>Publicidade</SpanColor>
                </div>
                <div>
                  <SpanColor>Investidores</SpanColor>
                </div>
                <div>
                  <SpanColor>Fornecedores</SpanColor>
                </div>
              </div>
              <div>
                <h6 className="text-white">Links úteis</h6>
                <div>
                  <SpanColor>Suporte</SpanColor>
                </div>
                <div>
                  <SpanColor>Aplicativo móvel grátis</SpanColor>
                </div>
              </div>
              <div className="px-5">
                <Link
                  to="https://www.instagram.com/spotify/"
                  target="_blank"
                  className="px-1"
                >
                  <FaInstagram size="25px" color="white" />
                </Link>
                <Link
                  to="https://twitter.com/spotify"
                  target="_blank"
                  className="px-3"
                >
                  <FaXTwitter size="25px" color="white" />
                </Link>
                <Link to="https://www.facebook.com/Spotify" target="_blank">
                  <FaFacebook size="25px" color="white" />
                </Link>
              </div>
            </div>
            <div className="pt-5 pb-5 px-3">
              <SpanColor>© 2024 Spotify AB</SpanColor>
            </div>
          </ContainerContent>
        </MainContainer>
      </section>
    </main>
  )
}

export default memo(Main)
