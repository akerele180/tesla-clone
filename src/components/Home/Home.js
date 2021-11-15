import React from "react";
import styled from "styled-components";
import Section from "../Section/Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        rightBtn="existing inventory"
        leftBtn="custom order"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        rightBtn="existing inventory"
        leftBtn="custom order"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        rightBtn="existing inventory"
        leftBtn="custom order"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        rightBtn="existing inventory"
        leftBtn="custom order"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        rightBtn="learn more"
        leftBtn="order now"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        image="solar-roof.jpg"
        rightBtn="learn more"
        leftBtn="order now"
      />
      <Section
        title="Accessories"
        // description="Produce Clean Energy From Your Roof"
        image="accessories.jpg"
        // rightBtn="learn more"
        leftBtn="shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
