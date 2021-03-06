import React from "react";
import { List } from 'immutable';

import Jumbotron from "./components/jumbotron";
import SectionStyles from "./components/section-styles";

export default class ValuesPreview extends React.Component {
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
      {values.map((section, i) =>
        <SectionStyles key={i} section={section}/>
      )}
    </div>;
  }
}
