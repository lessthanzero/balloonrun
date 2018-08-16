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
  Title
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

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
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>
        <Title isSize="1">BALLOON RUN 2018</Title>
      </HeroBody>

      <HeroFooter>
        <Container>
          <Tabs isAlign="centered">
            <TabList>
              <Tab>
                <TabLink>Бежать с нами!</TabLink>
              </Tab>
            </TabList>
          </Tabs>
        </Container>
      </HeroFooter>
    </Hero>
    {children()}
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
