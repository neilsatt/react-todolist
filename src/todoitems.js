// Todo list items

import React, { Component } from 'react';
 
class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }
    
delete(key) {
    this.props.delete(key);
}
    
/* render the items from the array into a list
    listen for the click event associate with delete handler
*/
  createTasks(item) {
    return <li onClick={(e) => this.delete(item.key, e)}
            key={item.key}>{item.text}</li>  
  }
 
/* listItems is an array of li items */
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
        
      </ul>
    );
  }
};
 
export default TodoItems;