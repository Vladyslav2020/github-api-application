import React from 'react';
import { connect } from 'react-redux';
import '../styles/userData.css';

const UserData = (props) => {
    const data = props.data;
    return (
        <div className = 'user-block'>
            <div className = 'user-avatar'><img src = {data.avatar_url}/></div>
            <div className = 'user-data'>
                <div className = 'data-item'>UserName: {data.userName || "no data"}</div>
                <div className = 'data-item'>Email: {data.userEmail || "no data"}</div>
                <div className = 'data-item'>Location: {data.location || "no data"}</div>
                <div className = 'data-item'>JoinDate: {new Date(data.joinDate).toLocaleDateString()}</div>
                <div className = 'data-item'>Followers: {data.followers}</div>
                <div className = 'data-item'>Following: {data.following}</div>
            </div>
            <div className = 'biography'>{data.biography || "no data"}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.user
    }
}

export default connect(mapStateToProps)(UserData);