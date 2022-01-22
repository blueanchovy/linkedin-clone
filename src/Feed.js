import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post.js'
import { useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";
import InputOption from './InputOption.js';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from './firebase.js';
import { query, orderBy, collection, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";

function Feed() {

    const user = useSelector(selectUser);

    const [ posts, setPosts ] = useState([]);
    const [ input, setInput ] = useState('');

    useEffect(() => {

        const postsRef = collection(db, 'posts');
        const q = query(postsRef, orderBy("timestamp", "desc"));

        onSnapshot(q, (snapshot) =>
         setPosts(snapshot.docs.map((doc) => ({
           id : doc.id,
           data : doc.data()
        }
        ))));
    }, []);

    const sendPost = (async (e) => {
        e.preventDefault();

        await addDoc(collection(db, 'posts'), {
            name : user.displayName,
            description : user.email,
            message : input,
            photoUrl: user?.photoUrl || "",
            timestamp : serverTimestamp()
        });
        setInput('');
    })

    return (

        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />

                    <form>
                        <input value={input} onChange={ e=> setInput(e.target.value) } type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>

                </div>

                <div className="feed__inputOptions">
                        <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
                        <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
                        <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
                        <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7fc15e' />
                </div>

            </div>

            {/* Posts */}

            {posts.map(({ id, data: {name, description, message, photoUrl } }) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

        </div>
    )
}

export default Feed
