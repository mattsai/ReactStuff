
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import { useReducer } from 'react';
import { useRef } from 'react';


function App() {
  const [userData, setUserData] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const API = `https://randomuser.me/api/?page=${currentPageIndex}`;
  const fetchUserData = useRef(()=>{});
  const controller = new AbortController();
  const getUserFullName = (body) => {
    return `${body.name.title} ${body.name.first} ${body.name.last}`;
  }

  const getUserPhoto = (body) => {
    return body.picture.thumbnail;
  }

  fetchUserData.current = () => {
    fetch(API, { signal: controller.signal }).then((data) => {
      return data.json()
    }).then(datax => {
      setUserData(prev => ([...prev, ...datax.results]));
    }).catch((err) => console.error(err))
  }
  useEffect(() => {
    console.log('what')
    fetchUserData.current();
    return () => controller.abort();
  }, [currentPageIndex])


  const addAnotherUser = () => {
    console.log("e")
    setCurrentPageIndex(currentPageIndex + 1);
  }

  return (
    <>
      <h1>Magic here</h1>
      <button onClick={() => addAnotherUser()}>add more</button>
      {
      
        userData.map((user, idx) => {
          return <div id={idx}>
            <h2>Hello : {getUserFullName(user)}</h2>
            <img src={getUserPhoto(user)}></img>
          </div>
        })
      }

    </>
  )
}

export default App
