import React from 'react';
import CardSection from '../components/home page/first-section/CardSection.jsx';
import HeroSection from '../components/home page/hero-section/Hero-section.jsx';
import Products from '../components/home page/popular-products/Products.jsx';
import DailyBS from '../components/daily-best-sellers/daily-best-seller.jsx';
import GreenBanner from '../components/home page/last-section/GreenBanner.jsx';
import FeatureList from '../components/home page/before-footer/FeatureList.jsx';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <CardSection />
            <Products />
            <DailyBS />
            <GreenBanner />
            <FeatureList />
        </div>
    )
}
