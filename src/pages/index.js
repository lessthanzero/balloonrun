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

import run2016__1 from './run2016__1.jpg'
import run2016__10 from './run2016__10.jpg'
import logo from './logo.png'
import map from './map.png'
import nawinia from './partners/nawinia.png'
import yonko from './partners/yonko.svg'
import takeabite from './partners/takeabite.svg'
import cepsports from './partners/cep-sports.svg'
import sharks from './partners/sharks.svg'
import vkusvill from './partners/vkusvill.svg'
import sadypridonya from './partners/sady-pridonya.png'
import thule from './partners/thule.svg'
import park from './partners/park.svg'
import bestdontrest from './partners/bestdontrest.svg'
import zozhiki from './partners/zozhiki.png'
import thepaperparty from './partners/thepaperparty.png'
import stroidek from './partners/stroidek.png'
import radiovera from './partners/radiovera.svg'

const widgetSrc = '<a href="https://plus-baby-help.timepad.ru/event/790555/" data-twf-placeholder="yes">Перейти к заказу билетов</a><script type="text/javascript" async="async" defer="defer" charset="UTF-8" src="https://timepad.ru/js/tpwf/loader/min/loader.js" data-timepad-customized="16128" data-timepad-widget-v2="event_register">(function(){return {"event":{"id":"790555"},"hidePreloading":true,"initialRoute":"button","buttonSettings":{"text":"Зарегистрироваться"}}; })();</script>';
const widgetSrcShort = '<a href="https://plus-baby-help.timepad.ru/event/790555/" data-twf-placeholder="yes">Принять участие</a><script type="text/javascript" async="async" defer="defer" charset="UTF-8" src="https://timepad.ru/js/tpwf/loader/min/loader.js" data-timepad-customized="16128" data-timepad-widget-v2="event_register">(function(){return {"event":{"id":"790555"},"hidePreloading":true,"initialRoute":"button","buttonSettings":{"text":"Зарегистрироваться"}}; })();</script>';

const IndexPage = () => (
  <Container>

    <Section>
        <Columns id='actions'>
            <Column>
                <div dangerouslySetInnerHTML={{__html: widgetSrcShort}} />
            </Column>
            <Column>
                <Button isSize='large' isOutlined isColor='primary' href='https://bestdontrest.com/' title="Онлайн забег">
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
                        6 октября 2018 года фонд <nobr>«<a href="https://bbhelp.ru/" title="Сайт фонда Плюс Помощь Детям">Плюс Помощь Детям</a>»</nobr> проводит благотворительный забег BALLOON RUN. Вот уже третий раз мы пробежим добрую дистанцию с цветными воздушными шарами! Все средства, полученные от участников забега, будут направлены на помощь маленьким детям с тяжёлыми заболеваниями.
                    </p>
                    <p>
                      В&nbsp;этом году мы&nbsp;решили сделать сразу 4&nbsp;дистанции:
                    </p>
                    <p>
                        <b>2 км</b>
                    </p>
                    <p>
                        <b>10 км</b>
                    </p>
                    <p>
                        <b>2 км для родителей, бегущих с колясками</b>
                    </p>
                    <p>
                        <b>Онлайн–забег</b>, для желающих присоединиться к нам из любого города, любой страны.
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
                    <p>Место проведения: м. Проспект Вернадского, парк имени 50-летия Октября</p>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A69fb7579bb38d414247813f7e3dd3f7b524eab3c8e96ac3d30a0580bc935b5e6&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
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
                                <td>Cтарт забега на 2 км для родителей с колясками</td>
                            </tr>
                            <tr>
                                <td>11:15</td>
                                <td>Старт забега на 10 км</td>
                            </tr>
                            <tr>
                                <td>11:20</td>
                                <td>Старт забега на 2 км</td>
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

    <Section hasTextAlign='center' className='partners'>
        <Title isSize='3' hasTextAlign='left'>Партнёры</Title>
        <Columns>
            <Column>
                <Content>
                    <a href='http://nawinia.com'>
                        <Image src={nawinia} title={'Nawinia Rus'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='http://yonko-co.ru'>
                        <Image src={yonko} title={'Yonko Cosmetics'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='http://takeabite.ru'>
                        <Image src={takeabite} title={'BITE (ООО «БиоФудЛаб»)'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='http://cep-sports.ru'>
                        <Image src={cepsports} title={'Medi Rus'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='http://sharksproject.ru'>
                        <Image src={sharks} title={'Sharks Project'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='http://vkusvill.ru'>
                        <Image src={vkusvill} title={'ВкусВилл'} />
                    </a>
                </Content>
            </Column>
        </Columns>

        <Columns>
           <Column>
                <Content>
                    <a href='http://sadypridonia.ru'>
                        <Image src={sadypridonya} title={'Сады Придонья'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='https://thstore.ru/catalog/kids/thule_urban'>
                        <Image src={thule} title={'Беговые коляски Thule'} />
                    </a>
                </Content>
            </Column>
             <Column>
                <Content>
                    <a href='https://www.google.ru/search?q=%D0%BF%D0%B0%D1%80%D0%BA+50-%D0%BB%D0%B5%D1%82%D0%B8%D1%8F+%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIlNaR9q_dAhVD2SwKHcQaCpwQ_AUICygC&biw=1455&bih=722'>
                        <Image src={park} title={'Парк 50-летия Октября'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='http://bestdontrest.com'>
                        <Image src={bestdontrest} title={'Bestdontrest'} />
                    </a>
                </Content>
            </Column>
        </Columns>

        <Columns>
            <Column>
                <Content>
                    <a href='http://zozhiki.ru'>
                        <Image src={zozhiki} title={'Зожики — здоровые сладости'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='http://thepaperparty.ru'>
                        <Image src={thepaperparty} title={'Декорация детских праздников'} />
                    </a>
                </Content>
            </Column>
             <Column>
                <Content>
                    <a href='https://stroidek.ru'>
                        <Image src={stroidek} title={'Стройдек'} />
                    </a>
                </Content>
            </Column>
            <Column>
                <Content>
                    <a href='https://radiovera.ru'>
                        <Image src={radiovera} title={'Радио Вера'} />
                    </a>
                </Content>
            </Column>
        </Columns>


    </Section>


  </Container>
)

export default IndexPage
