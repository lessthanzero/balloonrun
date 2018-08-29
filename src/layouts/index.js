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
  Section,
  Content
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

import hero from '../pages/hero-2.jpg'

const googleAnalytics = "<!-- Global site tag (gtag.js) - Google Analytics --><script async src='https://www.googletagmanager.com/gtag/js?id=UA-124353721-1'></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-124353721-1');</script>";

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
      <meta property="og:image" content="../pages/facebook.png" />
    </Helmet>
    <div dangerouslySetInnerHTML={{__html: googleAnalytics}} />
    <Hero isFullHeight isColor="primary">
      <HeroBody>
        <Section>
          <Columns>
            <Column isSize='1/2'>
              <Title isSize='2'>BALLOON RUN 2018</Title>
              <Content>
                <p className={'is-size-4'}>
                  Примите участие в самом воздушном забеге этой осени.
                  6 октября 2018 года ждём вас на BALLOON RUN, в поддержку фонда «Плюс Помощь Детям».
                </p>
              </Content>
              <Button isSize='large' isColor='warning' hasTextAlign='left' href='#actions'>Узнать больше</Button>
            </Column>
            <Column isSize='1/2'>
              <Image src={hero} className={'hero-illustration'} />
            </Column>
          </Columns>
        </Section>
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
