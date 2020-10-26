import React, {Component} from "react";
import "./style/style.css";
import ImgTemporary_1 from "./img/temporary_1.jpg";
import ImgTemporary_2 from "./img/temporary_2.jpg";
import ImgTemporary_3 from "./img/temporary_3.jpg";


export default class TemporaryFencing extends Component {
    render() {
        let temporaryFenseDescription = document.getElementsByClassName("temporary_fenseDescription")[0];
        function addStyle() {
            temporaryFenseDescription.classList.add("temporary_style");
        }

        return (
            <div>
                <div className="col-md-6 no-padding">
                    <div className="glazing_cold">
                        <h3>Тимчасова огорожа з металу</h3>
                        <div className="fenseDescription temporaryFenceDescription">
                            <div className="text_fenseDescription temporaryFencingDescription">
                                <h4>Технічні характеристики</h4>
                                <p>Тимчасова огорожа – це надійний бар'єр для забезпечення тимчасового обмеження доступу
                                    людей до небезпечних і закритих для відвідування об'єктів або ділянок землі.
                                    Мобільність і простота збірки тимчасового огородження дає
                                    можливість без особливих трудовитрат виконувати установку незалежно від рельєфу
                                    місцевості і протяжності об'єкта. Конструкція розроблена з розрахунком
                                    багаторазового використання на різних об'єктах і являє собою сітчасту панель в
                                    металевій зварній рамі та кріпильні елементи.</p>
                                <h3>Основні переваги тимчасової огорожі</h3>
                                <ul>
                                    <li>довговічність і корозійна стійкість, що гарантує фінішне покриття з гарячого
                                        цинку;
                                    </li>
                                    <li>міцність і стійкість конструкції — рама огорожі виконана з профільної труби,
                                        заповнення зі зварної сітки;
                                    </li>
                                    <li>простота монтажу — збірно-розбірна конструкція дозволяє в найкоротші терміни
                                        виконати установку;
                                    </li>
                                    <li>мобільність — мобільна огорожа не потребує прив'язки до місцевості, можливе
                                        переміщення по об'єкту при необхідності без додаткових витрат;
                                    </li>
                                    <li>можливість випуску конструкцій тимчасового огородження різних модифікацій за
                                        кресленнями замовника;
                                    </li>
                                    <li>не вимагає догляду, утримання і обслуговування в процесі експлуатації;</li>
                                    <li>естетичний зовнішній вигляд і прозорість (проглядність) огороджуваної
                                        території.
                                    </li>
                                </ul>
                            </div>
                            <div className="details_fenseDescription">
                                <div className="ol_fenseDescription temporary_fenseDescription">
                                    <ul>
                                        <div className="temporaryImg" onMouseOver={addStyle}>
                                            <img src={ImgTemporary_1} alt="" className="imgDetails_fenseDescription"/>
                                            <img src={ImgTemporary_2} alt="" className="imgDetails_fenseDescription"/>
                                            <img src={ImgTemporary_3} alt="" className="imgDetails_fenseDescription"/>
                                        </div>
                                        <li><b>Мобільну огорожу</b> виготовляють в гарячому цинку,
                                            завдяки чому термін служби даного виду огорожі становить більш ніж 50 років
                                            і гарантує надійний захист від корозії при гірших умовах експлуатації і
                                            атмосферних впливів.
                                        </li>
                                        <li><b>Переносну огорожу</b> найчастіше застосовують при проведенні масових
                                            заходів для
                                            позначення периметра зони, що охороняється, або обмеження проходу/проїзду,
                                            при проведенні ремонтних або будівельних робіт в якості бар'єру безпеки або
                                            попереджувального елемента, а також для огородження різних промислових і
                                            соціальних об'єктів, тепличних комплексів і сільськогосподарських угідь.
                                        </li>
                                        <li><b>Мобільна огорожа</b> може бути виготовлена
                                            спеціально за кресленнями замовника або техзавданню. В такому випадку наші
                                            менеджери за найкоротші терміни визначать можливість виготовлення при
                                            заданих параметрах, запропонують альтернативні варіанти (з метою економії
                                            коштів і часу), прорахують вартість і назвуть час виготовлення.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                        <div className='parametersTemporaryFence'>
                            <h2>Технічні параметри тимчасової огорожі</h2>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Довжина, мм</td>
                                    <td>2500</td>
                                    <td>3000</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td>Висота, мм</td>
                                    <td>1500; 2000</td>
                                    <td>1500; 2000</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td>Діаметр прутка, мм</td>
                                    <td>3/3; 3/4; 4</td>
                                    <td>3/3; 3/4; 4</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td>Розмір ячейки, ммХмм</td>
                                    <td>50х200; 100х200</td>
                                    <td>50х200; 100х200</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                <button className="button popup_calc_btn btn_of_Fence temporaryBttn">
                    Дізнатись варість
                </button>
            </div>
        )
    }
}