import React from "react";

import Jumbotron from "./components/jumbotron";
import Section from "./components/section";


export default class Pages2Preview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    
    const entryValues = entry.getIn(["data", "sections"]);
    const values = entryValues ? entryValues.toJS() : [];

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>
      {values.map(({type, header, footer, column_1, column_2, column_3}, i) =>
      <Section key={i} type={type} header={header} footer={footer} column_1={column_1} column_2={column_2} column_3={column_3}/>
      )}
    </div>;
  }
}
