import React from 'react';

const RepoItem = (props) => {
    const clickHandler = (url) => {
        window.open(url);
    }
    return (
        <li className = 'repo-item' onClick = {() => clickHandler(props.url)}>
            <div className = 'name'>
                {props.name}
            </div>
            <div className = 'data'>
                <div className = 'forks'>{props.forks} Forks</div>
                <div className = 'stars'>{props.stars} Stars</div>
            </div>
            
        </li>
    )
}

export default RepoItem;