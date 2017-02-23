/**
 * Created by aviklar10 on 22/02/2017.
 */
import React, {Component} from 'react';

class SearchBar extends Component { // extends Component gives me the Component abilities
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    //when user prints something on the screen the following occurs:
    /*  1. onChange event occurs
    *   2. it updates the component state into the term value
    *   3. because of the setState render method is called again and now value keep the previous printed value and then
     *   input is bar is updated with the change*/
    render() {
        return (

            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        )

    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;
