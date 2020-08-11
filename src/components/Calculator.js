import React from 'react';
import './Calculator.css';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.screenStyle = {display: 'inline-flex',
                            backgroundColor: 'rgb(221, 78, 12)',
                            height: '40px',
                            width: '100%',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            right: '5px',
                            fontWeight: 'bold',
                            color: 'white'
                        };
        this.buttonStyle = {display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '48px',
                            height: '48px',
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            borderColor: 'rgb(221, 78, 12)',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                        };

        this.buttons = ['C', '0', '=', '+','7', '8', '9', '-','4', '5', '6', '*','1', '2', '3', '/'];

        this.state = {
            visorContent: '0',
        };

    }

    handleButtons = (button) => {
        if(button === 'C') this.setState({visorContent: '0'});

        else if(button === '='){
            let resultado;
            try{
                resultado = eval(this.state.visorContent)
            }

            catch(err){
                alert('Operação inválida');
                resultado = '0'
            }

            this.setState({visorContent: resultado});
        }

        else this.setState({visorContent: this.state.visorContent === '0' ? button : this.state.visorContent+button});
    };

    render(){
        return (
            <>
                <div className="calculatorWrapper" style={{width: '200px'}}>
                    <div className="screen" style={this.screenStyle}>
                        <span style={{position: 'relative', right: '5%'}}>{this.state.visorContent}</span>
                    </div>
                    <div className="button-container">
                    {this.buttons.map(
                        (item, index) => <div key={index} className="button" style={this.buttonStyle} onClick={() => this.handleButtons(item)}>{item}</div>
                    )}
                    </div>
                </div>
            </>
        );
    }
}

export default Calculator;