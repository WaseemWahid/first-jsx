// import dependencies
import React, {Component} from 'react'

// initiate the class
class FIrstJsx extends Component{
    render(){
        const {title, subtitle, todo} = this.props
        return(
            <div>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <li>{todo}</li>
                
            </div>
        )
    }
}

// export the class
export default FIrstJsx