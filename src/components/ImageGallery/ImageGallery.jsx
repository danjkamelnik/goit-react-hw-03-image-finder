import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
    return(
        <Gallery>
            {images.map((el) => 
                <ImageGalleryItem 
                    key = { el.id }
                    src = { el.webformatURL }
                    alt = { el.tags }
                    largeImageURL = { el.largeImageURL }
                />
            )}
        </Gallery>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
  };