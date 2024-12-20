import React from 'react';
import FeatureCard from './FeatureCard';
import { faTags, faTruck, faGift, faShapes, faUndo } from '@fortawesome/free-solid-svg-icons';
import './features.css';

const features = [
    { id: 1, icon: faTags, title: "Best prices & offers", description: "Orders $50 or more" },
    { id: 2, icon: faTruck, title: "Free delivery", description: "24/7 amazing services" },
    { id: 3, icon: faGift, title: "Great daily deal", description: "When you sign up" },
    { id: 4, icon: faShapes, title: "Wide assortment", description: "Mega Discounts" },
    { id: 5, icon: faUndo, title: "Easy returns", description: "Within 30 days" },
];

const FeatureList = () => (
    <div className="feature-list">
        {features.map(feature => (
            <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
            />
        ))}
    </div>
);

export default FeatureList;
