import React, { useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import HeaderBar from './HeaderBar';


export default function LecMaterials_homeLec() {
 
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
                <a  href={`/allViewNS/${id}`}><button className="button">View Notice/Sessions</button></a>
                <a  href={`/allView/${id}`}><button className="button">Student View</button></a>              
            </div>

            
        </div>
    )

}