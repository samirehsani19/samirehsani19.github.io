import React, {useEffect, useState} from "react";
import { collection, addDoc, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import {db} from './firebase';

// todo function
const Todo = () =>{
    const [todo, setTodo] = useState(""); // used to add new todo
    const [todos, setTodos] = useState([]); // used to read all todos

    const width = '400px';
    const height = '40px';
    const margin = '10px';
    const padding = '10px';

    // add new todo function
    const addTodo = async (e) => {
        try{
            e.preventDefault();
            // add new todo to firebase
            const docRef = await addDoc(collection(db, "todo"), {
                todo: todo,
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (ex){
            console.log("Error adding document: ", ex);
        }
    };

    // read data function
    const getData = async ()=> {
        // read data from firebase
        await getDocs(collection(db, "todo"))
        .then((querySnapshot) => {
           // loop through todos and copy
            const newData = querySnapshot.docs
            .map((doc)=> ({...doc.data(), id: doc.id}));

            setTodos(newData); // pass the data to setTodos function
        });
    };

    // delete a row
    const handleDelete = async function(id){
        await deleteDoc(doc(db, "todo", id));
    }

    // after rendering call this function
    useEffect(()=>{
        getData();
    }, [todos, useState]);

    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">Todo-App</h1>

                <form onSubmit={addTodo} style={{display: 'flex', margin: margin}}>
                    <div className="input-container">
                        <input type="text" style={{width: width, height: height, fontSize: '22px'}}
                            placeholder='what do you want to do?'
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>
                        <div className="btn-container">
                            <button  style={{height:'45px'}} >Add-Todo</button>
                    </div>
                </form>

                
                <div className="todo-content">
                    <table style={{background: 'orange', width: '480px', margin: margin}}>
                        <thead>
                            <tr style={{borderBottom: '1px solid #000', padding: padding}}>
                                <th>Id</th>
                                <th>Todo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos?.map((todo, index)=> 
                                        <tr key={index} style={{background: '#f03fea'}}>
                                            <td>{todo.id}</td>
                                            <td>{todo.todo}</td>
                                            <td>
                                                <button className="button-delete" onClick={()=> handleDelete(todo.id)}>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );

};

export default Todo;