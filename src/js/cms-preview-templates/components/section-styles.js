import React from "react";
import Section from "./section";

export default class SectionStyles extends React.Component {
  render() {
    const {section} = this.props;
    
    let bgstyle = {};
    
    if (section.background) {
      const bg = section.background[0];

      switch(bg.type){
        case "bg_color":
          bgstyle = {backgroundColor: bg.bg_color_color};
          break;
        case "bg_image":
          bgstyle = {backgroundImage: `url(${bg.bg_image_image})`};
          break;
        case "bg_gradient":
          bgstyle = {
            background: bg.bg_gradient_l,
            background: "-moz-linear-gradient(left,  " + bg.bg_gradient_l + " 0%, " + bg.bg_gradient_r + " 100%)",
            background: "-webkit-linear-gradient(left,  " + bg.bg_gradient_l + " 0%," + bg.bg_gradient_r + " 100%)",
            background: "linear-gradient(to right,  " + bg.bg_gradient_l + " 0%," + bg.bg_gradient_r + " 100%)",
            filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + bg.bg_gradient_l + "', endColorstr='" + bg.bg_gradient_r + "',GradientType=1 )"
          };
          break;
      }
    }
      
    return (
      <div style={bgstyle}>
        <Section section={section}/>
      </div>      
    );
  }
}
