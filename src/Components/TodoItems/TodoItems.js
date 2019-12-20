import React from 'react';
import './TodoItems.css';

const TodoItems = (props) => {
    const {items, deleteItem} =props;
    let length = items.length;
    const ListItems = length ? (
        items.map(item=>{
            return(
                <div key={item.id}>
                    <span>{item.name} </span>
                    <span>{item.age} </span>
                    <span onClick={()=>deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p>there are no tasks to do</p>
    )

    return(
        <div className="list-items">
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems;