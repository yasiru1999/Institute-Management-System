import React, { useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderBar from './HeaderBar';
import download from 'downloadjs'
import { Link } from 'react-router-dom';
import './LecMaterials.css'

export default function LecMaterials_homeLec() {
 
    const {id} = useParams("");

    const [lectureList, setLectureList] = useState([]);

    //const [moduleNames, setModuleNames] = useState({moduleName:"", moduleNo:""});

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const res = await axios.get(`http://localhost:5001/lecMaterial/getLectures/${id}`)
                setLectureList(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

    const downloadFile = async(file) => {
        console.log(file);
        await axios.get(`http://localhost:5001/lecFiles/`+file)
            .then(response => {
    
                console.log(response);
                return download(response.data, `${file}.pdf`, "image/pdf");
            }).catch(error => {
                console.log(error);
            })
    }

    const deleteDetail = async (ids) => {
        try {
            const res = await axios.delete(`http://localhost:5001/lecMaterial/delete/${ids}`)
            alert("Successfully Deteted");
        } catch (err) {
            alert("Failed to delete");
            console.log(err);
        }
    }
  
    return(
        <div>

            <div><HeaderBar/></div>

            <div className="btn-group">               
                <a  href={`/allViewNS/${id}`}><button className="button">Notice/Sessions</button></a>
                <a  href={`/attenView/${id}`}><button className="button">Student Attendance</button></a>
                <a  href={`/lecMatUpload/${id}`}><button className="button">Lecture Upload</button></a>
                <a  href={`/stuHome/${id}`}><button className="button">Student View</button></a>
            </div>

            <br/><br/><br/><br/>
            <div className='viewTags'>
                <u><b><h3 className=" fw-bolder mb-4">Uploaded Lecture Materials</h3></b></u>
            </div>
            <br/><br/>

            <table className="table ">
                <thead>
                    <tr  key={"1"}>
                        <th> Title</th>
                        <th> Download file here</th>
                        <th> Recorded links</th>
                        <th> Remove </th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {
                        lectureList.map((lec, id) => (
                            <tr key={id}>
                                <td>{lec.title}</td>
                                <td className='file' onClick={() => downloadFile(lec.lecFile)}>{lec.lecFile}</td>
                                <td>{lec.link}</td>    
                                <td>
                                    <Link onClick={() => {deleteDetail(lec._id);  window.location.reload()}}><button className='button3'>Delete</button></Link>  
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )

}