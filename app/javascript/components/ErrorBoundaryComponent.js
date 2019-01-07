import React from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundaryComponent extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   errorFound: false
  };
 }
componentDidCatch(error, info) {
  this.setState({
   errorFound: true
  });
  console.log('error: ', error);
  console.log('info: ', info);
 }
render() {
  if (this.state.errorFound) {
   return <p>Error caught!</p>;
  }
return this.props.children;
 }
}

export default ErrorBoundaryComponent;