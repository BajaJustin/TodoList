import React, {useState, useReducer} from 'react';
// Components
import Modal from './components/Modal';
import TodoContainer from './components/TodoContainer';

const reducer = (state, action) => {
  if(action.type === 'ADD_ITEM'){
    const newItems = [...state.items, action.payload];
    return {
      ...state,
      items: newItems,
      isModalShowing: true,
      isListShowing: true,
      modalContent: 'Item Added'
    }
  }
  if(action.type === 'NO_VALUE'){
    return {
      ...state,
      isModalShowing: true,
      modalContent: 'Please enter value'
    }
  }
  if(action.type === 'CLOSE_MODAL'){
    return {
      ...state,
      isModalShowing: false
    }
  }
  if(action.type === 'REMOVE_ITEM') {
    const newItems = state.items.filter((item) => item.id !== action.payload);
    return {
      ...state,
      items: newItems,
      isModalShowing: true,
      modalContent: 'Item Removed'
    }
  }
}

const initialState = {
  items: [],
  isModalShowing: false,
  isListShowing: false,
  modalContent: ''
}

function App() {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    e.preventDefault();
    if(name) {
      const newItem = {id:new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payload: newItem });
      setName('');
    }else {
      dispatch({type: 'NO_VALUE'});
    }
  }
  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  const removeItem = (id) => {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  }
  return (
    <section>
      <h3>Todo List</h3>
      <div>
          {state.isModalShowing && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
        </div>
      <form onSubmit={handleChange}>
        <div className="userInput">
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Purchase Textbook"
          />
          <button 
            type="submit"
            className="btn">
              <svg viewBox="0 0 80 70" fill="none">
                <path d="M25.2307 40.1819L33.6693 48.7006C34.4467 49.4853 35.707 49.4853 36.4844 48.7006L54.7692 30.2424" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M68 40C68 55.464 55.464 68 40 68C24.536 68 12 55.464 12 40C12 24.536 24.536 12 40 12C55.464 12 68 24.536 68 40Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
        </div>
        {console.log(name)}
      </form>
      {state.isListShowing && <TodoContainer todoItems={state.items} removeItem={removeItem}/>}
    </section>
  );
}

export default App;
