import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import Swal from "sweetalert2";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



export default function ReadResult() {

    useEffect(() => {
        axios.get('http://localhost:5001/result/').then((response) => {
            setResult(response.data)
        })

    }, [])

    const [ResultList, setResult] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [resultJson,setResultJson] = useState({});

    const deleteResult = (id) => {
        axios.delete(`http://localhost:5001/result/delete/${id}`).then((then => {
            Swal.fire({
                title: "Deleted Successfully",
                icon: 'success',
            });
        }))
    };

    const history = useHistory();
    const updateResult = async(id) => {
        console.log(id);
        const result = await axios.get(`http://localhost:5001/result/get/${id}`);
        setResultJson(result.data);
        let path = `/updateResult/${id}`;
        history.push({
            pathname: path,
            state: resultJson,
        });
        history.push(path, result.data);
    }

    const gotoAdd = ()=>{
        let path = "/addResult";
        history.push(path);
    }

    return (<div style={{  margin: '6rem auto' }}
                 className={"h-full DisplaySVGBackground"}
    >
        <div class="pt-24 container">


        <h1 style={{textAlign: "center"}}>All Result</h1>

            <div class="input-group rounded"  style={{marginLeft: '25px'}}>
                <input type="search" class="form-control rounded" placeholder="Search " aria-label="Search"
                       aria-describedby="search-addon"
                       onChange={(e) => {
                           setSearchItem(e.target.value);
                       }}/>

                <button className={"bg-blue-300 px-5 ml-2 rounded border-2 border-blue-400"}>Search</button>

            </div>
            <br/>
            {ResultList.filter((val) => {
                if (searchItem == "") {
                    return val
                } else if (val.courseId.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
                    return val
                }
            }).map((val, key) => {

                return  <div className='tablePadding'>
                    <table Id = "Result" class="table table-dark rounded-lg">
                        <thead class="tableHeader">
                        <tr>
                            <th scope="col">Actions</th>
                            <th scope="col">Registration Number</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Subject Code</th>
                            <th scope="col">Subject Name</th>
                            <th scope="col">Result</th>
                        </tr>
                        </thead>

                        <tbody>

                        <tr>
                            <td>
                                <br/><br/><br/>

                                <div className={"grid grid-rows-1 grid-cols-2 gap-3"}>
                                    <a type="button" className="buttonDelete "
                                       onClick={() => deleteResult(val._id)}> Delete </a>

                                    <a type="button" className="buttonUpdate"
                                       onClick={() => updateResult(val._id)}> Edit </a>

                                </div>
                            </td>

                            <td>{val.registrationId}  </td>
                            <td>
                                {val.studentName} 
                                </td>

                            <td>
                                {val.courseId} 
                                </td>

                            <td> 
                                {val.subjectCode} <br/>
                                {/* {val.subjectCode2} <br/>
                                {val.subjectCode3} <br/>
                                {val.subjectCode4} <br/> */}
                                </td>
                            <td>
                                {val.subjectName} <br/>
                                {/* {val.subjectName2} <br/>
                                {val.subjectName3} <br/>
                                {val.subjectName4} <br/> */}
                                </td>
                            <td>
                                {val.results} <br/>
                                {/* {val.results2} <br/>
                                {val.results3} <br/>
                                {val.results4} <br/> */}
                                </td>


                        </tr>
                        </tbody>
                    </table>
                </div>
            })}
            <div class="grid place-items-center">
                <button class="buttonSubmit" type="button" onClick={() => gotoAdd()}
                        style={{marginLeft: '10px',width:'20%', backgroundColor:'#4682b4'}}>Add New Result</button>

                &nbsp;&nbsp;&nbsp;&nbsp;

                <ReactHTMLTableToExcel

                    id="test-table-xls-button"

                    className="buttonSubmit"

                    table="Result"

                    filename="tablexls"

                    sheet="tablexls"

                    buttonText="Generate Report"/>

            </div>
        </div>
    </div>)
}
