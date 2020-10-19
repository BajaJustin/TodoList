import React from 'react';

const ListItem = ({todoItems, removeItem}) => {
  return (
    <div>
      {todoItems.map((item) => {
        const {id, name} = item;
        return (
          <article key={id}>
            <div className="todoItem">
              <p>{name}</p>
              <button 
                onClick={() => removeItem(id)}>Delete</button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ListItem;