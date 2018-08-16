import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon, Section } from 'bloomer'

const AppFooter = () => (
  <Footer id="footer" className={"has-background-white"}>
    <Container>
      <Section>
          <Columns>
            <Column isHalf>
              <p className={"has-text-left"}>
                Фонд «<a href="https://bbhelp.ru/" title="Сайт фонда Плюс Помощь Детям">Плюс Помощь Детям</a>»
              </p>
            </Column>
            <Column isHalf>
              <p className={"has-text-right"}>
                BALLOON RUN 2018 🏃🎈🌲🌳
              </p>
            </Column>
          </Columns>
      </Section>
    </Container>
  </Footer>
)

export default AppFooter
