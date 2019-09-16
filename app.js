// TODO
/* Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app*/
var GroceryList = (props) => {



  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.grocery[0]}</li>
      <li>{props.grocery[1]}</li>
      <li>{props.grocery[2]}</li>
    </ul>
  );
}

var GroceryListItem = () => (
  <div>
    <h2>My GroceryList List</h2>
    <GroceryList grocery={['Bread', 'Honey', 'Milk']}/>
  </div>
);

ReactDOM.render(<GroceryListItem />, document.getElementById("app"));

