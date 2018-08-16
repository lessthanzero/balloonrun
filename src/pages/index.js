import React from 'react'
import Link from 'gatsby-link'
import { Section, Container, Content, Columns, Column, Button, Image, Title, Media, Table } from 'bloomer'

import run2016__1 from "./run2016__1.jpg";
import run2016__10 from "./run2016__10.jpg";
import logo from "./logo.png";

const IndexPage = () => (
  <Container hasTextAlign="centered">
    

    <Section>
        <Columns>
            <Button isSize='large' isColor='primary' render={
                props => <Column hasTextAlign='centered'><p {...props}>Принять участие</p></Column>
            } />
            <Button isSize='large' isOutlined isColor='primary' render={
                props => <Column hasTextAlign='centered'><p {...props}>Забег онлайн</p></Column>
            } />
            <Button isSize='large' isOutlined isColor='primary' render={
                props => <Column hasTextAlign='centered'><p {...props}>Помогу, но не побегу</p></Column>
            } />
            <Button isSize='large' isOutlined isColor='primary' render={
                props => <Column hasTextAlign='centered'><p {...props}>Хочу стать волонтером</p></Column>
            } />
        </Columns>
    </Section>

    <Section hasTextAlign='left'>
        <Columns>
            <Column isSize='1/2'>
                <Content className='is-size-4'>
                    <p>
                        6 октября 2018 года благотворительный фонд <nobr>«<a href="https://bbhelp.ru/" title="Сайт фонда Плюс Помощь Детям">Плюс Помощь Детям</a>»</nobr> проводит свой третий благотворительный забег Balloon Run в московском парке на Воробьёвых Горах. Вот уже третий раз мы пробежим добрую дистанцию с цветными воздушными шарами, а на финише дружно запустим их в небо! Все средства, полученные от участников забега, будут направлены на помощь маленьким детям с тяжёлыми заболеваниями.
                    </p>
                    <p>
                        В этом году мы решили сделать сразу четыре дистанции:
                    </p>
                    <p>
                        <a href='#'>Два километра</a>
                    </p>
                    <p>
                        <a href='#'>Десять километров</a>
                    </p>
                    <p>
                        <a href='#'>Для родителей, бегущих с колясками</a>
                    </p>
                    <p>
                        <a href='#'>Онлайн–забег</a>, для желающих присоединиться к нам из любого города, любой страны
                    </p>
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Image isSize='730x730' src={logo} />
                </Content>
            </Column>
        </Columns>
    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize='3'>Как это было в 2014 году</Title>
                    <p>
                        Первый BALLOON RUN, который прошёл в Москве в 2014 году, собрал более 300 человек и принёс 143 000 рублей в помощь подопечным фонда.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9CVaAj_EN9Y?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize="3">Как это было в 2016 году</Title>
                    <p>
                        <a href='https://www.facebook.com/events/1683371071879969'>Второй забег</a> BALLOON RUN прошёл в 2016 году, собрал более 250 человек и принёс 186 370 рублей в помощь подопечным фонда.
                    </p>
                    <Image isSize='1200x798' src={run2016__10} />
                    
                </Content>
            </Column>
        </Columns>

    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1'>
                <Content className='is-size-5'>
                    <Title isSize='3'>Как это будет в 2018 году</Title>
                    <p>
                        Новая дистанция для родителей, которые бегают с колясками, онлайн забег из любой точки земного шара, около 500 участников, развлекательные мероприятия для детей во время забега, памятные сувениры и медали для участников.
                    </p>
                    <p> 
                        Для того, чтобы принять участие в забеге BALLOON RUN 2018, необходимо внести регистрационный взнос (регистрацию) – от 500 до 1500 рублей – в зависимости от вашего желания и возможностей.
                    </p>
                    <p>
                        <i>Дети до 7 лет могут принять участие в забеге бесплатно, обязательно напишите нам, если вам ребёнок будет участвовать, мы подготовим для него настоящую медаль участника!</i>
                    </p>
                    <Image isSize='1200x798' src={run2016__1} />
                </Content>
            </Column>
            
        </Columns>

    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize='3'>Маршрут</Title>
                    
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize="3">Программа</Title>
                    <Table isBordered={false} isStriped={false} isNarrow>
                        <thead>
                            <tr>
                                <th>Время</th>
                                <th>Активность</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>09:00–10:30</td>
                                <td>Регистрация участников</td>
                            </tr>
                            <tr>
                                <td>10:45</td>
                                <td>Разминка</td>
                            </tr>
                            <tr>
                                <td>11:00</td>
                                <td>Старт на 2 километра для детей и мам с колясками</td>
                            </tr>
                            <tr>
                                <td>11:30</td>
                                <td>Старт на 8 километров для взрослых участников</td>
                            </tr>
                            <tr>
                                <td>12:30</td>
                                <td>Подведение итогов, награждение призёров</td>
                            </tr>
                            <tr>
                                <td>13:00</td>
                                <td>Торжественный запуск шариков в небо</td>
                            </tr>
                        </tbody>
                    </Table>
                    
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
                        Для участия в забеге необходимо <a href='#'>заполнить анкету</a> и <a href=''>совершить благотворительное дарение</a> на сумму 500, 1000, 1500 рублей.
                    </p>
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize="3">Помощь в качестве волонтёра</Title>
                    <p>
                        Для участия в организации и помощи в забеге, пожалуйста, <a href=''>заполните короткую анкету</a>, и мы свяжемся с вами!
                    </p>
                    
                </Content>
            </Column>
        </Columns>

    </Section>


  </Container>
)

export default IndexPage
