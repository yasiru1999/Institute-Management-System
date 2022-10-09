import React, { useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import HeaderBar from './HeaderBar';


export default function StudentModuleHome() {
 
    const {id} = useParams("");

    /*const [moduleNames, setModuleNames] = useState({moduleName:"", moduleNo:""});

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
    },[]);*/
  
    return(
        <div>

            <div><HeaderBar/></div>

            <div className="btn-group">               
                <a  href={`/addAtte/${id}`}><button className="button">Submit Attendance</button></a>
            </div>

            
        </div>
    )

}