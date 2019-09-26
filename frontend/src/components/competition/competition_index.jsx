import React from 'react';
import './competition.css';
import { withRouter } from 'react-router-dom';
import competition1 from './../../competition1.jpg';
import competition2 from './../../competition2.jpg';
import competition4 from './../../competition4.jpg';



class Competition extends React.Component{
    constructor(props){
        super(props)
    }



render(){
    return(
        <div id="competition-container">
            <div className="background"><p id="trophee-competition">🏆</p>CodeRank Contest</div>
            <button id="there-is-a-contest-coming-in">
                <p id="join-competition">Join this 1 hour contest</p>
                <div id="time-countdown">
                    <p id="contest-number">Weekly Contest 1</p>
                    <p id="starts-in"><i id="clock" class="material-icons">access_time</i>Starts in #countdown</p>
                </div>
            </button>
        </div>
    )
    }
}






export default withRouter(Competition);
