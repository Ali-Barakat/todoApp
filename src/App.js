import React, {Component} from 'react';
import AddItems from './Components/AddItems/AddItems';
import TodoItems from './Components/TodoItems/TodoItems';


class App extends Component {

  state = {
    items: [
      {id: 1, name: 'Bas', age: 33},
      {id: 2, name: 'Denis', age: 34},
      {id: 3, name: 'Vasili', age: 35}
    ],
    img: [
      {id: 1, src: 'files/images.photo.jpg'}
    ]
  }

  deleteItem = (id)=>{
    let items = this.state.items.filter(item =>{
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items
    items.push(item)
    this.setState({items})
  }




  // addItem = (item) =>{
  //   item.id = Math.random();
  //   let items = this.state.items
  //   items.push(item)
  //   this.setState({items})

  //   console.log(this.state.items)


  // }

  render(){
    return (
      <div className="container">
        TodoList App
        <TodoItems items ={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
