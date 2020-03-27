import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GoogleFontLoader from 'react-google-font-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group';

import './QuoteComponent.scss';
import { QUOTES, BG_COLORS } from '../CONST';

const getRandomQuote = () => {
  const idx = Math.floor(Math.random() * QUOTES.length);
  // console.log(idx);
  return{
    text: QUOTES[idx].text,
    author: QUOTES[idx].author
  };
};

const getRandomColor = () => BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)];

// class component
class QuoteComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: {},
      fade: true
    };
    this.getQuote = this.getQuote.bind(this);
    this.changeQuote = this.changeQuote.bind(this);
    this.interval = null;
    this.timeout = null;
    this.intervalBg = null;
    this.timeoutBg = null;
    this.bgColor = getRandomColor();
    // this.wrapper = React.createRef();
  }

  componentDidMount(){
    this.setState((prevState, props) => {
        return {
          quote: getRandomQuote(),
          fade: prevState.fade
        };
    });
    this.autoChangeQuote();
    this.autoChangeBg();
  }

  componentWillUnmount(){
    clearInterval(this.interval);
    clearInterval(this.intervalBg);
    clearTimeout(this.timeout);
  }

  autoChangeQuote(){
    this.interval = setInterval(() => {
      this.setState((prevState, props) => {
        return {
          quote: prevState.quote,
          fade: !prevState.fade
        };
      });
      this.changeQuote();
    }, 5000);
  }

  changeQuote(){
    this.timeout = setTimeout(() => {
      this.setState((prevState, props) => {
        return {
          quote: getRandomQuote(),
          fade: !prevState.fade
        };
      });
    }, 500);
  }

  getQuote(){
    clearInterval(this.interval);
    clearInterval(this.intervalBg);
    this.setState((prevState, props) => {
      return {
        quote: prevState.quote,
        fade: !prevState.fade
      };
    });
    this.changeQuote();
    this.changeBg();
  }

  autoChangeBg(){
    this.intervalBg = setInterval(() => {
      this.bgColor = getRandomColor();
    }, 5000);
  }

  changeBg(){
    this.timeoutBg = setTimeout(() => {
      this.bgColor = getRandomColor();
    }, 500);
  }

  render(){
    let containerBgColor = `alert-${this.bgColor}`;
    const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.quote.text}`;
    return(
      // <div ref={this.wrapper}>
      <div>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Titillium Web',
              weights: [400, '400i'],
            },
          ]}
        />
        <Container fluid id="quote-box" className={containerBgColor}>
          <Col sm={9} md={7} lg={5} xl={4} className="m-auto">
            <Card bg="transparent" border="0" className="rnd-quote p-4">
              <Card.Body className="rnd-quote__body d-flex flex-column justify-content-center bg-white py-4 rounded-top">
                <Card.Text className="rnd-quote__text rnd-quote__text--icon-color mx-auto my-0"><FontAwesomeIcon icon={faQuoteLeft} /></Card.Text>
                  <Card.Title className="rnd-quote__title d-flex flex-row align-items-center mx-auto mb-0 text-dark">
                    <CSSTransition in={this.state.fade} timeout={500} className="rnd-quote__title--fade">
                      <span>{this.state.quote.text}</span>
                    </CSSTransition>
                  </Card.Title>
                <Card.Text className="rnd-quote__text rnd-quote__text--icon-color mx-auto my-0"><FontAwesomeIcon icon={faQuoteRight} /></Card.Text>
                <Card.Text className="rnd-quote__author rnd-quote__author--text-color mx-auto">
                  <CSSTransition in={this.state.fade} timeout={200} className="rnd-quote__author--fade">
                    <span>{this.state.quote.author}</span>
                  </CSSTransition>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="rnd-quote__footer bg-white text-right border-top-0">
                <a className="btn btn-light mx-1" href={tweetUrl} target="_blank" rel="noopener noreferrer" title="Tweet this quote!"><FontAwesomeIcon icon={faTwitter} className="text-black-50" /></a>
                <Button variant="light" className="mx-1 text-black-50" id="new-quote" onClick={this.getQuote}>New Quote</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Container>
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
    autoChangeQuote()
  },[])

  const autoChangeQuote = () => {
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