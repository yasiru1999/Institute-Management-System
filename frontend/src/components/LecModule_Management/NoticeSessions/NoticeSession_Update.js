import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './NoticeSession.css';

export default function NoticeSession_Update(props) {

    const {id} = useParams("");   

    const [updatedetailList, setUpdateDetailList] = useState({
        moduleNo:"", category:"", topic:"", description:"", otherDetails:""
    });

    const onChange = e => {
        setUpdateDetailList({ ...updatedetailList, [e.target.name]: e.target.value });
    }

    const resetForm = () => {
        setUpdateDetailList({ category:"", topic:"", description:"", otherDetails:"" });
    }

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const res = await axios.get(`http://localhost:5001/noticeSessions/getDetails/${id}`)
                setUpdateDetailList(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

    function sendData(e){
        e.preventDefault();
        axios.put(`http://localhost:5001/noticeSessions/update/${id}`, updatedetailList).then(() => {
            alert("Successfully Updated");
            props.history.push(`/allViewNS/${updatedetailList.moduleNo}`)
            resetForm();
        }).catch((err) => {
            alert("Fild to update");
            alert(err)
        });
    }

    return(
        <div>
            
            <div style={{ paddingTop: '5%'}}>
                <h2>Module no:   {updatedetailList.moduleNo}</h2>         
                <hr className='hrLine'/>
            </div>
            
            <div className="btn-group">                
                <a  href={`/allViewNS/${updatedetailList.moduleNo}`}><button className="button">View Notice/Sessions</button></a>
                <button className="button1">Student View</button>
            </div>

            <br/> <br/> <br/> <br/>

            <div className='formStyle'>
                <center><h2>Notice/Session Update</h2></center>
                <div className='form1'>
                    <form onSubmit={sendData} >

                        <label htmlFor="name"><b>Module No:</b>{updatedetailList.moduleNo}</label> <br/>
                        <label htmlFor="name"><b>Category:</b>{updatedetailList.category}</label>
                        <br/><br/>                     
                                          
                        <label htmlFor="name"><b>Enter Topic</b></label>
                        <input type="text" className="form-control" name="topic" placeholder="Enter Topic.."
                            value={updatedetailList.topic}
                            onChange={onChange}>
                        </input>
                      
                        <label htmlFor="name"><b>Description</b></label>
                        <input type="text" className="form-control" name="description" placeholder="Enter Description.."
                            value={updatedetailList.description}
                            onChange={onChange}>        
                        </input>

                        <label htmlFor="name"><b>Other Details</b></label>
                        <input type="text" className="form-control" name="otherDetails" placeholder="Enter Other Details.."
                            value={updatedetailList.otherDetails}
                            onChange={onChange}>
                        </input>
                    
                <div className='btS'>	
				    <button className='buttonSubmit' type="submit">Update</button>
				</div>
            </form>

            </div>
            </div>
           
        </div>


    )
}