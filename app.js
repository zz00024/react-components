//Making applications interactive with state
// class GroceryListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li>{this.props.grocery}</li>
//     );

//   }

// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var GroceryList = (props) => (
//   <ul>
//     {props.GroceryItems.map(grocery =>
//       <GroceryListItem grocery={grocery} />
//     )}
//   </ul>
// );

// ReactDOM.render(<GroceryList GroceryItems= {['Milk','Bread','Honey']}/>, document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.GroceryItems}</li>
    );
  }
}

ReactDOM.render(<GroceryListItem GroceryItems= {['Milk','Bread','Honey']}/>, document.getElementById("app"));