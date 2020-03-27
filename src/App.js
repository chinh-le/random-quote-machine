import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'

import QuoteComponent from './components/QuoteComponent'

// import 'bootstrap/dist/css/bootstrap.min.css' // not required if use Bootstrap Sass
import './bootstrap_custom.scss';
// import './App.css';
// import './App.scss';

function App() {
  return (
    <Container fluid id="quote-box" className="alert-dark">
      <Col sm={9} md={7} lg={5} xl={4} className="m-auto">
        <QuoteComponent />
      </Col>
    </Container>
  );
}

export default App;
