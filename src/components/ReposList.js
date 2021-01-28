import React from 'react';
import { connect } from 'react-redux';
import RepoItem from './RepoItem';
import '../styles/repoList.css';
import '../styles/usersList.css';

const ReposList = (props) => {
    const data = props.data
    let List = data.repos.filter(item => !data.searchLine || item.name.startsWith(data.searchLine)).map(item => <RepoItem name = {item.name} 
    forks = {item.forks} stars = {item.stars} url = {item.url} key = {item.id}/>);
    if (!List.length)
        List = <div className = 'message'>No data</div>;
    return (
        <ul className = 'repos-list'>
            {List}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.user
    }
}

export default connect(mapStateToProps)(ReposList);