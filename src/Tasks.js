import React from 'react';
import Task from './Task';

export default function Tasks({ tasks, onCheckHandler, deleteHandler }) {
    return (
        <div className="todo-list">
            {
                tasks.map(item => {
                    return (
                        <Task
                            key={item.id}
                            name={item.name}
                            done={item.done}
                            onCheckHandler={onCheckHandler}
                            deleteHandler={deleteHandler}
                            id={item.id}
                        />
                    );
                })
            }
        </div>
    )
}
