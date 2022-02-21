import React from "react";
import styled from "styled-components";
import LightBall from "./LightBall";

const Lightrope = styled.div`
  display: flex;
  flex-align: column;
  margin: 0px 0 150px 0;
  border-top: 2px solid #464646;
`;
const Rope = styled.div`
  width: 45px;
`;
export default function LightRope(props) {
  return (
    <Lightrope>
      <LightBall
        interval={props.interval}
        intensity={props.intensity}
        stoped={props.stoped}
      />
      <Rope />
      <LightBall
        interval={props.interval}
        intensity={props.intensity}
        stoped={props.stoped}
        even
      />
      <Rope />
      <LightBall
        interval={props.interval}
        intensity={props.intensity}
        stoped={props.stoped}
      />
      <Rope />
      <LightBall
        interval={props.interval}
        intensity={props.intensity}
        stoped={props.stoped}
        even
      />
      <Rope />
      <LightBall
        interval={props.interval}
        intensity={props.intensity}
        stoped={props.stoped}
      />
      <Rope />
      <LightBall
        interval={props.interval}
        intensity={props.intensity}
        stoped={props.stoped}
        even
      />
      <Rope />
      <LightBall
        interval={props.interval}
        intensity={props.intensity}
        stoped={props.stoped}
      />
    </Lightrope>
  );
}
