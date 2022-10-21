import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router";


export default function ReadTimetable() {

    useEffect(() => {
        axios.get('http://localhost:5001/timetable/').then((response) => {
            setTimetable(response.data)
        })

    }, [])

    const [TimetableList, setTimetable] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    // const [resultJson,setResultJson] = useState({});


    const history = useHistory();


    const gotoAdd = ()=>{
        let path = "/add";
        history.push(path);
    }

    return (<div style={{  margin: '6rem auto' }}
                 className={"h-full DisplaySVGBackground"}
    >
        <div class="pt-24 container">


        <h1 style={{textAlign: "center"}}>All Timetables</h1>

            <div class="input-group rounded"  style={{marginLeft: '25px'}}>
                <input type="search" class="form-control rounded" placeholder="Search " aria-label="Search"
                       aria-describedby="search-addon"
                       onChange={(e) => {
                           setSearchItem(e.target.value);
                       }}/>

                <button className={"bg-blue-300 px-5 ml-2 rounded border-2 border-blue-400"}>Search</button>

            </div>
            <br/>
            {TimetableList.filter((val) => {
                if (searchItem == "") {
                    return val
                } else if (val.courseId.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
                    return val
                }
            }).map((val, key) => {

                return <div className='tablePadding'>
                    <table Id = "Timetable" class="table table-dark rounded-lg">
                        <thead class="tableHeader">
                        <tr>

                            <th scope="col">Course ID</th>
                            <th scope="col">Subject ID and Name</th>
                            <th scope="col">Exam Type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Hall Number</th>

                        </tr>
                        </thead>

                        <tbody>

                        <tr>

                        <td>{val.courseId}  </td>
                            <td>
                                {val.subjectId} <br/>
                                {val.subjectId2} <br/>
                                {val.subjectId3} <br/>
                                {val.subjectId4} <br/>
                                </td>

                            <td>
                                {val.examType} <br/>
                                {val.examType2} <br/>
                                {val.examType3} <br/>
                                {val.examType4} <br/>
                                </td>

                            <td> 
                                {val.date} <br/>
                                {val.date2} <br/>
                                {val.date3} <br/>
                                {val.date4} <br/>
                                </td>
                            <td>
                                {val.time} <br/>
                                {val.time2} <br/>
                                {val.time3} <br/>
                                {val.time4} <br/>
                                </td>
                            <td>
                                {val.hallNumber} <br/>
                                {val.hallNumber2} <br/>
                                {val.hallNumber3} <br/>
                                {val.hallNumber4} <br/>
                                </td>



                        </tr>
                        </tbody>
                    </table>
                </div>
            })}


                      <button class="buttonSubmit" type="button" onClick={() => window.print()}
                        style={{marginLeft: '600px',width:'20%', backgroundColor:'#4682b4',marginTop:'40px'}}>Report</button>


        </div>

    </div>)
}
