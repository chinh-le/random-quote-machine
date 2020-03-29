import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import './QuoteBodyComponent.scss';

const QuoteBodyComponent = (props) => {
    return (
        <Card.Body className="rnd-quote__body d-flex flex-column justify-content-center bg-white py-4 rounded-top">
            <Card.Text className="rnd-quote__text rnd-quote__text--icon-color mx-auto my-0"><FontAwesomeIcon icon={faQuoteLeft} /></Card.Text>
            <Card.Title className="rnd-quote__title d-flex flex-row align-items-center mx-auto mb-0 text-dark">
                <CSSTransition in={props.fade} timeout={500} className="rnd-quote__title--fade">
                    <span id="text">{props.quote.text}</span>
                </CSSTransition>
            </Card.Title>
            <Card.Text className="rnd-quote__text rnd-quote__text--icon-color mx-auto my-0"><FontAwesomeIcon icon={faQuoteRight} /></Card.Text>
            <Card.Text className="rnd-quote__author rnd-quote__author--text-color mx-auto">
                <CSSTransition in={props.fade} timeout={200} className="rnd-quote__author--fade">
                    <span id="author">{props.quote.author}</span>
                </CSSTransition>
            </Card.Text>
        </Card.Body>
    );
};

export default QuoteBodyComponent;