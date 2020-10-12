import React, {Component} from 'react'

// STATE
class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time : props.start,
      showTime: true,
      stop: true

    }
  }

  //Lifecycle
  componentDidMount(){
    this.addInterval = setInterval(()=> this.increase(), 1000)
  }

  componentDidUpdate(){
    if(this.state.stop === true){
      if(this.state.time > 80){
        this.setState({
          stop : false
        })
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){
    //update STATE setiap detik
    this.setState((state, props)=>({
      time: parseInt(state.time) - 1
    }))
  }



  render(){
    return(

      <div style ={{textAlign: "center"}}>
        Hitung Mundur {this.state.time}


      </div>
    )
  }
}

export default Timer