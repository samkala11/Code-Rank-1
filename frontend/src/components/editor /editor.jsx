import React from 'react';
import { withRouter } from 'react-router-dom';
import './editor.css';


class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      practice: true
    }
  }

  componentWillMount() {
    
  }
  componentDidMount() {

  }


  render() {
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
                <div className="inner-sidebar"> 

                    <div className="button"> 
                        <div id="translate"></div>
                        <a> Previous </a>
                    </div>

                    <div className="button"> 
                            <div id="translate"></div>
                            <a> Next 
                            </a>
               
                    </div>
                    <div className="button skip"> 
                            <div id="translate"></div>
                            <a> Skip Question </a>
                    </div>
                    <br/> 
                    <i className="icon ion-md-arrow"></i>
                    <p className="skip-text"> Skip all questions and proceed to next level
                    
                    <div className="button"> 
                            <div id="translate"></div>
                            <a> Skip All </a>
                    </div>
                    </p>
              </div>
          <div id="menu">
              {/* <div className="questions"> 
                  <a id="content-1" href="#content1">Question 1</a>
                  <a className="content-2" href="#content2">Question 2</a>
                  <a className="content-2" href="#content3">Question 3</a>
                  <a className="content-2" href="#content4">Question 4</a>
                  <a className="content-2" href="#content4">Question 5</a>
                  <a className="content-2" href="#content4">Question 6</a>
                  

              </div> */}

              {/* <div className="dropdown">
                      <button className="dropbtn">Select Language</button>
                      <div className="dropdown-content">
                      <a className="language" href="#">Javascript </a>
                      <a className="language" href="#">Ruby </a>
                      <a className="language"href="#">SQL</a>
                      </div>
              </div> */}
              {/* <p id="timer"> 30m 0s</p> */}
              {/* <i className="icon ion-md-create board-button"  id="board-button"></i> */}
        </div>

              <textarea id="codemirror-textarea"> # Enter Code Below </textarea>

          
            <div id="white-board" className="white-board">                      
            <textarea className="text-area" value="My Notes" cols="22" rows="14"> </textarea>          
            </div>  
        </div>
    </div>


    )
  }
}

export default withRouter(Editor);