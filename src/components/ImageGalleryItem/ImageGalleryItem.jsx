import { Component } from "react";
import { Modal } from "components/Modal/Modal";
import { GalleryItem, GalleryItemImg } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }))
    }

    render() {
        
        const { src, alt, largeImageURL } = this.props;
        const { showModal } = this.state;

        return(
            <GalleryItem>
                <GalleryItemImg src = { src } alt = { alt } onClick = { this.toggleModal } />
                {showModal && (
                    <Modal largeImageURL = { largeImageURL } onClose = {this.toggleModal} />
                )}
            </GalleryItem>
        )
    } 
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string,
  }