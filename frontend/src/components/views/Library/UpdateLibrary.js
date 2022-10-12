import React, {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import Axios from "axios";
import {useLocation} from "react-router-dom";



function UpdateLibrary(props) {

    const [ID,setId] = useState("");
    const [relatedCourse, setRelatedCourse] = useState("");
    const [resourceCategory, setResourceCategory] = useState("");
    const [topic, setTopic] = useState("");
    const [link, setLink] = useState("");
    const [author, setAuthor] = useState("");

    let [libraryDate, setLibraryDate] = useState("");

    const location = useLocation();

    useEffect(() =>{
        setId(location.state.Library._id)
        setRelatedCourse(location.state.Library.RelatedCourse)
        setResourceCategory(location.state.Library.ResourceCategory)
        setTopic(location.state.Library.Topic)
        setLink(location.state.Library.Link)
        setAuthor(location.state.Library.Author)
        setLibraryDate(location.state.Library.Date)
    },[location])


    console.log(location.state.Library.RelatedCourse);

    const onRelatedCourseChange = (event) => {
        setRelatedCourse(event.currentTarget.value)
    }

    const onResourceCategoryChange = (event) => {
        setResourceCategory(event.currentTarget.value)
    }

    const onTopicChange = (event) => {
        setTopic(event.currentTarget.value)
    }
    const onLinkChange = (event) => {
        setLink(event.currentTarget.value)
    }
    const onAuthorChange = (event) => {
        setAuthor(event.currentTarget.value)
    }
    const onLibraryDateChange = (event) => {
        setLibraryDate(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!relatedCourse || !resourceCategory || !topic || !link || !author || !libraryDate) {
            return alert('fill all the fields first!')
        }

        const variables = {
            RelatedCourse: relatedCourse,
            ResourceCategory: resourceCategory,
            Topic: topic,
            Link:link,
            Author:author,
            Date: libraryDate,
        }


        Axios.put(`http://localhost:5001/library/updateLibraryDoc/${ID}`, variables)
            .then(response => {
                if (response.data) {
                    alert('Conference Successfully Edited')
                    props.history.push('/libraryDetails')
                } else {
                    alert('Failed to edit Conference')
                }
            })

    }

    return(
        <div style={{ width: '98%', margin: '6rem auto' }}>
            <div >
                <h1 style={{ textAlign: 'left' }}>  Library Resources </h1>
            </div>
            <hr/>

            <div style={{border: 'solid', width:'50%',  margin: '4rem auto'}}>
                <h2 style={{textAlign: "center"}}> Library Resource Adding Form</h2>

                <hr/>

                <Form style={{ width: '50%', margin: '4rem auto'}} onSubmit={onSubmit} >

                    <label>*Related Course :</label>
                    <Input
                        onChange={onRelatedCourseChange}
                        value={relatedCourse}
                    />
                    <br />
                    <br />

                    <label>*Resource Category :</label>
                    <Input
                        onChange={onResourceCategoryChange}
                        value={resourceCategory}
                    />
                    <br />
                    <br />

                    <label>*Topic :</label>
                    <Input
                        onChange={onTopicChange}
                        value={topic}
                    />
                    <br />
                    <br />

                    <label>*Link :</label>
                    <Input
                        onChange={onLinkChange}
                        value={link}
                    />
                    <br />
                    <br />

                    <label>*Author :</label>
                    <Input
                        onChange={onAuthorChange}
                        value={author}
                    />
                    <br />
                    <br />

                    <label>
                        Date :
                    </label>
                    <br/>
                    <input type="Date" value={libraryDate} onChange={onLibraryDateChange} />
                    <br />
                    <br />

                    <Button style={{marginLeft: '300px'}} onClick={onSubmit}>
                        Submit
                    </Button>

                </Form>

            </div>

        </div>
    )
}

export default UpdateLibrary;