import React from 'react'

const BoxColor = (props) => {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  

  return (
    <div style={{
      backgroundColor: "rgb(" + props.r + ", " + props.g + ", " + props.b + ")",
      border: "1px solid black",
      width: 500,
      height: 80,
      margin: "15px auto",
      padding: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      rgb({props.r},{props.g},{props.b})
      <br />
      {rgbToHex(props.r, props.g, props.b)}
    </div>
  )
}

export default BoxColor