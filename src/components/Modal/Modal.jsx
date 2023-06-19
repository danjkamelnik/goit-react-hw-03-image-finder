import React, { Component } from "react";
import { Overlay, ModalEl } from "./Modal.styled";


export class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKey)
    }

    componentWillUnmount() {
        window.addEventListener('keydown', this.handleKey)
    }

    handleKey = evt => {
        if(evt.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleBackdrop = evt => {
        if(evt.currentTarget === evt.target) {
            this.props.onClose()
        }
    }

    render() {
        return(
            <Overlay onClick = { this.handleBackdrop }>
                <ModalEl>
                    <img src = {this.props.largeImageURL} alt = { this.props.alt } />
                </ModalEl>
            </Overlay>
        )
    }

}