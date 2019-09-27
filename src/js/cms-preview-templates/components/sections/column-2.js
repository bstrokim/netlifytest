import React from "react";
import Markdown from 'react-markdown'

export default class Column1 extends React.Component {
  render() {
    const {header, footer, column_1, column_2} = this.props;
    
    return <div class="pv4">
      <div class="ph3 mw7 center">
        
        <header>
          <Markdown source={header} />
        </header>
    
        <div class="flex-ns mhn2-ns mb3">
          <div class="ph2-ns w-50-ns">
            <Markdown source={column_1} />
          </div>
          <div class="ph2-ns w-50-ns">
            <Markdown source={column_2} />
          </div>
        </div>
    
        <footer>
          <Markdown source={footer} />
        </footer>
        
      </div>
    </div>;

  }
}
