import React from 'react';
import "./js/slider";
import '../src/js/style/style.css'
//img
import Img1 from '../src/js/img/guarantees/quality.png'
import Img2 from '../src/js/img/guarantees/client.png'
import Img3 from '../src/js/img/guarantees/budget.png'
import Img4 from '../src/js/img/guarantees/sketch.png'
import Img5 from '../src/js/img/guarantees/shipped.png'
import Img6 from '../src/js/img/guarantees/wrench.png'


function GuaranteesHeader() {
    return (
        <div className="guaranteesHeader">
            <div className='weGuarantYou_text'>
                <h1>Ми гарантуємо вам</h1>
            </div>
            <div className="rowGuarantees">
                <div className='guarantees_block'>
                    <img src={Img1} alt="" className='guarantees_icons'/>
                    <h4 className='guarantees_h3'>Високу якість</h4>
                </div>
                <div className='guarantees_block'>
                    <img src={Img2} alt="" className='guarantees_icons'/>
                    <h4 className='guarantees_h3'>Професійну консультацію</h4>
                </div>
                <div className='guarantees_block'>
                    <img src={Img3} alt="" className='guarantees_icons'/>
                    <h4 className='guarantees_h3'>Розрахунок вартості паркану</h4>
                </div>
                <div className='guarantees_block'>
                    <img src={Img4} alt="" className='guarantees_icons'/>
                    <h4 className='guarantees_h3'>Проектування огорожі</h4>
                </div>
                <div className='guarantees_block'>
                    <img src={Img5} alt="" className='guarantees_icons'/>
                    <h4 className='guarantees_h3'>Доставку парканів</h4>
                </div>
                <div className='guarantees_block'>
                    <img src={Img6} alt="" className='guarantees_icons'/>
                    <h4 className='guarantees_h3'>Монтаж огорожі</h4>
                </div>
            </div>
        </div>
    );
}

export default GuaranteesHeader;

