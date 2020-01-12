import React from 'react';
import ReactDOM from 'react-dom';

const Container = () => (
  <div>
    <SimpleComponent />
    <SimpleWithProps name={'Waldo'} />
    <ClassBased name={'Laura'} />
    <ClassBasedState />
    <ClassBasedStateProps name={'Garrison'} />
  </div>
)

// stateless functional component w/o props
const SimpleComponent = () => (
  <div>
    <p>I'm a stateless functional component w/o props</p>
  </div>
);

// stateless functional component w/ props
const SimpleWithProps = (props) => (
  <div>
    <p>I'm a stateless functional component w props: {props.name}</p>
  </div>
);

// class based component (with props implicitly)
class ClassBased extends React.Component {
  render() {
    return (
      <div>
				<p>I'm a class-based component and I get props for free: {this.props.name}</p>
      </div>
    )
  }
}

// class based component with state
class ClassBasedState extends React.Component {
  state = {
    something: 'Stately name'
  };
	render() {
    return (
      <div>
				<p>I'm a class-based component with state: {this.state.something}</p>
      </div>
    )
  }
}

// class based component with state that can access props
class ClassBasedStateProps extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			somethingElse: props.name
	  };
	}
	render() {
    return (
      <div>
        <p>I'm a class-based component with state that can access props: {this.state.somethingElse}</p>
      </div>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
