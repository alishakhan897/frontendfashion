import React, { Component } from 'react';
import { IoIosReverseCamera } from 'react-icons/io';
import { CameraDiv, ImageDivCamera, MainEditImage, Button, EditDiv, ImageLabel, cameraDivCenter 
    , NewDiv , Form , FormDiv , Input} from './styledComponent';
import Navbar from '../Navbar';
import AvatarEditor from 'react-avatar-editor'; // Import AvatarEditor component
import { Dialog } from 'primereact/dialog'; // Import Dialog component

class EditProfile extends Component {
    state = {
        image: '',
        preview: null,
        allowZoomOut: false,
        scale: 1,
        rotate: 0,
        selectedImage: null,
        visible: false, // State to control the visibility of the dialog
        button: "Show",
        name:'',
        email:''
    };

    componentDidMount() {
        // Retrieve image from local storage if available
        const savedImage = localStorage.getItem('profileImage');
        const savedEmail = localStorage.getItem('userEmail') || 'Email not available';
        const savedName = savedEmail.includes('@') ? savedEmail.slice(0, savedEmail.indexOf('@')) : savedEmail; 
        if (savedImage) {
            this.setState({ preview: savedImage, button: "Change" });
        }
        this.setState({ email: savedEmail, name: savedName });
    }


    handleNewImage = async e => {
        const selectedFile = e.target.files[0];
        const imageURL = URL.createObjectURL(selectedFile);
        await this.setState({ selectedImage: imageURL, image: selectedFile, visible: true });
    }

    handleScaleChange = e => {
        const scale = parseFloat(e.target.value);
        this.setState({ scale });
    }

    handleRotateChange = e => {
        const rotate = parseFloat(e.target.value);
        this.setState({ rotate });
    }

    onClickSave = () => {
        if (this.editor) {
            const canvas = this.editor.getImage();
            const imageURL = canvas.toDataURL();
            localStorage.setItem('profileImage', imageURL);

            this.setState({ preview: imageURL, selectedImage: null, visible: false, button: "Change" });

        }
    }

    setEditorRef = editor => {
        if (editor) {
            this.editor = editor;
        }
    }

    handleShowClick = () => {
        document.getElementById('fileInput').click(); // Trigger file selection
    }

    render() {
        const { scale, rotate, preview, visible, button , name , email } = this.state;
        
        return (
            <>
                <Navbar />
                <MainEditImage>
                    <ImageLabel>
                        <cameraDivCenter>
                            <label htmlFor="fileInput">
                                <CameraDiv>
                                    {preview ? <ImageDivCamera src={preview} alt="Selected" /> : <IoIosReverseCamera color={'white'} size={30} />}

                                </CameraDiv>
                            </label>

                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={this.handleNewImage}
                            />

                            <Button icon="pi pi-external-link" onClick={this.handleShowClick}>{button}</Button>

                            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => this.setState({ visible: false })}>
                                <div>
                                    <AvatarEditor
                                        image={this.state.image}
                                        width={250}
                                        height={250}
                                        border={50}
                                        color={[255, 255, 255, 0.6]} // RGBA
                                        scale={parseFloat(scale)}
                                        rotate={rotate}
                                        ref={this.setEditorRef}
                                    />

                                    <div>
                                        <input
                                            type="range"
                                            value={scale}
                                            min="1"
                                            max="2"
                                            step="0.01"
                                            onChange={this.handleScaleChange}
                                        />
                                        <input
                                            type="range"
                                            value={rotate}
                                            min="0"
                                            max="360"
                                            step="1"
                                            onChange={this.handleRotateChange}
                                        />
                                    </div>

                                    <button onClick={this.onClickSave}>Save</button>
                                </div>
                            </Dialog>
                          
                        </cameraDivCenter>
                        <NewDiv>
                        <p> Name : {name}</p>
                        <p> Email : {email}</p> 
                        <p> Address : 93/72 Rajbi Road Kanpur</p>
                        <p>Phone Number : 6386151812</p>

                        </NewDiv>
                       
                    </ImageLabel>
                    <FormDiv>
                    <Form>
                        <label>Name</label>
                        <Input type="text" placeholder={name} disabled/>
                   </Form>
                   <Form>
                        <label>Email</label>
                        <Input type="text" placeholder={email} disabled/>
                   </Form>
                   <Form>
                        <label>Name</label>
                        <Input type="text" placeholder={name} disabled/>
                   </Form>
                   <Form>
                        <label>Name</label>
                        <Input type="text" placeholder={name} disabled/>
                   </Form>
                   <Form>
                        <label>Name</label>
                        <Input type="text" placeholder={name} disabled/>
                   </Form>
                   </FormDiv>
                </MainEditImage>

            </>
        );
    }
}

export default EditProfile;
