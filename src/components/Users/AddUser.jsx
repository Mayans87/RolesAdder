import React,{useState,useRef} from "react";
import classes from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser=(props)=>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const[EnteredAge,setEnteredAge]=useState('');
    const[EnteredUsername,setEnteredUsername]=useState('');
    const[Error,setError]=useState();
   const addUserHandler=(event)=>{
        event.preventDefault();
        console.log(nameInputRef.current.value);
        if( EnteredAge.trim().length===0 || EnteredUsername.trim().length===0){setError({title:'Invalid Input',message:'Enter Valid Inputs Please!'}); props.onError(Error); return;}
        if(+EnteredAge<1){alert('try again'); return;}
        console.log(EnteredAge,EnteredUsername);
        props.onAddUser(EnteredUsername,EnteredAge)
        setEnteredAge('');
        setEnteredUsername('');


    }
    function errorhandler(){
        setError(null);
    }
    function AgeHandler(e){
        setEnteredAge(e.target.value);
    }
    function UsernameHandler(e){
        setEnteredUsername(e.target.value);
        console.log(e.target.value);
    }
     return( <div>{Error && <ErrorModal title={Error.title} message={Error.message} onconfirm={errorhandler}/>} 
     <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input  id='username' value={EnteredUsername} onChange={UsernameHandler} type="text" ref={nameInputRef} />
    <label htmlFor="age">Age (Years)</label>
    <input  id='age' value={EnteredAge} onChange={AgeHandler} type="number" ref={ageInputRef} />
    <Button type="submit">Add User</Button>
</form></Card></div>)




}
export default AddUser;