<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import axios from 'axios';

import './css/Join.css';
import {withRouter} from "react-router"

const JoinChat = (props) => {

  console.log(props.location.state.idea_id)
  const room = props.location.state.idea_id

  const [name, setName] = useState('');
  // const [room, setRoom] = useState(''); 

  useEffect(() => {
    // make axios request that will access table with all chat messages
    fetch('api/joinchat', {
      method: 'POST',
    })
    })
=======
=======
import React, { useState } from 'react';
>>>>>>> 8e1cb47addd635e6ea0ad92afd4262129202f9c0
import { Link } from 'react-router-dom';

import './css/Join.css';
import { withRouter } from 'react-router';

const JoinChat = (props) => {

  // console.log(props.location.state.idea_id)
  const room = props.location.state.idea_id
  const [name, setName] = useState('');

  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-expressions
  //   fetch('/api/joinchat', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ room })
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMessages({ oldMessages: data });
  //       console.log('FETCH MESSAGES: ', messages);
  //     });
  // }, [name]);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          {/* <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          /> */}
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} 
          to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(JoinChat);
