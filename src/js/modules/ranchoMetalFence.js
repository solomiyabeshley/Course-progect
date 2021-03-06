import React, {Component} from "react";
import "../style/style.css";
import ImgRancho from "../img/rancho_1.jpg";
import Img001 from "../img/zabor-rancho-kombinirovanie.jpg";
import Img12 from "../img/close.png";

export default class RanchoFence extends Component {
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
        return (
            <div>
                <div className="col-md-6 no-padding">
                    <div className="glazing_cold">
                        <h3>Металевий паркан "РАНЧО"</h3>
                        <div className="fenseDescription RanchoFence">
                            <div className="text_fenseDescription rancho_text_fenseDescription">
                                <h4>Технічні характеристики</h4>
                                <p>Даний вид огорожі неймовірно популярний за кордоном і починає набирати величезну
                                    популярність на нашому ринку. Ідея паркану Ранчо не нова, вона з’явилася кілька
                                    століть назад в Америці, тоді як матеріал для виготовлення використовували дерево.
                                    Ми адаптували паркан у стилі ранчо до нинішніх реалій і тенденцій — виробляємо з
                                    металу, використовуючи передові покриття.</p>
                                <p>Конструкція секції Ранчо являє собою горизонтальні металеві ламелі, прямокутного
                                    перетину. Максимальну відстань між металевими горизонтальними планками/ламелями
                                    радимо вибирати 50 мм, а мінімальну — 20 мм. Хоча індивідуальне замовлення дозволить
                                    самостійно вибрати найбільш комфортну відстань між ламелями горизонтального паркану
                                    ранчо й ширину ламелей.</p>
                                <p>У разі вибору мінімальної відстані між ламелями ранчо, паркан із деякої відстані буде
                                    виглядати глухим; насправді ж паркан ранчо, незалежно від відстані між ламелями буде
                                    провітрюваним і пропускатиме світло.</p>
                                <p>Існує безліч варіантів виконання огорожі «ранчо». Дуже цікаво виглядає паркан ранчо в
                                    комбінованому виконанні. Наприклад, певна послідовність по-різному пофарбованих
                                    ламелей або ж поєднання одноколірних ламелей із ламелями, у яких покриття «під
                                    дерево», підкреслять архітектуру, ландшафт Вашої ділянки або ж додадуть
                                    автентичності, індивідуальності.</p>
                                <p>Даний паркан Ранчо може бути застосований для огорожі різних територій, таких як:
                                    <ul>
                                        <li>будинки в певному стилі;</li>
                                        <li>дачні ділянки, заміські будинки, котеджні містечка;</li>
                                        <li>благоустрій та оснащення парків, літніх кафе, місць для відпочинку, дитячих
                                            майданчиків і дворів;
                                        </li>
                                        <li>заміських туристичних комплексів та інших громадських місць, як у межах
                                            міста, так і
                                            поза ним;
                                        </li>
                                        <li>мальовниче оформлення ділянки;</li>
                                        <li>зоновий поділ ділянок.</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="details_fenseDescription ">
                                <div className="ol_fenseDescription rancho_fenseDescription">
                                    <ul>
                                        <img src={ImgRancho} alt=""
                                             className="imgDetails_fenseDescription"/>
                                        {/*<hr/>*/}
                                        <h4>Ми виготовляємо огорожу Ранчо:</h4>

                                        <li>в однотонному виконанні, варіантів яких сотні. Колір горизонтальних
                                            металевих ламелей може повторювати колір покрівлі, вікон, фасаду будівлі,
                                            декоративних елементів, елементів ландшафтного дизайну або, навпаки,
                                            контрастувати з ними;
                                        </li>
                                        <li>у покритті, яке точно імітує текстуру різних порід деревини. На поверхні
                                            металевих ламелей, як ніби міріади волокон утворюють характерний візерунок,
                                            властивий певній породі деревини: світлої, темної.
                                        </li>
                                        <h4>Покриття забору ранчо вибирається з таких варіацій:</h4>
                                        <li>Паркан «Ранчо» Стандарт - покриття поліестер.</li>
                                        <li>Паркан «Ранчо» Преміум — порошкове фарбування в обраному кольорі з каталогу
                                            RAL.
                                        </li>
                                        <h4>Основні переваги паркану "РАНЧО"</h4>
                                        <li>Надійність, міцність, довговічність. Ламелі паркану виконані з оцинкованого
                                            металу, товщина якого 0,45 мм. Профіль ламелі має замкове з’єднання, що
                                            робить конструкцію огорожі «Ранчо» міцнішою. Такий паркан прослужить Вам
                                            довгі роки.
                                        </li>
                                        <li>Огорожу Ранчо з усіма його елементами виготовлено з якісної металевої
                                            сировини, завдяки чому не потрібний регулярний і постійний догляд, а також
                                            протягом довгих років огорожа не буде втрачати свій первісний, товарний
                                            вигляд.
                                        </li>
                                        <li>Антикорозійна стійкість. Досягається завдяки використовуваному оцинкованому
                                            металу й сучасному полімерному покриттю.
                                        </li>
                                        <li>За рахунок своєї конструкції огорожа Ранчо з металу має відмінну функцію
                                            природної провітрюваності.
                                        </li>
                                        <li>Відбувається безперешкодне потрапляння світла сонячних променів на ділянку,
                                            завдяки розташуванню ламелей.
                                        </li>
                                        <li>Виробництво секцій за Вашими індивідуальними параметрами, які Ви озвучите, а
                                            ми втілимо в предметне існування;
                                        </li>
                                        <li>Простота установки, немає необхідності застосування спеціального
                                            устаткування, є можливість самостійного монтажу, при бажанні.
                                        </li>
                                        <li>Велика кольорова палітра згідно каталогу RAL або покриття, що імітує
                                            текстуру дерева, дозволять Вам втілити різноманітні рішення.
                                        </li>
                                        <li>Імітація дерев’яної дошки, яка виходить завдяки особливої геометрії кожної
                                            ламелі, надає огорожі неповторного зовнішнього вигляду ковбойського ранчо.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="combiRancho">
                            <img src={Img001} alt=""/>
                        </div>
                    </div>
                    <div>
                        <button onClick={this.openModal} className="button btn_of_Fence">Дізнатись варість</button>
                        <ModalRanchoBlinds isOpen={this.state.isModalOpen} onClose={this.closeModal}/>
                    </div>
                </div>
            </div>
        );
    }
}
class ModalRanchoBlinds extends React.Component {
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
