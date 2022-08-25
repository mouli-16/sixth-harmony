import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

class QrContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    console.log(result);
    
    this.setState({
      result: (result != null)?result.text:"No result",
    })
  
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 700,
      width: '100%',
      display:'flex',
        "justify-content":"center"
    }

    const camStyle={
      display:'flex',
      justifyContext:"center",
      marginTop:"-50px"
    }

    const textStyle = {
      fontSize:"30px",
      "text-align":"center",
      marginTop:'-50px'
    }

    return(
      <React.Fragment>
        
        { this.state.result=="No result" &&
          <div style={camStyle}>
          <QrReader
          ref = {this.props.qr}
          delay={100}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        </div>}
        <p style={textStyle}>{this.state.result == '123' ? "Verified" : "Not Verified"} </p>  
      </React.Fragment>
    )
  }
}

export default  QrContainer;