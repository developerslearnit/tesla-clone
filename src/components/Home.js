import React from 'react'
import styled from 'styled-components'
import Section from './Section';

const Home = () => {
    return (
        <Container>

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgrounImage="model-s.jpg"
                leftButtonText="Order Now"
                rightButtonText="Existing Inventory"
            />

            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgrounImage="model-y.jpg"
                leftButtonText="Order Now"
                rightButtonText="Existing Inventory"
            />

            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgrounImage="model-3.jpg"
                leftButtonText="Order Now"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgrounImage="model-x.jpg"
                leftButtonText="Order Now"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgrounImage="solar-panel.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn more"
            />

            <Section
                title="Solar for New Roofs"
                description="Solar Roofs Costs Less Than a New Roof"
                backgrounImage="solar-roof.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgrounImage="accessories.jpg"
                leftButtonText="Shop Now"
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
height: 100vh;
width: 100vw;
`