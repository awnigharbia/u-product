import React, {Component} from 'react'
import {
        Styles, 
        BackWrapper,
        user,
        support,
        rightArrow,
        locked,
    } from '..'


export default class ProjectStatus extends Component {
    state = {
        roles: [
            {cat:'Email', val:'awni2009@hotmail'},
            {cat:'City', val:'Gaza'},
            {cat:'Project Name', val:'Testor'},
            {cat:'Universty', val:'Al-Azhar universty'},
        ]
    }
    render() {
        const {roles} = this.state

        return (
            <BackWrapper>
                <div className="support-wrapper">
                    <div className="user-wrapper">
                        <img src={user} alt={user} />
                        <h4>Awni Gharbia</h4>
                           {
                               roles.map((item, key) => <InfoRole key={key} {...item}/>)
                            }
                            
                        <img src={locked} alt={locked} id='locked'/>
                    </div>
                    <div className="chat-wrapper">
                        <div className="top-info">
                           <img src={support} alt={support} id='user-img' />
                           <h4>Support</h4>
                        </div>
                        <div className="body-msgs">
                           <div className="sender">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus veritatis dicta sunt tempore blanditiis? Neque, incidunt maiores. Eum, dolore consequatur impedit tempora itaque suscipit veritatis similique neque alias perferendis ratione?</p>
                           </div>
                           <div className="receiver">
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus veritatis dicta sunt tempore blanditiis? Neque, incidunt maiores. Eum, dolore consequatur impedit tempora itaque suscipit veritatis similique neque alias perferendis ratione?</p>
                           </div>
                           <div className="receiver">
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus veritatis dicta sunt tempore blanditiis? Neque, incidunt maiores. Eum, dolore consequatur impedit tempora itaque suscipit veritatis similique neque alias perferendis ratione?</p>
                           </div>
                           <div className="receiver">
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus veritatis dicta sunt tempore blanditiis? Neque, incidunt maiores. Eum, dolore consequatur impedit tempora itaque suscipit veritatis similique neque alias perferendis ratione?</p>
                           </div>
                        </div>
                        <div className="bottom-send">
                            <div className="bottom-wrapper">
                                <input type="text" placeholder='Type a message..' autoFocus />
                                <button><img src={rightArrow} alt={rightArrow} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </BackWrapper>
        )
    }
}


const InfoRole = ({cat, val}) => (
    <div className="infoRole">
        <div className="cat">
            {cat} :
        </div>
        <div className="val">
            {val}
        </div>
</div>
)