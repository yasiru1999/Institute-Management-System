import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import Axios from "axios";


function AddLibraryContent(props) {

    const [relatedCourse, setRelatedCourse] = useState("");
    const [resourceCategory, setResourceCategory] = useState("");
    const [topic, setTopic] = useState("");
    const [link, setLink] = useState("");
    const [author, setAuthor] = useState("");

    const [libraryDoc, setLibraryDoc] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    let [libraryDate, setLibraryDate] = useState("");

    const fileChangeHandler = (event) => {
        setLibraryDoc(event.target.files[0]);
        setIsFilePicked(true);
    };

    const onRelatedCourseChange = (event) => {
        setRelatedCourse(event.currentTarget.value)
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

    const onResourceCategoryChange = (event) => {
        setResourceCategory(event.currentTarget.value)
    }

    function handleSelectDate(event) {
        setLibraryDate(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!relatedCourse || !topic || !link || !author || !resourceCategory || !libraryDate || !isFilePicked) {
            return alert('fill all the fields first!')
        }

        const variables = {
            RelatedCourse: relatedCourse,
            ResourceCategory: resourceCategory,
            Topic: topic,
            Link:link,
            UploadFile:libraryDoc.name,
            Author:author,
            Date: libraryDate,
        }

        const formData = new FormData();
        formData.append('file',libraryDoc);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        Axios.post('http://localhost:5001/library/addLibraryDoc', variables)
            .then(response => {
                Axios.post("http://localhost:5001/library/addLibraryDocument",formData,config)
                    .then(() => {
                        if (response.data.success) {
                            alert('Library content Successfully Uploaded')
                            props.history.push('/')
                        } else {
                            alert('Failed to upload Payment Slip')
                        }

                    }).catch((error) => {
                    alert(error.message);
                });

            })

    }

    return(
        <div style={{ width: '98%', margin: '6rem auto' }}>
            <div >
                <h1 style={{ textAlign: 'left' }}>  Kingdom Institute Payment Portal </h1>
            </div>
            <hr/>

            <div style={{border: 'solid', width:'50%',  margin: '4rem auto'}}>
                <h2 style={{textAlign: "center"}}> Kingdom institute Payment Form</h2>

                <hr/>

                <Form style={{ width: '50%', margin: '4rem auto'}} onSubmit={onSubmit} >

                    <label>*Related Course:</label>
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

                    <label>*Upload File :</label>
                    <Input
                        type={"file"}
                        name="file"
                        onChange={fileChangeHandler}
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
                    <input type="Date" value={libraryDate} onChange={handleSelectDate} />
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

export default AddLibraryContent;