import React from 'react';
import { withRouter } from 'react-router-dom';
import './editor.css';

import Countdown from '../timer/timer'
import {UnControlled as CodeMirror2} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/moxer.css';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');


// import cd from '../../codemirror/lib/codemirror';


class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // practice: true,
      isWhiteBoardVisible: false
    }
  }
  
  
  componentWillMount() {
    
  }
  componentDidMount() {



  }

  toggleWhiteBoard = () => {
    this.setState(prevState => ({ isWhiteBoardVisible: !prevState.isWhiteBoardVisible}))
  }


  render() {
    const { isWhiteBoardVisible } = this.state;


              // var date = new Date();
              // date.setMinutes(date.getMinutes() + 30);
              // // Set the date we're counting down to
              // var countDownDate = date.getTime();
              // // Update the count down every 1 second
              // var x = setInterval(function () {
              //   // Get today's date and time
              //   var now = new Date().getTime();
              //   // Find the distance between now and the count down date
              //   var distance = countDownDate - now;
              //   // Time calculations for days, hours, minutes and seconds
              //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              //   // Output the result in an element with id="timer"
              //   if (document.getElementById("timer")) {
                
              //   document.getElementById("timer").innerHTML =
              //     + minutes + "m " + seconds + "s "; }

              //   // If the count down is over, write some text 
              //   if (distance < 0) {
              //     clearInterval(x);
              //     document.getElementById("timer").innerHTML = "EXPIRED";
              //   }
              // }, 1000);


              

    return (
      <div id="editor-container">
          <div className="sidebar">
              <div className="question">
                  Question 1
              </div>
              <br/>
              <div className="description">
                  Write a recursive function, binarySearch(sortedArray, target), that returns
                  the index of target in sortedArray, or -1 if it is not found. 
                  <br/>
                  Do NOT use the built-in Array.prototype.indexOf or Array.prototype.includes methods 
                  in your implementation.
                  <br/>
                  <br/>
                  Here's a quick summary of the binary search algorithm:
                
                  Start by looking at the middle item of the array. If it matches the target,
                  return its index. Otherwise, recursively search either the left or the right
                  half of the array until the target is found or the base case (empty array) is
                  reached.
              </div>

              <div id="inner-sidebar">  
                  <button id="button-question-text">Previous</button>
                      {/* This button should be available only starting the second question */}
                  <button id="button-question-text"> Next</button>
                      {/* This button should be showing up after the user clicks Run and passes everything */}
                  <button id="button-question-skip-text">Skip question </button>
                      {/* This button can either make the user move to the next level if he is in the last question or move to next question */}
              </div>
                    <br/> 
                    <p id="skip-all-questions"> Skip all questions and proceed to next level
                    
                    <div > 
                      <button id="button-skip-all"> Skip All </button>
                            {/* This button makes the user move to next level without progress */}
                    </div>
                    </p>
            </div>
             
            <div className="timer-container">
              <Countdown/>
            </div>


            <div className="timer-and-questions"> 
              <div id="questions-editor">

                <div id="questions"> 
                    <a id="question-number" href="#content1">Question 1</a>
                    <a id="question-number" href="#content2">Question 2</a>
                    <a id="question-number" href="#content3">Question 3</a>
                    <a id="question-number" href="#content4">Question 4</a>
                    <a id="question-number" href="#content4">Question 5</a>
                    <a id="question-number" href="#content4">Question 6</a> 
                </div>

            
              </div>
            </div>

          <div className="editor-container">

            <CodeMirror2 id="editor"

              value='function a () { }'
                    
              options={{
              mode: 'javascript',
              theme: 'moxer',
              lineNumbers: true
                }}

              onChange={(editor, data, value) => {
            }}/>



              </div>

              <div id="buttons-below-editor">
                  <div id="button-run-question">
                      <button id="run-text">Run
                      <i class="material-icons" id="play-icon">play_arrow</i></button>
                  </div>
                 
                  <div id="button-see-solution">
                    <button id="solution-text">Solution</button>
                    {/* <button id="solution-text">Submit all</button> */}
                  </div>
              </div>
            

        <i className="icon ion-md-create board-button" id="board-button" onClick={this.toggleWhiteBoard}></i>
          <div  className={`whiteboard${isWhiteBoardVisible ? "" : "hidden"}`} >     
          <textarea id="whiteboard" className="text-area" cols="23" rows="14"> </textarea>          

              {/* <div className="dropdown">
                      <button className="dropbtn">Select Language</button>
                      <div className="dropdown-content">
                      <a className="language" href="#">Javascript </a>
                      <a className="language" href="#">Ruby </a>
                      <a className="language"href="#">SQL</a>
                      </div>
              </div> */}
          
                             
            </div>  
        </div>
    // </div>


    )
  }
}

export default withRouter(Editor);