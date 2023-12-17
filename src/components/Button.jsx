import React from 'react'

export default function App() {
  DUMMY_TODOS.map((item) => (
      <Todo key={...item} {...item}/>
    ))
    
}