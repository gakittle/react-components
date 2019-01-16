var groceryItems = ['milk', 'eggs', 'tater tots', 'frozen pizza'];

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotIt: false
    };
  }

  onListItemClick() {
    this.setState({
      gotIt: !this.state.gotIt
    });
  }

  render() {
    var style = {
      textDecoration: this.state.gotIt ? 'line-through' : 'none'
    };
    var hover = {
      'font-weight': 'bolder'
    };

    return (
      <li
        style={style}
        onClick={this.onListItemClick.bind(this)}
        onmouseover={hover}
      >
        {this.props.food}
      </li>
    );
  }
}

var GroceryList = props => (
  <ul>
    {props.foods.map(food => (
      <GroceryListItem food={food} />
    ))}
  </ul>
);

var App = () => (
  <div>
    <h2>Grocery List </h2>
    <GroceryList foods={groceryItems} />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
