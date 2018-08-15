import React from 'react'
import Link from 'gatsby-link'
import { Section, Container, Content, Columns, Column, Button, Image, Title } from 'bloomer'

import run2016__10 from "./run2016__10.jpg";

const IndexPage = () => (
  <Container hasTextAlign="centered">
    

    <Columns>
        <Button isColor='info' render={
            props => <Column hasTextAlign='centered'><p {...props}>Принять участие</p></Column>
        } />
        <Button isColor='primary' render={
            props => <Column hasTextAlign='centered'><p {...props}>Забег онлайн</p></Column>
        } />
        <Button isColor='primary' render={
            props => <Column hasTextAlign='centered'><p {...props}>Помогу, но не побегу</p></Column>
        } />
        <Button isColor='primary' render={
            props => <Column hasTextAlign='centered'><p {...props}>Хочу стать волонтером</p></Column>
        } />
    </Columns>

    <Section hasTextAlign='left'>
        <Content>
            <p>
                6 октября 2018 года благотворительный фонд «Плюс Помощь Детям» проводит свой третий благотворительный забег Balloon Run в московском парке на Воробьёвых Горах. Вот уже третий раз мы пробежим добрую дистанцию с цветными воздушными шарами, а на финише дружно запустим их в небо! Все средства, полученные от участников забега, будут направлены на помощь маленьким детям с тяжёлыми заболеваниями.
            </p>
        </Content>
    </Section>

    <Section hasTextAlign='left'>
        
        <p>
            В этом году мы решили сделать сразу 4 дистанции:
        </p>

        <ol>
            <li>2 км (перейти к регистрации)</li>
            <li>10 км (перейти к регистрации)</li>
            <li>для родителей, бегущих с колясками (можно будет нажать на дистанцию и сразу перейти к регистрации)</li>
            <li>онлайн–забег, для желающих присоединиться к нам из любого города, любой страны (https://bestdontrest.com, сразу на страницу с регистрацией)</li>
        </ol>

    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize='3'>Как это было в 2014 году</Title>
                    <p>
                        Первый Balloon Run, который прошёл в Москве в 2014 году, собрал более 300 человек и принёс 143 000 рублей в помощь подопечным фонда.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9CVaAj_EN9Y?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize="3">Как это было в 2016 году</Title>
                    <p>
                        Второй забег Balloon Run прошёл в 2016 году, собрал более 250 человек и принёс 186 370 рублей в помощь подопечным фонда.
                    </p>
                    <Image isSize='1200x798' src={run2016__10} />
                    
                </Content>
            </Column>
        </Columns>

    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1'>
                <Content>
                    <Title isSize='3'>Как это будет в 2018 году</Title>
                    <p>
                        Новая дистанция для родителей, которые бегают с колясками, онлайн забег из любой точки земного шара, около 500 участников, развлекательные мероприятия для детей во время забега, памятные сувениры и медали для участников.

                    </p>
                    <p> 
                        Для того, чтобы принять участие в забеге Balloon Run 2018, необходимо внести регистрационный взнос (регистрацию) – от 500 до 1500 рублей – в зависимости от вашего желания и возможностей.
                    </p>
                    <p>
                        <i>Дети до 7 лет могут принять участие в забеге бесплатно, обязательно напишите нам, если вам ребёнок будет участвовать, мы подготовим для него настоящую медаль участника!</i>
                    </p>
                </Content>
            </Column>
            
        </Columns>

    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize='3'>Маршрут</Title>
                    <p>
                        Первый Balloon Run, который прошёл в Москве в 2014 году, собрал более 300 человек и принёс 143 000 рублей в помощь подопечным фонда.
                    </p>
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize="3">Программа</Title>
                    <p>
                        Второй забег Balloon Run прошёл в 2016 году, собрал более 250 человек и принёс 186 370 рублей в помощь подопечным фонда.
                    </p>
                    
                </Content>
            </Column>
        </Columns>

    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize='3'>Принять участие</Title>
                    <p>
                        Для участия в забеге необходимо заполнить анкету и совершить благотворительное дарение на сумму 500, 1000, 1500 рублей.
                    </p>
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize="3">Помощь в качестве волонтёра</Title>
                    <p>
                        Для участия в организации и помощи в забеге, пожалуйста, заполните короткую анкету, и мы свяжемся с вами!
                    </p>
                    
                </Content>
            </Column>
        </Columns>

    </Section>


  </Container>
)

export default IndexPage
