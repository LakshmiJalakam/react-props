import React from 'react'
class Demo extends React.Component{
	state={
		g:this.props.name
	}
	render(){
		return(
			<div>
			<h1>{this.state.g}</h1>
			</div>
			)
	}
}
export default Demo