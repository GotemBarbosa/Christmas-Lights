import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { HexColorPicker } from "react-colorful";
import Slider from "@mui/material/Slider";

const Lamp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(props) => props.size}px;
`;
const Socket = styled.div`
  height: 30px;
  width: 25px;
  background-color: white;

  border-radius: 10%;
  border-bottom: 1px solid black;
  background-color: rgb(32, 31, 31);
  z-index: 2;
`;

const changeLight = (color, intensity) => {
  return keyframes`
        0%,
        100% {
            box-shadow: none;
        }
        50% {
            box-shadow: 0 0 20px ${intensity}px  ${color};
        }
        `;
};

const changeLight_2 = (color, intensity) => {
  return keyframes`
        0%,
        100% {
            box-shadow: 0 0 20px ${intensity}px  ${color}
        }
        50% {
            box-shadow: none;
        }
    `;
};
const Ball = styled.div`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  animation: ${(props) =>
      props.stoped === true
        ? null
        : props.even === true
        ? changeLight(props.color, props.intensity)
        : changeLight_2(props.color, props.intensity)}
    ${(props) => props.interval}s infinite;
  animation-timing-function: ease-in;
  position: absolute;
  top: 29px;
`;

const CurrentColor = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color};
  background: linear-gradient(
    143deg,
    ${(props) => props.color} 40%,
    rgba(255, 255, 255, 1) 100%
  );
  position: absolute;
  left: -15px;
  top: 5px;
  border-radius: 100%;
  cursor: pointer;
`;
export default function LightBall(props) {
  const [color, setColor] = useState("white");
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [size, setSize] = useState(65);

  //Enable the color picker visibility
  function expand() {
    setColorPickerVisible(true);
  }
  //Disable the color picker visibility
  function close() {
    setColorPickerVisible(false);
  }
  return (
    <Lamp size={size}>
      <Socket size={size} />
      <Ball
        interval={props.interval}
        color={color}
        intensity={props.intensity}
        size={size}
        stoped={props.stoped}
        even={props.even}
      />
      <CurrentColor
        color={color}
        onClick={() => {
          setColorPickerVisible(!colorPickerVisible);
        }}
        style={{ visibility: props.stoped === true ? "visible" : "hidden" }}
      />
      <Slider
        aria-label="Intensity"
        value={size}
        onChange={(event, newValue) => {
          setSize(newValue);
        }}
        min={65}
        max={150}
        orientation="vertical"
        style={{
          position: "absolute",
          height: 75,
          right: -25,
          top: 18,
          color: "white",
          visibility: props.stoped === true ? "visible" : "hidden",
        }}
      />

      <HexColorPicker
        color={color}
        onChange={setColor}
        onFocus={expand}
        onBlur={close}
        style={{
          visibility: colorPickerVisible === true ? "visible" : "hidden",
          zIndex: 4,
          position: "absolute",
          top: 100,
        }}
      />
    </Lamp>
  );
}
