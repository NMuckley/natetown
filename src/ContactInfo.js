import React from 'react'
import Card from './Card'

// const ContactInfo = (props) => {
//   const name = props.name
//   const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
	
//   return (
// 		<div>
//       {name.length < 6 && <h2>Name: {capitalizedName}</h2>}
// 		</div>
// 	)
// }

class ContactInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
    }
  }

  handleClick = () => {
    const name = this.state.name
    const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)
    this.setState({
      name: capitalizeName,
    })
  }

  unCap = () => {
    const name = this.state.name
    const lowercase = name.charAt(0).toLowerCase() + name.slice(1)
    this.setState({
      name: lowercase,
    })
  }

  render() {
    return (
      <Card>
        <h2>{this.state.name}</h2>
        <button onClick={this.handleClick}>capitalize</button>
        <button onClick={this.unCap}>lowercase</button>
      </Card>
    )
  }
}

export default ContactInfo