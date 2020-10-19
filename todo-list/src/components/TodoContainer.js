import React from 'react';

// Components
import ListItem from './ListItems';

const TodoContainer = ({todoItems, removeItem}) => {
  return (
    <div>
      <ListItem todoItems={todoItems} removeItem={removeItem} />
    </div>
  )
}

export default TodoContainer;