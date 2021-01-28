import React from 'react';
import { connect } from 'react-redux';
import { downloadUsers, setUsersSearch } from '../redux/actions';
import '../styles/search.css';

const SearchSection = (props) => {
    const changeHandler = (event) => {
        props.setUsersSearch(event.target.value);
        props.downloadUsers(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form className = 'search' onSubmit = {submitHandler}>
            <input 
                type = 'text'
                value = {props.value}
                placeholder = {props.placeholder}
                onChange = {changeHandler}
            />
        </form>
    )
}

const mapStateToProps = (state) =>{
    return { 
        value: state.usersData.searchLine
    }
}

const mapDispatchToProps = {
    setUsersSearch,
    downloadUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);