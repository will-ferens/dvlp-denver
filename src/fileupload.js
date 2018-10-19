import React, { Component } from 'react'
import axios from 'axios'

class FileUpload extends Component {
    constructor () {
        super()
        this.state = {
            file: null
        }

        
    }
    submitFile = (event) => {
        event.preventDefault()
        
        const formData = new FormData()
        formData.append('file', this.state.file[0])
        axios.post(`/test-upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {

        }).catch(error => {

        })
    }

    handleFileUpload = (event) => {
        this.setState({file: event.taget.files})
    }
    render () {
        return (
            <form onSubmit={this.submitFile}>
                <input label='upload file' type='file' onChange={this.handleFileUpload} />
                <button type='submit'>Send</button>
            </form>
        )
    }
}

export default FileUpload

