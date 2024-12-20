import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="icon-wrapper">
            <FontAwesomeIcon icon={icon} className="feature-icon" />
        </div>
        <div className="feature-text">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

export default FeatureCard;
