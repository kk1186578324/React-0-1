import React,{Component}from 'react';


class ClickCounter extends Component{

    constructor(props){
        console.log(props)
        super(props);

        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count:0};

    }
    onClickButton(){
        let self = this;
        console.log(this);


        this.setState(
            {
                count:this.state.count + 1
            }
        )
    }

    render(){
        return(
             <div>
                 <button onClick={this.onClickButton}> Click Me</button>
                 <div>
                     Click Count:{this.state.count}
                 </div>
             </div>

        );
    }
}

export default ClickCounter;
