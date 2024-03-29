import React, { Component } from "react";
import "./Splash.css";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function Splash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.text }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

export default Splash;
