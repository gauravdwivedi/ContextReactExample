import React from 'react';
import LanguageContext from '../contexts/languageContext'
import ColorContext from '../contexts/ColorContext';

class Button  extends React.Component{
    
    renderButtom(color){
        return <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
            {(value)=> this.renderSubmit(value)}
        </LanguageContext.Consumer>
        </button>
    }

    renderSubmit(value){
        return value==='english'?'Submit':'Voorleggen';
    }

    render(){
        
        
        return (
        <ColorContext.Consumer>
        { (color)=>
                    this.renderButtom(color)
        }
        
        </ColorContext.Consumer>)
    }
}


export default Button;