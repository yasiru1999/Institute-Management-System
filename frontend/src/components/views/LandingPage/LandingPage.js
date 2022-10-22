import React, { useEffect, useState } from 'react'
import { Icon, Col, Card, Row } from 'antd';
import About from './photo.jpg';

function LandingPage() {

    return (
        <div style={{ width: '75%', margin: '6rem auto' }}>
                <div>
                    <header id='header'>
                        <div className='intro'>
                            <div className='overlay'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-8 col-md-offset-2 intro-text'>
                                            <div className='headerTop' style={{color:'Blue', fontSize: 32, textAlign:"center"}}>
                                                Welcome to Kingdom Institute.
                                                <span></span>
                                            </div>
                                            <br/>
                                            <p >
                                                We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act. We are also members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU), and the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

            <div id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-md-6' style={{width: '100%', alignItems:"center" }}>
                            {' '}
                            <img src={About} className='img-responsive' alt='' />{' '}
                        </div>
                        <div className='col-xs-12 col-md-6'>
                            <div className='about-text'>
                                <br/>
                                <h2>About Us</h2>
                                <p>We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act. We are members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU). We are also the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK.
                                    SLIIT was established in 1999. We opened our doors to 395 students in Metro Campus in Colombo. Currently, we offer both undergraduate and postgraduate courses and accommodate over 9000 students, including international students from various regions in the world. More than 15000 alumni have graduated from our faculties. We take great pride in producing graduates who make meaningful contributions to their communities and professions</p>
                                {/*<h3>Why Choose Us?</h3>
                                    <div className='list-style'>
                                        <div className='col-lg-6 col-sm-6 col-xs-12'>
                                            <ul>
                                                : 'loading'
                                            </ul>
                                        </div>
                                        <div className='col-lg-6 col-sm-6 col-xs-12'>
                                            <ul>

                                                    : 'loading'}
                                            </ul>
                                        </div>
                                    </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default LandingPage
