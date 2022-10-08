import React, { useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function HeaderBar() {
 
    const {id} = useParams("");   

    const [moduleNames, setModuleNames] = useState({moduleName:"", moduleNo:""});

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const res = await axios.get(`http://localhost:5001/module/getOneModule/${id}`)
                setModuleNames(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);
  
    return(
        <div style={{ paddingTop: '5%'}}>
            <h2>Module: {moduleNames.moduleName} / {id}</h2>         
            <hr className='hrLine'/>          
        </div>
    )

}