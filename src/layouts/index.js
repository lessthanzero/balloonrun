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
    <Helmet title="Balloon Run 2018" />
    <Hero isFullHeight isColor="primary">
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>
        <Title isSize="1">Balloon Run 2018</Title>
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
