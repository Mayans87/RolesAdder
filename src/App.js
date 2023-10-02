import React ,{useState}from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {
  const [usersList,setUsersList] = useState([]);
  function UserHandler(nameparam,ageparam){
    setUsersList((prevState)=>{return [...prevState,{name:nameparam,age:ageparam}]});
  }
  function errorhandler(e){
    console.log(e);
  }
  return (
    <div>
<AddUser onAddUser={UserHandler} onError={errorhandler}/>
<UsersList users={usersList}/>
    </div>
    
  );
}

export default App;
