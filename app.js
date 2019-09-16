// TODO
/* Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app*/
var GroceryList = () => (
      <ul>
        <Milk />
        <Bread />
      </ul>
);

var Milk = () => (
  <div>
    <div>Milk</div>
    <div>Cheese</div>
  </div>
);

var Bread = () => (
  <div>Bread</div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));