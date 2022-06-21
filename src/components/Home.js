import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section
        title="Tesla Model S"
        subtitle="Order online touchless delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
        backgroundImg="/images/model-s.jpg"
      />
      <Section
        title="Tesla Model Y"
        subtitle="Order online touchless delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
        backgroundImg="/images/model-y.jpg"
      />
      <Section
        title="Tesla Model 3"
        subtitle="Order online touchless delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
        backgroundImg="/images/model-3.jpg"
      />
      <Section
        title="Tesla Model X"
        subtitle="Order online touchless delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
        backgroundImg="/images/model-x.jpg"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
