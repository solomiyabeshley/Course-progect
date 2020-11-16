import React, {Component} from "react";
import Slider from "react-slick";
import "../style/style.css";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/ral1014.jpg";
import Img3 from "../img/ral6005.jpg";
import Img4 from "../img/ral7024.jpg";
import Img5 from "../img/ral8019.jpg";
import Img6 from "../img/ral8017.jpg";
import Img7 from "../img/jaluzi-stolb1.jpg";
import Img8 from "../img/jaluzi-stolb2.jpg";
import Img9 from "../img/jaluzi-stolb3.jpg";
import Img10 from "../img/jaluzi-stolb4.jpg";
import Img11 from "../img/jaluzi-stolb5.jpg";
import Img12 from "../img/close.png";


export default class FencingBlinds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({isModalOpen: true})
    }

    closeModal() {
        this.setState({isModalOpen: false})
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
                    <div>
                        <button onClick={this.openModal} className="button btn_of_Fence">Дізнатись варість</button>
                        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}/>
                    </div>
                </div>
            </div>
        );
    }
}
class Modal extends React.Component {
    render() {
        const {isOpen, onClose} = this.props;
        return (
            <div className="modalCalculatingWindow">
                <div className={isOpen ? 'modal modal--is-open modal__content' : 'modal'}>
                    <div onClick={onClose} className=""><img src={Img12} className="iconCloseStyle" alt="#"/></div>
                    <form className="formForCalc">
                        <h2>Розрахувати вартість:</h2>
                        <div className="dropDownMenu">
                            <div className="form-group">
                                <p className="badge badge-warning">
                                    Ширина(см):</p>
                                <input type="text" name="width" className="form-control form_input" id="width"
                                       placeholder="1000" required="Заповніть це поле"/>
                            </div>
                            <div className="form-group">
                                <p className="badge badge-warning">
                                    Висота(см):</p>
                                <input type="text" name="height" id="height" className="form-control form_input" placeholder="200"
                                       required="Заповніть це поле"/>
                            </div>
                        <div className="form-group">
                            <p className="badge badge-warning">
                                Кількість стовпців:</p>
                            <input type="text" name="columnsCount" className="form-control form_input" id="columnsCount"
                                   placeholder="2" required="Заповніть це поле"/>
                        </div>
                        </div>
                        <div>
                            <div className="dropDownMenu">
                            <div className="dropdownChooseColor">
                                    <label className="badge">
                                        Виберіть колір:</label>
                                    <select id="fencingBlindsColor-dropdown" name="dropdown" className=" form_input selectOptionStl form-control">
                                        <option value="chocolate">Коричневий шоколад</option>
                                        <option value="beige">Бежевий</option>
                                        <option value="classicGreen">Класичний зелений</option>
                                        <option value="darkBrown">Темно коричневий</option>
                                    </select>
                            </div>
                            <div className="dropdownChooseColumn">
                                    <label className="badge">
                                        Виберіть тип стовпця:</label>
                                    <select id="fencingBlindsColor-dropdown" name="dropdown" className=" form_input selectOptionStl form-control">
                                        <option value="brickcolumns">Стовпці з цегли</option>
                                        <option value="blocksColumn">Стовпці з блоків</option>
                                        <option value="modulesColumns">Стовпці з модулів</option>
                                        <option value="metalColumns">Металеві стовпці</option>
                                    </select>
                            </div>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-md-2 col-12">
                                    <input type="button" name="adress" id="btn"
                                           className="btn-block btn btn-primary mainPageBtn"
                                           value="Розрахувати"/>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
    );
    }
    }

