import React from "react";
import Markdown from 'react-markdown'

export default class Column1 extends React.Component {
  render() {
    const {header, footer, column_1, background} = this.props;
    
    return <div class="pv4">
      <div class="ph3 mw7 center">
        <header>
          <Markdown source={header} />
        </header>
    
        <div class="cms mw6">
          <Markdown source={column_1} />
        </div>
    
        <footer>
          <Markdown source={footer} />
        </footer>
        
      </div>
    </div>;

  }
}
