import React from 'react';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import UsersList from '../components/UsersList';
import '../styles/page.css';

const UsersSeachPage = () => {
    return (
        <div className = 'page'>
            <Header />
            <SearchSection placeholder = 'Search for Users'/>
            <UsersList />
        </div>
    );
}

export default UsersSeachPage;