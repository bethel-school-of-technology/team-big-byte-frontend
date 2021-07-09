import React from 'react'
import './AboutUsInfo.css';

function AboutUsInfo() {
    return (
        <div className="aboutUsContainer">
            <ul>
                <li className="jake">
                    <h1>Jake</h1>
                    <img className="imageOfJake" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/120425973_1615225988650671_4600513192999744980_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=A6BbK2-QhKIAX-ANsGz&_nc_ht=scontent-ort2-1.xx&oh=d2fb93f41195f87ae719a86f15111ccc&oe=60ED8035" alt="imageofjake"></img>
                </li>
                <li className="rafael">
                    <h1>Rafael</h1>
                    <img className="imageOfRafael" src="https://ca.slack-edge.com/T9P33872P-U0165GQSNMN-45198a5e47a6-72" alt="imageofrafael"></img>
                </li>
            </ul>
        </div>
    )
}

export default AboutUsInfo
