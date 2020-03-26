import React, { useState, useEffect } from 'react'
import { QUOTES } from '../CONST'

const getRandomQuote = () => {
  const idx = Math.floor(Math.random() * QUOTES.length)
  // console.log(idx);
  return{
    quote: QUOTES[idx].quote,
    author: QUOTES[idx].author
  }
}

// functional component
/* const QuoteComponent = () => {
  const initialState = {}
  const [state, setState] = useState(initialState)

  useEffect(() => {
    console.log('useEffect');
    setState(getRandomQuote())
    setRandomQuote()
  },[])

  const setRandomQuote = () => {
    setInterval(() => {
      setState(getRandomQuote())
    },3000)
  }

  return(
    <div>
      <div id="text">{state.quote}</div>
      <div id="author">{state.author}</div>
    </div>
  )
} */

// class component
class QuoteComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.setState(getRandomQuote())
    this.setRandomQuote()
  }

  setRandomQuote(){
    setInterval(() => {
      this.setState(getRandomQuote())
    },3000)
  }

  render(){
    return(
      <div>
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        </div>
    )
  }
}

export default QuoteComponent