import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <Section
        title="Tesla Model S"
        subtitle="Order online touchless delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
      />
      <Section
        title="hrtyhrtyhr"
        subtitle="Order online touchless delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
      />
      <Section
        title="Teshrt5hrhrtf"
        subtitle="Order online touchless delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
      />
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
