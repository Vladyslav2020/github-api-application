import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ReposList from '../components/ReposList';
import SearchSectionRepos from '../components/SearchSectionRepos';
import UserData from '../components/UserData';

const ReposSeachPage = () => {
    return (
        <div className = 'page'>
            <Header />
            <div style={{width: '100%', textAlign: 'center'}}><Link to = '/users' style = {{fontSize: "30px", color: 'blue'}}>
                Home</Link>
            </div>
            <UserData />
            <SearchSectionRepos placeholder = "Search for User's Repositories" />
            <ReposList />
        </div>
    );
}

export default ReposSeachPage;