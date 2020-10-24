import React, {Component} from "react";
import Slider from "react-slick";
import "./style/style.css";
//img
import Img1 from "./img/img1.jpg";
import Img2 from "./img/ral1014.jpg";
import Img3 from "./img/ral6005.jpg";
import Img4 from "./img/ral7024.jpg";
import Img5 from "./img/ral8019.jpg";
import Img6 from "./img/ral8017.jpg";
import Img01 from "./img/shtket01.jpg";
import Img02 from "./img/shtaket-a.jpg";
import Img03 from "./img/shtaket-b.jpg";
import Img04 from "./img/shtaket-v.jpg";
import Img05 from "./img/shtaket-g.jpg";
import Img12 from "./img/fences/fence02.jpg";
import Img13 from "./img/fences/fence07-1.jpg";
import Img14 from "./img/fences/fence08-1.jpg";
import Img15 from "./img/fences/fence05-1.jpg";
import Img16 from "./img/fences/fence00-1.jpg";
import Img17 from "./img/fences/fence03-1.jpg";
import Img18 from "./img/fences/fence01-1.jpg";


//стовпці
import Img7 from "./img/jaluzi-stolb1.jpg";
import Img8 from "./img/jaluzi-stolb2.jpg";
import Img9 from "./img/jaluzi-stolb3.jpg";
import Img10 from "./img/jaluzi-stolb4.jpg";
import Img11 from "./img/jaluzi-stolb5.jpg";

