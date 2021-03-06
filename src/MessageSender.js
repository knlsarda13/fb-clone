
import "./MessageSender.css";
import React, { useState } from "react";
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [inputUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //to stop refershing

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            userName: user.displayName,
            image: inputUrl,
        });
        
        // Some clever Database stuff

        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">

            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                    value = {input}
                    onChange= {(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`Whats on your mind, ${user.displayName} ? `} />

                    <input
                        value = {inputUrl}
                        onChange = {(e) => setImageUrl(e.target.value)}
                        placeholder=" Image Url (Optional) " />

                    <button onClick= {handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style = {{color:"red"}} />
                    <h3> Live Video </h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style = {{color:"green"}} />
                    <h3> Photo/Video </h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style = {{color:"orange"}} />
                    <h3> Feeling/Activity </h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
