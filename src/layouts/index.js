import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import {
  Container,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
  Title,
  Button,
  Columns,
  Column,
  Image,
  Section
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

import hero from '../pages/hero.jpeg'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet={"utf-8"}/>
      <title>BALLOON RUN 2018</title>
      <meta property="description" content="Balloon Run — благотворительный забег на добрую дистанцию. Забег проходит в поддержку фонда «Плюс Помощь Детям», который помогает маленьким детям с тяжелыми заболеваниями в России." />
      <meta property="author" content="Плюс Помощь Детям" />
      <meta property="og:title" content="BALLOON RUN 2018" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://balloonrun.ru" />
    </Helmet>
    <Hero isFullHeight isColor="primary">
      <HeroBody>
        <Section><Columns>
                  <Column isSize='1/2'>
                    <Title isSize="1">BALLOON RUN 2018</Title>
                    <Button isSize='large' isColor='warning' hasTextAlign='left'>Принять участие</Button>
                  </Column>
                  <Column isSize='1/2'>
                    <Image src={hero} className={'hero-illustration'} />
                  </Column>
                </Columns></Section>
      </HeroBody>
    </Hero>
    {children()}
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
