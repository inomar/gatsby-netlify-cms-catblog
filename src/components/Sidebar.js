import React from 'react'
import { Link, graphql } from 'gatsby'

const Sidebar = ({data}) => (
    <React.Fragment>
        <div className="shadow-none p-3 mb-5 bg-light rounded">AD space</div>
        <div className="profile  mb-5 shadow bg-white rounded">
            <div className="p-3 text-center">
                <a href="#">
                    <img src="https://petraku.com/wp-content/uploads/2016/12/Fotolia_127770787_Subscription_Monthly_M-e1481870798158.jpg" alt="" className="rounded-circle" style={{height:'75px',width:'75px'}} />
                    <p>つるべ <i className="fas fa-mars mars"></i></p>
                </a>
            </div>
            <div className="px-4 pb-3">
                <ul>
                    <li>好きなもの: テレビ</li>
                    <li>特技: 立つ</li>
                </ul>
            </div>
        </div>
        <div className="shadow-none p-3 mb-5 bg-light rounded">Youtube</div>
        <div className="shadow-none p-3 mb-5 bg-light rounded">Twitter TimeLine</div>
    </React.Fragment>
)

export default Sidebar