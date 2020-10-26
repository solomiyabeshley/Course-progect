import React, {Component} from "react";
import Slider from "react-slick";

import FencingBlinds from "./fencingBlinds";
import MetalFence from "./metalFence";
import RanchoFence from "./ranchoMetalFence";
import WeldedGridFence from "./weldedGridFence";
import TemporaryFencing from "./temporaryFencing";

import "./style/style.css";
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
                        <FencingBlinds/>
                    </div>
                    {/*Металевий штахетник(Євроштахетник)*/}
                    <div>
                        <MetalFence/>
                    </div>
                    {/*Металевий паркан РАНЧО*/}
                    <div>
                       <RanchoFence/>
                    </div>
                    {/*Паркан зі сварної сітки*/}
                    <div>
                       <WeldedGridFence/>
                    </div>
                    {/*Тимчасове огородження*/}
                    <div>
                   <TemporaryFencing/>
                    </div>
                </Slider>
            </div>
        );
    }
}