import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: '',
    }
    
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.term)

    }

    onChange=(e)=>{
        this.setState({term: e.target.value})
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onChange}/>
                    </div>
       
                </form>
            </div>
        )
    }
}

export default SearchBar
