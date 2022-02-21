import "./App.css";
import LightRope from "./components/LightRope.js";
import React, { useState } from "react";
import { FaPlay, FaStop, FaPlus, FaMinus } from "react-icons/fa";
import Slider from "@mui/material/Slider";

function App() {
  const [interval, setInterval] = useState(1);
  const [stoped, setStoped] = useState(true);
  const [intensity, setIntensity] = useState(8);
  const [rowsQuantity, setRowsQuantity] = useState(1);

  //Add new light rope
  function handleAddRows() {
    if (rowsQuantity <= 6) setRowsQuantity(rowsQuantity + 1);
  }
  //Remove a light rope
  function handleRemoveRows() {
    if (rowsQuantity > 1) setRowsQuantity(rowsQuantity - 1);
  }

  return (
    <div className="App">
      <h1 className="title">Christmas lights</h1>
      <div className="christimas-light">
        {(function (rows, i, len) {
          while (++i <= len) {
            rows.push(
              <LightRope
                key={i}
                interval={interval}
                stoped={stoped}
                intensity={intensity}
              />
            );
          }
          return rows;
        })([], 0, rowsQuantity)}  
      </div>
      <div className="function-area">
        <div className="initialize-buttons">
          <button
            className={
              stoped === true ? "action-on-button" : "action-off-button"
            }
            onClick={() => {
              setStoped(!stoped);
            }}
          >
            {stoped === true ? <FaPlay /> : <FaStop />}
          </button>
        </div>
        <div className="time-interval-area">
          <label>Interval (S)</label>
          <input
            className="interval-input"
            value={interval}
            onChange={
              stoped === false
                ? null
                : (text) => {
                    setInterval(text.target.value);
                  }
            }
          />
        </div>
        <div className="intensity-area">
          <label>Intensity</label>
          <Slider
            aria-label="Intensity"
            value={intensity}
            onChange={(event, newValue) => {
              setIntensity(newValue);
            }}
            min={0}
            max={25}
          />
        </div>
        <div className="change-rows-area">
          <label>Rows</label>
          <div className="change-rows-buttons">
            <button
              className={
                rowsQuantity === 1 ? "remove-rows-disabled" : "remove-rows"
              }
              onClick={() => {
                handleRemoveRows();
              }}
            >
              <FaMinus />
            </button>
            <button
              className={rowsQuantity === 7 ? "add-rows-disabled" : "add-rows"}
              onClick={() => {
                handleAddRows();
              }}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
