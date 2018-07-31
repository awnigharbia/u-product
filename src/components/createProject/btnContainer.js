import React, {Component} from 'react'
import { Loader, success, error} from '..'

const BtnContainer = Btn =>
    class extends Component {
        render()  {
            return <Btn {...this.props}/>
        }
    }

class BtnSwitch extends Component {

    Default = () => <button className='btn-form' onClick={this.props.handleClick}>Finish</button>
    
    Loading = () => <button className='btn-form' onClick={this.props.handleClick}><img src={Loader} alt={Loader} /></button>

    Success = () => <button className='btn-form success' onClick={this.props.handleClick}><img src={success} alt={success} /></button>

    Error = () => <button className='btn-form error' onClick={this.props.handleClick}><img src={error} alt={error} /></button>

    handleState = state => {
        switch(state) {
            case 'Default': return this.Default();
            case 'Loading': return this.Loading();
            case 'Success': return this.Success();
            case 'Error': return this.Error();
            default: return this.Default()
        }
    }

    render() {
         const {state} = this.props
        
         return this.handleState(state);
    }
}

export default BtnContainer(BtnSwitch)