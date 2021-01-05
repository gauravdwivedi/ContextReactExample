import React from 'react';
import LanugaugeContext from '../contexts/languageContext';
class Field extends React.Component{

    static contextType = LanugaugeContext;    

    render(){
        const text = this.context==='english'?'name':'naam';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        )
    }
}

export default Field;