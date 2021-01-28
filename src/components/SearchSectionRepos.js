import React from 'react';
import { connect } from 'react-redux';
import { setSearchLine } from '../redux/actions';
import '../styles/search.css';

const SearchSectionRepos = (props) => {
    const changeHandler = (event) => {
        props.setSearchLine(event.target.value);
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

const mapStateToProps = (state) => {
    return {
        value: state.user.searchLine
    }
}

const mapDispatchToProps = {
    setSearchLine
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSectionRepos);