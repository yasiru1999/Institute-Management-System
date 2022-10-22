import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import Axios from "axios";
import { useParams } from 'react-router-dom';
import HeaderBar from '../LecMaterials/HeaderBar';

export default function LecMaterial_upload(props) {

    const {id} = useParams("");

    const [ModuleName, setModuleName] = useState(id);
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Link, setLink] = useState("");

    const [LecFile, setLecFile] = useState();

    const [isFilePicked, setIsFilePicked] = useState(false);

    const fileChangeHandler = (event) => {
        setLecFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const onTitleChange = (event) => {
        setTitle(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescription(event.currentTarget.value)
    }

    const onLinkChange = (event) => {
        setLink(event.currentTarget.value)
    }
    
    const onModuleNameChange = (event) => {
        setModuleName(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!Title || !Description || !Link || !isFilePicked) {
            return alert('fill all the fields first!')
        }

        const variables = {
            moduleName: ModuleName,
            title: Title,
            description: Description,
            link: Link,
            lecFile: LecFile.name,
            isApproved: false
        }

        const formData = new FormData();
        formData.append('file',LecFile);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        Axios.post('http://localhost:5001/lecMaterial/addLecMaterial', variables)
            .then(response => {
                Axios.post("http://localhost:5001/lecMaterial/addLecFile",formData,config)
                    .then(() => {
                        if (response.data.success) {
                            alert('Lecture File Successfully Uploaded')
                            props.history.push(`/homeLecMat/${id}`)
                        } else {
                            alert('Failed to upload file')
                        }

                    }).catch((error) => {
                    alert(error.message);
                });

            })

    }

    return(
        <div>
            <div><HeaderBar/></div>

            <div className="btn-group">        
                <a  href={`/homeLecMat/${id}`}><button className="button">Module Home</button></a>
            </div>

            <div style={{border: 'solid', width:'50%',  margin: '4rem auto'}}>
                <h2 style={{textAlign: "center"}}> Lecture Material Upload</h2>

                <hr/>

                <Form style={{ width: '50%', margin: '2rem auto'}} onSubmit={onSubmit} >

                    <b><label>*Module Name :</label></b>
                    <Input
                        onChange={onModuleNameChange}
                        value={ModuleName} disabled/>
                    <br />

                    <b><label>*Lecture title :</label></b>
                    <Input
                        onChange={onTitleChange}
                        value={Title} required/>
                    <br />

                    <b><label>*Description :</label></b>
                    <Input
                        onChange={onDescriptionChange}
                        value={Description} required/>
                    <br />

                    <b><label>*Lecture link :</label></b>
                    <Input
                        onChange={onLinkChange}
                        value={Link} required/>
                    <br />

                    <b><label>*Upload Lecture file :</label></b>
                    <Input
                        type={"file"}
                        name="file"
                        onChange={fileChangeHandler}/>
                    <br />

                    <div className='btS'>	
				        <button onClick={onSubmit} className='buttonSubmit' type="submit">Save</button>
				    </div>

                </Form>

            </div>

        </div>
    )
}