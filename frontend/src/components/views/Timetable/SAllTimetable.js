import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



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

    return (<div style={{
        maxWidth: "100%",
    }}
                 className={"h-full DisplaySVGBackground"}
    >
        <div class="pt-24 container">


            <h2 class="display-3 font-black mb-3"> All Timetables </h2>

            <div class="input-group rounded">
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

                return <div>
                    <table Id = "Timetable" class="table table-dark rounded-lg">
                        <thead class="thead-dark">
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
                            <td>{val.subjectId} </td>
                            <td>{val.examType} </td>
                            <td>{val.date} </td>
                            <td>{val.time} </td>
                            <td>{val.hallNumber} </td>


                        </tr>
                        </tbody>
                    </table>
                </div>
            })}


            &nbsp;&nbsp;&nbsp;&nbsp;

            <ReactHTMLTableToExcel

                id="test-table-xls-button"

                className="btn btn-primary"

                table="Timetable"

                filename="tablexls"

                sheet="tablexls"

                buttonText="Download Timetable"/>

        </div>

    </div>)
}
