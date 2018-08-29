import React from 'react'
import Link from 'gatsby-link'
import ResponsiveEmbed from 'react-responsive-embed'
import { 
    Section, 
    Container, 
    Content, 
    Columns, 
    Column, 
    Button, 
    Image, 
    Title, 
    Media, 
    Table,
    Modal
} from 'bloomer'

import run2016__1 from "./run2016__1.jpg"
import run2016__10 from "./run2016__10.jpg"
import logo from "./logo.png"
import map from "./map.png"

const widgetSrc = '<a href="https://plus-baby-help.timepad.ru/event/790555/" data-twf-placeholder="yes">Перейти к заказу билетов</a><script type="text/javascript" async="async" defer="defer" charset="UTF-8" src="https://timepad.ru/js/tpwf/loader/min/loader.js" data-timepad-customized="16128" data-timepad-widget-v2="event_register">(function(){return {"event":{"id":"790555"},"hidePreloading":true,"initialRoute":"button","buttonSettings":{"text":"Зарегистрироваться"}}; })();</script>';

const IndexPage = () => (
  <Container>
    
    <Section>
        <Columns id='actions'>
            <Column>
                <Button isSize='large' isColor='primary' href='https://plus-baby-help.timepad.ru/event/790555/' title='Принять участие в забеге'>
                    Принять участие
                </Button>
            </Column>
            <Column>
                <Button isSize='large' isOutlined isColor='primary'>
                    Забег онлайн
                </Button>
            </Column>
            <Column>
                <Button isSize='large' isOutlined isColor='primary' href='https://bbhelp.ru/pay/cloudpayments/' title='Принять участие в забеге'>
                    Помогу, но не побегу
                </Button>
            </Column>
            <Column>
                <Button isSize='large' isOutlined isColor='primary' href='https://goo.gl/forms/ZJXd10LJkxOWkazX2' title='Анкета для волонтеров'>
                    Хочу стать волонтером
                </Button>
            </Column>
        </Columns>
    </Section>

    <Section hasTextAlign='left'>
        <Columns>
            <Column isSize='1/2'>
                <Content className='is-size-5'>
                    <p>
                        6 октября 2018 года фонд <nobr>«<a href="https://bbhelp.ru/" title="Сайт фонда Плюс Помощь Детям">Плюс Помощь Детям</a>»</nobr> проводит благотворительный забег BALLOON RUN. Вот уже третий раз мы пробежим добрую дистанцию с цветными воздушными шарами, а на финише дружно запустим их в небо! Все средства, полученные от участников забега, будут направлены на помощь маленьким детям с тяжёлыми заболеваниями.
                    </p>
                    <p>
                        В этом году мы решили сделать сразу четыре дистанции:
                    </p>
                    <p>
                        <a href='https://plus-baby-help.timepad.ru/event/790555/' title='Принять участие в забеге'>Два километра</a>
                    </p>
                    <p>
                        <a href='https://plus-baby-help.timepad.ru/event/790555/' title='Принять участие в забеге'>Десять километров</a>
                    </p>
                    <p>
                        <a href='https://plus-baby-help.timepad.ru/event/790555/' title='Принять участие в забеге'>Для родителей, бегущих с колясками</a>
                    </p>
                    <p>
                        <a href='#'>Онлайн–забег</a>, для желающих присоединиться к нам из любого города, любой страны
                    </p>
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Image isSize='640x640' src={logo} />
                </Content>
            </Column>
        </Columns>
    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1/2'>
                <Content className={'video'}>
                    <Title isSize='3'>Как это было в 2014 году</Title>
                    <p>
                        Первый BALLOON RUN, который прошёл в Москве в 2014 году, собрал более 300 человек и принёс 143 000 рублей в помощь подопечным фонда.
                    </p>
                    <ResponsiveEmbed ratio='3:2' src="https://www.youtube.com/embed/9CVaAj_EN9Y?rel=0&amp;controls=0&amp;showinfo=0" />
                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize="3">Как это было в 2016 году</Title>
                    <p>
                        <a href='https://www.facebook.com/pg/fondbabyhelp/photos/?tab=album&album_id=393268834155403'>Второй забег</a> BALLOON RUN прошёл в 2016 году, собрал более 250 человек и принёс 186 370 рублей в помощь подопечным фонда.
                    </p>
                    <Image isSize='1200x798' src={run2016__10} />
                    
                </Content>
            </Column>
        </Columns>

    </Section>

    <Section hasTextAlign='left'>
        
        <Title isSize='3'>Как это будет в 2018 году</Title>

        <Columns>
            <Column isSize='1/2'>
                <Content className='is-size-5'>
                    <p>
                        Мы проверили и убедились, что бегать с воздушном шариком в руке не только веселее, но и значительно легче. Проверьте и вы 6 октября!
                    </p>
                    <p>
                        — Новая дистанция для родителей, которые бегают с колясками
                    </p>
                    <p>
                        — Онлайн забег из любой точки земного шара
                    </p>
                    <p>
                        — Развлекательные мероприятия для детей во время забега
                    </p>
                    <p>
                        — Памятные сувениры и медали для участников
                    </p>
                </Content>
            </Column>
            <Column>
                <Content>
                    <p> 
                        Для того, чтобы принять участие в забеге BALLOON RUN 2018, необходимо <a href='https://plus-baby-help.timepad.ru/event/790555/' title='Принять участие в забеге'>внести регистрационный взнос</a> — от 500 до 1500 рублей — в зависимости от вашего желания и возможностей.
                    </p>
                    <p>
                        <i>Дети до 7 лет могут принять участие в забеге бесплатно, обязательно напишите нам, если ваш ребёнок будет участвовать, мы подготовим для него настоящую медаль участника!</i>
                    </p>
                </Content>
            </Column>
        </Columns>
        <Image isSize='1200x798' src={run2016__1} />

    </Section>

    <Section hasTextAlign='left'>
        
        <Columns>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize='3'>Маршрут</Title>
                    <p>Место сбора: Парк Фили, вход со стороны улиц Барклая, сбор у малой сцены:</p>
                    <iframe src="https://yandex.ru/map-widget/v1/-/CBBEAJactD" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>
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
                                <td>09:30–10:45</td>
                                <td>Сбор и регистрация участников</td>
                            </tr>
                            <tr>
                                <td>10:45</td>
                                <td>Разминка</td>
                            </tr>
                            <tr>
                                <td>11:00</td>
                                <td>Старт забега на 10 километров</td>
                            </tr>
                            <tr>
                                <td>11:10</td>
                                <td>Старт забега на 2 километра</td>
                            </tr>
                            <tr>
                                <td>12:30</td>
                                <td>Сбор гостей для подведения итогов</td>
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
                        Для участия в забеге необходимо заполнить анкету и <a href='https://plus-baby-help.timepad.ru/event/790555/' title='Принять участие в забеге'>совершить благотворительное дарение</a> на сумму 500, 1000, 1500 рублей.
                    </p>
                    <div dangerouslySetInnerHTML={{__html: widgetSrc}} />

                </Content>
            </Column>
            <Column isSize='1/2'>
                <Content>
                    <Title isSize="3">Помощь в качестве волонтёра</Title>
                    <p>
                        Для участия в организации и помощи в забеге, пожалуйста, <a href='https://goo.gl/forms/ZJXd10LJkxOWkazX2' title='Анкета для волонтеров'>заполните короткую анкету</a>, и мы свяжемся с вами!
                    </p>
                    
                </Content>
            </Column>
        </Columns>

    </Section>


  </Container>
)

export default IndexPage
