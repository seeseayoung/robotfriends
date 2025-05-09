import React,{Component} from 'react';

class Error extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
		  error: false
		};
	}

	componentDidCatch(error, info){
		this.setState({error:true});
	}

	render(){
		if(this.state.error){
			return <h1>ooooo,have error</h1>
		}else{
			return this.props.children
		}
	}
}

export default Error;