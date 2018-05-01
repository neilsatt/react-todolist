import React, { Component } from 'react';
import TodoItems from './todoitems';
import './todolist.css';

/*
   - define state object with items array
   - bind makes sure 'this' resolves properly
   - items arrays will store all of the items you enter
*/
 class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);
      
        this.state = {
            items: []
        };
      
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      
    };
     
    /* 
      - newItem will store an object
      - setState sets the new state, we concat the newItem so
        the original array doesn't get modified
      - clear input field value and override default submit behavior
    */
      addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
      
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
        
          this._inputElement.value = "";
        }
        
        console.log(this.state.items);
          
        e.preventDefault();
      }
    /* 
     pass key from clicked item
     check key against all of the items stored, using filter
     filteredItems will contain everyting except item that was removed
     removed item will disappear 
    
    */
    deleteItem(key) {
          var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
          });

          this.setState({
            items: filteredItems
          });
    }
     
     
  /* 
    - Create a form with an input field and submit btn 
    - Listen for submit event on the form, call addItem
      when the submit event is heard (btn type=submit)
    - the 'ref' lets us read the entered value from the input
      '_inputElement.value' is what we will use
    - Pass in our item as a prop (TodoItems)

  */
      render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                   placeholder="Enter a task">
                </input>
                <button type="submit">add</button>
              </form>

            </div>
            
            <TodoItems entries={this.state.items}
                delete={this.deleteItem}
            />    
          </div>
             
        );
      }
};
 
export default TodoList;