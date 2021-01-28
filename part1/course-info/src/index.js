import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";

const Header = ({course}) =>{
  return(
    <h1>{course}</h1>
  )
}

const Part = ({ name, exercises}) => {
  return(
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {
  const partsList = parts.map(
    (part, index) => <Part key={index} name={part.name} exercises={part.exercises}/> )
  return(
    <div>
      {partsList}
    </div>
  )
}

const Total = ({parts}) => {
  return(
    <div>
      <p>Number of exercises {parts.reduce((total, part) => total + part.exercises, 0)}</p>
    </div>
    

  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content 
      parts={course.parts}
      />
      <Total 
      parts={course.parts}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))