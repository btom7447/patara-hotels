import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

const PromotionalVideo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="promotional-video-section">
            <div className="promotional-video-caption">
                <div className="star-ratings">
                    {[...Array(5)].map((star, index) => (
                        <FontAwesomeIcon key={index} icon={faSolidStar} />
                    ))}
                </div>
                <h4>Welcome To</h4>
                <h1>Patara Luxury Resort Spa Hotel</h1>
                <button className="play-button" onClick={openModal}>
                    <span>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                    <span></span>
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Promotional Video"
                className="video-modal"
                overlayClassName="video-modal-overlay"
            >
                <div className="video-modal-content">
                    <button onClick={closeModal} className="close-button">X</button>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/QTwg1l8FqXw?autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
        </div>
    )
};

export default PromotionalVideo;