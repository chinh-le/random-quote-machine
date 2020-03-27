import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GoogleFontLoader from 'react-google-font-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './QuoteComponent.scss';
import { QUOTES } from '../CONST';

const getRandomQuote = () => {
  const idx = Math.floor(Math.random() * QUOTES.length);
  // console.log(idx);
  return{
    quote: QUOTES[idx].quote,
    author: QUOTES[idx].author
  };
};

// class component
class QuoteComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  };

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
        <GoogleFontLoader
          fonts={[
            {
              font: 'Titillium Web',
              weights: [400, '400i'],
            },
          ]}
        />
        <Card bg="transparent" border="0" className="rnd-quote p-4">
            <Card.Body className="rnd-quote__body d-flex flex-column justify-content-center">
              <Card.Text className="rnd-quote__text mx-auto text-light m-0"><FontAwesomeIcon icon={faQuoteLeft} /></Card.Text>
              <Card.Title className="rnd-quote__title d-flex flex-row align-items-center mx-auto mb-0">
                {this.state.quote}
              </Card.Title>
              <Card.Text className="rnd-quote__text mx-auto text-right text-light"><FontAwesomeIcon icon={faQuoteRight} /></Card.Text>
            </Card.Body>
            <Card.Footer className="rnd-quote__footer mx-auto bg-transparent border-0">
              <Card.Text className="d-flex flex-column align-items-end text-light">{this.state.author}</Card.Text>
            </Card.Footer>
            <Card.Footer className="rnd-quote__footer d-flex justify-content-center mx-auto bg-transparent border-0">
                <Button variant="light" className="mx-1" id="tweet-quote"><FontAwesomeIcon icon={faTwitter} /></Button>
                <Button variant="light" id="new-quote">New Quote</Button>
            </Card.Footer>
        </Card>
      </div>
    )
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

export default QuoteComponent