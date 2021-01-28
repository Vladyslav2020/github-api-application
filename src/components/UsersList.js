import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import '../styles/usersList.css';


const UsersList = (props) => {
    const users = props.users;
    const List = users.length > 0 && users[0].login ? users.map(item =><ListItem key = {item.id} avatar_url = {item.avatar_url}
            userName = {item.userName} repos_cnt = {item.repos_cnt} login = {item.login}
            />): <div key = {0} className = "message">No users</div>
    return (
        <ul className = "users-list">
            {List}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users
    }
}

export default connect(mapStateToProps)(UsersList);