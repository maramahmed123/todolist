import React ,{Component} from 'react';
import TodoItems from './component/Todoitems/Todoitems'
import AddItems from './component/AddItem/AddItem'


class App extends Component {
  state={
    items:[
      {id:1,name:"Maram",age:23},
      {id:2,name:"Lo",age:23},
      {id:3,name:"Da",age:25},
    ]
  }
  deleteItem =(id) =>{
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id ===id);
    // items.splice(i,1)
    // this.setState({items})
    let items = this.state.items.filter(item => {
      return item.id !==id
    })
    this.setState({items})
  }

  addItem =(item)=>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
    return (
      <div className="App container">
        <h1 className='text-center'>todolist</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItems addItem={this.addItem} />

      </div>
    );
    }

}

export default App;
