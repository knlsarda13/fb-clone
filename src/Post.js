import React from 'react'
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({profilePic, image, userName, timestamp, message}) {

    
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />

                <div className="post__Topinfo">
                    <h3>{userName} </h3>
                    <p> {new Date(timestamp?.toDate()).toUTCString()} </p>
                </div>
            </div>

            <div className="post__bottom">
                <p> {message} </p>
            </div>

            <div className="post__image">
                <img src= {image}  />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p> Like </p>
                </div>

                <div className="post__option">
                    <ChatBubbleIcon />
                    <p> Comment </p>
                </div>

                <div className="post__option">
                    <NearMeIcon />
                    <p> Share </p>
                </div>

                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
            
        </div>
    );
}

export default Post
