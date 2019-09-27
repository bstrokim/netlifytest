import React from "react";

import Column1 from "./sections/column-1";
import Column2 from "./sections/column-2";

export default class Section extends React.Component {
  render() {
    const {section} = this.props;
    switch(section.type) {
      case 'one-column':
        return <Column1 header={section.header} footer={section.footer} column_1={section.column_1}/>;
        break;
      case 'two-column':
        return <Column2 header={section.header} footer={section.footer} column_1={section.column_1} column_2={section.column_2}/>;
        break;
      default:
        return null;
    }
  }
}
