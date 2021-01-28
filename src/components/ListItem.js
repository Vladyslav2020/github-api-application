import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { downloadUserData } from '../redux/actions';
import '../styles/usersList.css';

const ListItem = (props) => {
    const clickHandler = (userName) => {
        props.downloadUserData(userName);
    }
    return (
        <Link to = '/repos'>
            <li className = 'user-item' onClick = {() => clickHandler(props.login)}>
                <div className = 'avatar'><img src = {props.avatar_url} /></div>
                <div className = 'user-name'>{props.userName}</div>
                <div className = 'repos'>Repo: {props.repos_cnt}</div>
            </li>
        </Link>   
    )
}

const mapDispatchToProps = {
    downloadUserData
}

export default connect(null, mapDispatchToProps)(ListItem);