export default class AsNavFor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => (
                <div
                    style={{
                        width: "98%",
                        backgroundColor: "white",
                        border: "1px solid black",
                        padding: "10px"
                    }}
                >
                    <ul style={{margin: "0px"}}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    style={{
                        width: "50px",
                        fontSize: "20px",
                        color: "#333",
                    }}
                >
                    {i + 1}
                </div>
            )
        };
        return (
            <div>
                <div className="header_typeOfFence">
                    <h2>Металеві паркани й огорожа у Львові та Львівській області</h2>
                    <h4>Ми виготовляємо якісні огорожі з металу!</h4>
                </div>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}>
                    <div>
                        <div className="fenceHeader text-center fenceHeader fadeInUp">
                            <p className="tree_link hoverHR">Паркан-жалюзі із металевого профіля </p>
                        </div>
                    </div>
                    <div>
                        <div className="fenceHeader_hr text-center fenceHeader fadeInUp">
                            <p className="aluminum_link hoverHR">Металевий штахетник(Євроштахетник)</p>
                        </div>
                    </div>
                    <div>
                        <div className="fenceHeader_hr text-center fenceHeader fadeInUp">
                            <p className="plastic_link hoverHR">Металевий паркан Ранчо</p>
                        </div>
                    </div>
                    <div>
                        <div className="fenceHeader_hr text-center fenceHeader fadeInUp">
                            <p className="french_link hoverHR">Паркан зі зварної сітки</p>
                        </div>
                    </div>
                    <div>
                        <div className="fenceHeader_hr text-center fenceHeader fadeInUp">
                            <p className="rise_link hoverHR">Ворота та хвіртки із металу</p>
                        </div>
                    </div>

                </Slider>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}>
                    {/*Паркан-жалюзі із металевого профіля*/}
                    <div>
                        <div className="col-md-6 no-padding">
                            <div className="glazing_cold">
                                <h3>Паркани "ЖАЛЮЗІ" від Українського виробника</h3>
                                <div className="fenseDescription">
                                    <div className="text_fenseDescription">
                                        <h4>Технічні характеристики</h4>
                                        <p>Паркан "ЖАЛЮЗІ" виготовлений з якісного металевого
                                            профілю, що дозволяє застосовувати його в зонах з підвищеною вологістю,
                                            прибережних зонах. Додаткові ребра жорсткості
                                            змонтовані на секціях дають можливість встановлення паркану висотою понад
                                            2м,
                                            при
                                            цьому жорсткість панелі зберігається. Паркан жалюзі виготовляється з
                                            оцинкованого
                                            металу і забарвлюється полімерним порошковим покриттям або з вже
                                            пофарбованого
                                            оцинкованого металу, що дозволяє нам впевнено надавати гарантію на покриття
                                            10
                                            років.</p>
                                        <p>Переважно огорожа "ЖАЛЮЗІ" використовується для приватних котеджів, де
                                            загальний
                                            екстер'єр території вимагає особливого підходу і дизайнерських рішень. Його
                                            надійна конструкція і неповторний зовнішній вигляд обов'язково задовільнять
                                            найвищі вимоги до огорожі і дозволяють вирішити питання із загальним
                                            зовнішнім
                                            виглядом Вашої ділянки.</p>
                                    </div>
                                    <div className="details_fenseDescription">
                                        <div className="ol_fenseDescription">
                                            <img src={Img1} alt="" className="imgDetails_fenseDescription"/>

                                            <ol>
                                                <li><span className="num">1.</span><b>ЗВАРНИЙ МЕТАЛОКАРКАС</b> -
                                                    у заданий розмір,<br/> з труби профільної 40х20мм (оцинкована).
                                                </li>
                                                <li><span className="num">2.</span><b>ЛАМЕЛІ ПАРКАНУ ЖАЛЮЗІ</b> -
                                                    прокатаний металопрофіль із <br/> завальцюванням в полімерному
                                                    покритті.
                                                </li>
                                                <li><span className="num">3.</span><b>ДОБІРНІ ЕЛЕМЕНТИ</b> -
                                                    комплектуючі секції жалюзі з<br/> оцинкованого листового металу.
                                                </li>
                                                <li><span className="num">4.</span><b>МЕТАЛЕВИЙ СТОВП</b> -
                                                    з оцинкованої профільної <br/> труби 80х60мм.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="colors_and_Сolumns_of_Fence">
                                    <div className="slider_color_of_Fence">
                                        <h2>Найпопулярніші кольори</h2>
                                        <Slider {...settings}>
                                            <div>
                                                <h3>Коричневий шоколад:</h3>
                                                <img src={Img6} alt="" className="color_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Графіт:</h3>
                                                <img src={Img4} alt="" className="color_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Бежевий:</h3>
                                                <img src={Img2} alt="" className="color_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Класичний зелений:</h3>
                                                <img src={Img3} alt="" className="color_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Темно коричневий:</h3>
                                                <img src={Img5} alt="" className="color_of_Fence"/>
                                            </div>

                                        </Slider>
                                    </div>
                                    <div className="slider_color_of_Fence">
                                        <h2>Варіанти стовпців</h2>
                                        <Slider {...settings}>
                                            <div>
                                                <h3>Стовпці з цегли:</h3>
                                                <img src={Img7} alt="" className="columns_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Стовпці з блоків:</h3>
                                                <img src={Img8} alt="" className="columns_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Стовпці з каменю:</h3>
                                                <img src={Img9} alt="" className="columns_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Стовпці з модулів:</h3>
                                                <img src={Img10} alt="" className="columns_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Металеві стовпці:</h3>
                                                <img src={Img11} alt="" className="columns_of_Fence"/>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <button className="button glazing_price_btn text-uppercase popup_calc_btn btn_of_Fence">
                                Дізнатись варість
                            </button>

                        </div>
                    </div>
                    {/*Металевий штахетник(Євроштахетник)*/}
                    <div>
                        <div className="col-md-6 no-padding">
                            <div className="glazing_cold">
                                <h3>Паркани з євроштахета від УКРАЇНСЬКОГО ВИРОБНИКА</h3>
                                <div className="fenseDescription">
                                    <div className="text_fenseDescription metalFenceDescription">
                                        <h4>Технічні характеристики</h4>
                                        <p>Огорожа зі штахетника – це сучасний варіант класичного штахетного паркану з
                                            дерева, що не вимагає додаткових витрат на його догляд на десятки років.
                                            Естетичний вигляд штахетної металевої огорожі доречний всюди.</p>
                                        <p>Ми пропонуємо два варіанти штахетного паркану:
                                            <ul>
                                                <li>Штахет «ПРЕМІУМ»</li>
                                                <li>Штахет «СТАНДАРТ»</li>
                                            </ul>
                                        </p>
                                        <p>Штахет ПРЕМІУМ прокатується з оцинкованого металу виробництва Словаччина
                                            (вміст цинку 140 г/кв.м) товщиною 0,5 мм, після прокату обробляється шляхом
                                            знежирення. Наступним етапом є порошкове фарбування, колір фарбування
                                            будь-який по каталогу RAL. За типом структури поверхні пофарбованого профілю
                                            виділяють 3 види покриття: глянцеве, матове, оксамит/наждак. Товщина
                                            покриття при цьому 80-100 мікрон.</p>
                                        <p>Штахет СТАНДАРТ прокатується з металу виробництва Словаччина — 0,45 мм,
                                            Німеччина — 0,5 мм, Корея 0,4-0,45 мм. Штахет прокатується з уже
                                            пофарбованого металу, має свої різновиди: пофарбований з одного боку
                                            напівмат, пофарбований з двох сторін напівмат, пофарбований з одного боку
                                            матовий (шорсткий), під камінь, цеглу, під дерево. Товщина покриття до 20
                                            мікрон. Покриття подряпати легше, також потрібно пам'ятати, що края
                                            металевої заготовки непрофарбовані і гострі, тому проводити рукою, спиратися
                                            не рекомендується.</p>
                                    </div>
                                    <div className="details_fenseDescription metalDetailsFenceDescription">
                                        <div className="ol_fenseDescription ">
                                            <img src={Img01} alt="" className="imgDetails_fenseDescription"/>
                                            <ol>
                                                <li><span className="num">1.</span><b>ТОНКОЛИСТОВИЙ МЕТАЛ </b> -
                                                    - Ми використовуємо тільки якісний метал закордонного виробництва за
                                                    відмінною ціною.<br/> Мінімальна товщина сталевого листа для
                                                    прокатки штахету становить 0,45 мм.
                                                </li>
                                                <li><span className="num">2.</span><b>ЦИНКОВЕ ПОКРИТТЯ</b> -
                                                    Для захисту від несприятливого впливу навколишнього середовища<br/>
                                                    поверхня металу оцинкована. Вміст цинку різний для різних варіантів
                                                    штахетного профілю.
                                                </li>
                                                <li><span className="num">3.</span><b>ПОЛІМЕРНЕ ПОКРИТТЯ</b> -
                                                    - Даний шар формується методом порошкового фарбування,<br/> що ще
                                                    більше
                                                    поліпшує антикорозійні та удароміцні властивості, в порівнянні з
                                                    іншими видами покриттів.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="colors_and_Сolumns_of_Fence">
                                    <div className="slider_color_of_Fence sliderMetalFence">
                                        <h2 className="sliderMetalFence">Штахетний профіль може бути прокатаний:</h2>
                                        <Slider {...settings}>
                                            <div>
                                                <h3>Стандарт трапеція:</h3>
                                                <img src={Img02} alt="" className="circleBorderFence"/>
                                            </div>
                                            <div>
                                                <h3>Прямокутний:</h3>
                                                <img src={Img03} alt="" className="circleBorderFence"/>
                                            </div>
                                            <div>
                                                <h3>Без жолобів:</h3>
                                                <img src={Img04} alt="" className="circleBorderFence"/>
                                            </div>
                                            <div>
                                                <h3>Напівкруглий:</h3>
                                                <img src={Img05} alt="" className="circleBorderFence"/>
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="slider_color_of_Fence sliderMetalFence">
                                        <h2 className="sliderMetalFence">Варіанти влаштування огорожі з металевих
                                            штахет</h2>
                                        <Slider {...settings}>
                                            <div>
                                                <h3>Арка:</h3>
                                                <img src={Img12} alt="" className="fenceType_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Арка (двостороння):</h3>
                                                <img src={Img13} alt="" className="fenceType_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Айсберг:</h3>
                                                <img src={Img14} alt="" className="fenceType_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Плато:</h3>
                                                <img src={Img15} alt="" className="fenceType_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Класік(односторонній):</h3>
                                                <img src={Img16} alt="" className="fenceType_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>ЗігЗаг:</h3>
                                                <img src={Img17} alt="" className="fenceType_of_Fence"/>
                                            </div>
                                            <div>
                                                <h3>Піраміда:</h3>
                                                <img src={Img18} alt="" className="fenceType_of_Fence"/>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <button className="button glazing_price_btn text-uppercase popup_calc_btn btn_of_Fence">
                                Дізнатись варість
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-6 no-padding">
                            <div className="glazing_cold">
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Розрахувати
                                    вартість
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-6 no-padding">
                            <div className="glazing_warm">
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Розрахувати
                                    вартість
                                </button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="col-md-6 no-padding">
                            <div className="glazing_cold">
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Розрахувати
                                    вартість
                                </button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </Slider>
            </div>
    );
    }
    }