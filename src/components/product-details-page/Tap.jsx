import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TabComponent.css';  // Import the CSS file for custom styles
import { useSelector } from 'react-redux';

function TabComponent() {
    const product = useSelector((state) => state.product.selectedProduct);

    return (
        <Container className="mt-5 tap-container">
            <Tabs defaultActiveKey="description" id="tab-example" className="custom-tabs">
                <Tab eventKey="description" title="Description">
                    <p>
                        {product.description}
                    </p>
                </Tab>
                <Tab eventKey="information" title="Information">
                    <p>
                        {product.info}
                    </p>
                </Tab>
                <Tab eventKey="review" title="Review">
                    <p>
                        ({product.rating}) total rating.
                    </p>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default TabComponent;
