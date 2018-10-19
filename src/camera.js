import React, { Component } from 'react'
import Webcam from 'react-webcam'
import FileUpload from './fileupload'

class Camera extends Component {
    constructor() {
        super()
        this.state = {
            image: null
        }
        this.capture = this.capture.bind(this)
    }
    setRef = webcam => {
        this.webcam = webcam
    }
    capture = () => {
        const imageSrc = this.webcam.getScreenshot()
        
        this.setState({ image: imageSrc})
    }
    render() {
        const videoConstraints = {
            facingMode: "user"
        }
        
        return (
            <div>
                <Webcam 
                    videoConstraints={videoConstraints} 
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"/>
                <button onClick={this.capture}>Take Drunken State</button>
                <FileUpload />
            </div>
        )
    }
}

export default Camera