import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const title = entry.getIn(['data', 'title']) || ''
    let image = getAsset(entry.getIn(["data", "image"]));
    
    YOAST.setContent({
        title: title,
        description: entry.getIn(['data', 'yoast_description']) || '',
        keyword: entry.getIn(['data', 'yoast_keyword']) || '',
        text: entry.getIn(['data', 'body']) || '',
        titleWidth: title.split('').length * 5 // 5px is an average width of each character ;)
    });
    
    return h('div', {},
      <div className="mw6 center ph3 pv4">
        <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
        <div className="flex justify-between grey-3">
          <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
          <p>Read in x minutes</p>
        </div>
        <div className="cms mw6">
          <p>{ entry.getIn(["data", "description"]) }</p>
          { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
          { widgetFor("body") }
        </div>
      </div>,
      YOAST.getScoresAsHTML(h)
    );
  }
}
