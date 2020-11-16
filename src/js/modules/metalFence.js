import React, {Component} from "react";
import Slider from "react-slick";
import "../style/style.css";
import Img01 from "../img/shtket01.jpg";
import Img02 from "../img/shtaket-a.jpg";
import Img03 from "../img/shtaket-b.jpg";
import Img04 from "../img/shtaket-v.jpg";
import Img05 from "../img/shtaket-g.jpg";
import Img12 from "../img/fences/fence02.jpg";
import Img13 from "../img/fences/fence07-1.jpg";
import Img14 from "../img/fences/fence08-1.jpg";
import Img15 from "../img/fences/fence05-1.jpg";
import Img16 from "../img/fences/fence00-1.jpg";
import Img17 from "../img/fences/fence03-1.jpg";
import Img18 from "../img/fences/fence01-1.jpg";
import Img19 from "../img/close.png";

export default class MetalFence extends Component {
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
                   <div>
                       <button onClick={this.openModal} className="button btn_of_Fence">Дізнатись варість</button>
                       <ModalMetalFence isOpen={this.state.isModalOpen} onClose={this.closeModal}/>
                   </div>
                   </div>
               </div>
        )
    }
}
class ModalMetalFence extends React.Component {
    render() {
        const {isOpen, onClose} = this.props;
        return (
            <div className="modalCalculatingWindow">
                <div className={isOpen ? 'modal modal--is-open modal__content' : 'modal'}>
                    <div onClick={onClose} className=""><img src={Img19} className="iconCloseStyle" alt="#"/></div>
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
                                        Тип штахетного профіля:</label>
                                    <select id="fencingBlindsColor-dropdown" name="dropdown" className=" form_input selectOptionStl form-control">
                                        <option value="chocolate">Стандарт трапеція</option>
                                        <option value="beige">Прямокутний</option>
                                        <option value="classicGreen">Без жолобіл</option>
                                        <option value="darkBrown">Напівкруглий</option>
                                    </select>
                                </div>
                                <div className="dropdownChooseColumn">
                                    <label className="badge">
                                        Варіанти влаштування огорожі:</label>
                                    <select id="fencingBlindsColor-dropdown" name="dropdown" className=" form_input selectOptionStl form-control">
                                        <option value="brickcolumns">Арка</option>
                                        <option value="brickcolumns">Арка(двостороння)</option>
                                        <option value="blocksColumn">Плато</option>
                                        <option value="modulesColumns">Айсберг</option>
                                        <option value="metalColumns">Класік(односторонній)</option>
                                        <option value="metalColumns">ЗігЗаг</option>
                                        <option value="metalColumns">Піраміда</option>
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