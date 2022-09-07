import './App.css';
import { useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

function App() {
    const [username, setUserame] = useState('');
    const [room, setRoom] = useState('');

    const joinRoom = () => {
        if (username !== '' && room !== '') socket.emit('join_room', room);
    };

    return (
        <div className='App'>
            <h3>Join Chat</h3>
            <input
                type='text'
                placeholder='username...'
                onChange={(e) => setUserame(e.target.value)}
            />
            <input
                type='text'
                placeholder='room...'
                onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join</button>
        </div>
    );
}

export default App;
