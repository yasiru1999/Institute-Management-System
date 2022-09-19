import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


export default function LecMaterials_homeLec() {

    return(
        <div style={{ paddingTop: '5%'}}>


            <h2>Module: Software Engineering / IT2001</h2>
            <hr className='hrLine'/>

            <div className="btn-group">                
                <a  href={`/allViewNS/IT2001`}><button className="button">View Notice/Sessions</button></a>
                <button className="button1">Student View</button>
            </div>


            
        </div>
    )

}