import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';


const WelcomeSection = () => {
    return (
        <div className="welcome-section">
            <div className="section-caption">
                <span className="bullet"></span>
                <h5>Welcome To</h5>
            </div>
            <div className="welcome-text">
                <h2>Patara Luxury Hotel</h2>
                <p>
                    Welcome to Patara Luxury Hotel, the epitome of luxury and elegance in the heart of New York. Our five-star deluxe hotel offers unparalleled service, lavish accommodations, and unforgettable experiences. As you step into our grand lobby, you'll be surrounded by opulence and sophistication, setting the tone for an unforgettable stay.
                </p>
                <p>
                    Our hotel's exquisite design and amenities are inspired by the finest traditions of hospitality, blended with modern comforts and cutting-edge technology. From lavish suites to gourmet dining, state-of-the-art fitness center to serene spa treatments, every aspect of our hotel is designed to exceed your expectations. Whether you're visiting for business or pleasure, we'll make your stay truly unforgettable.
                </p>
                <p>
                    At Patara Luxury Hotel, we're dedicated to providing exceptional service and attention to detail to ensure a truly personalized experience. Our friendly and knowledgeable staff will cater to your every need, making you feel right at home. We look forward to welcoming you to our luxury hotel and making your stay in New York a truly unforgettable one.
                </p>
                <div className="welcome-ratings">
                    <div className="rate-number">
                        <h2>4.9</h2>
                    </div>
                    <hr />
                    <div className="welcome-rates">
                        <p>Rating based on 2500+ reviews</p>
                        <div className="star-ratings">
                            {[...Array(5)].map((star, index) => (
                                <FontAwesomeIcon key={index} icon={faSolidStar} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome-poster">
                <div>
                    <img src="https://webredox.net/demo/wp/patara/wp-content/uploads/2023/10/about-1.jpg" alt="welcome poster" />
                </div>
                <div>
                    <img src="https://webredox.net/demo/wp/patara/wp-content/uploads/2023/10/about-2.jpg" alt="welcome poster" />
                </div>
                <div>
                    <img src="https://webredox.net/demo/wp/patara/wp-content/uploads/2023/10/about-3.jpg" alt="welcome poster" />
                </div>
                <div>
                    <img src="https://webredox.net/demo/wp/patara/wp-content/uploads/2023/10/about-4.jpg" alt="welcome poster" />
                </div>
            </div>
        </div>
    )
};

export default WelcomeSection;