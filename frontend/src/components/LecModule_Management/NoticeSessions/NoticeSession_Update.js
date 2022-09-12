import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './NoticeSession.css'


export default function NoticeSession_Update(props) {

    const {id} = useParams("");   
    //const [detailList, setDetailList] = useState([]);

    const [detailList, setDetailList] = useState({
        moduleNo:"", category:""
    });

    const [updatedetailList, setUpdateDetailList] = useState({
        category:"", topic:"", description:"", otherDetails:""
    });


    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const results = await axios.get(`http://localhost:5001/noticeSessions/getDetails/${id}`)
                setDetailList(results.data);
                const res = await axios.get(`http://localhost:5001/noticeSessions/getDetails/${id}`)
                setUpdateDetailList(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

    /*const resetForm = () => {
        setCategory({ category: ""});
        setTopic({topic: ""});
        setDescription({ description: ""});
        setOtherDetails({ otherDetails: ""});
    }*/

    /*function sendData(e){
        (values, { setSubmitting }) => {
        setTimeout(() => {
            let dataToSubmit = {
                topic:values.topic,
                description: values.description,
                otherDetails: values.otherDetails
            };
            console.log(dataToSubmit);
            axios.put(`http://localhost:5001/noticeSessions/update/${id}`, dataToSubmit)
                .then(res =>
                {
                    if( res){
                        props.history.push("/allViewNS/IT2001");
                        alert('success');
                    }else{
                        alert("Error while registering user");
                    }
                }).
            catch(err => {
                console.log(err);
            });
            setSubmitting(false);
        }, 500);
    }}*/


    function sendData(e){
        e.preventDefault();
        axios.put(`http://localhost:5001/noticeSessions/update/${id}`, updatedetailList).then(() => {
            alert("Successfully Updated");
            //props.history.push('/allViewNS/IT2001')
            //resetForm();
        }).catch((err) => {
            alert("Fild to update");
            alert(err)
        });
    }

    return(
        <div>
            <br/> <br/> <br/> <br/>
            <h2>Module: Software Engineering / IT2001</h2>
            <hr className='hrLine'/>

            <div className="btn-group">                
                <a  href={`/allViewNS/IT2001`}><button className="button">View Notice/Sessions</button></a>
                <button className="button1">Student View</button>
            </div>

            <br/> <br/> <br/> <br/>

            <div className='formStyle'>
            <center><h2>Notice/Session Update</h2></center>
            <div className='form1'>
                    <form onSubmit={sendData} >

                        <label htmlFor="name"><b>Module No:</b> {detailList.moduleNo}</label> <br/>
                        <label htmlFor="name"><b>Category:</b>{detailList.category}</label>
                        <br/><br/>
                                          
                            <label htmlFor="name"><b>Enter Topic</b></label>
                            <input type="text" className="form-control" id="topc" placeholder="Enter Topic"
                                value={updatedetailList.topic}
                                onChange={(e) => { setUpdateDetailList({ topic: e.target.value }) 
                            }}></input>
                      
                            <label htmlFor="name"><b>Description</b></label>
                            <input type="text" className="form-control" id="des" placeholder="Enter Name"
                                value={updatedetailList.description}
                                onChange={(e) => { setUpdateDetailList({ description: e.target.value }) 
                            }}></input>

                            <label htmlFor="name"><b>Other Details</b></label>
                            <input type="text" className="form-control" id="other" placeholder="Enter Name"
                                value={updatedetailList.otherDetails}
                                onChange={(e) => { setUpdateDetailList({ otherDetails: e.target.value }) 
                            }}></input>
                    
                <div className='btS'>	
				    <button className='buttonSubmit' type="submit">Update</button>
				</div>
            </form>

            </div>
            </div>
           
        </div>


    )
}