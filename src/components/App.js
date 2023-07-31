import './App.css';
import React,{useState, useEffect} from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {uuid} from 'uuidv4';

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts, setContacts]=useState([]);

  const addContactHandler= (contact) => {
    console.log(contact);
    setContacts([...contacts,{ id:uuid(),...contacts}]);
  }

  //we are going to use React hook there name useEffect
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
    }
  }, []);
  
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className="ui container">
      <AddContact addContactHandler={addContactHandler}/>
      <Header />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
