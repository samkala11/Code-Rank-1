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
      <div>
              <div id="tabs" class="tabsss">
                <div id="menu">
                    <div class="questions"> 
                        <a id="content-1" href="#content1">Question 1</a>
                        <a class="content-2" href="#content2">Question 2</a>
                        <a class="content-2" href="#content3">Question 3</a>
                        <a class="content-2" href="#content4">Question 4</a>
                        <a class="content-2" href="#content4">Question 5</a>
                        <a class="content-2" href="#content4">Question 6</a>
                        <a class="content-2" href="#content4">Question 6</a>
                        <a class="content-2" href="#content4">Question 6</a>
                       

                    </div>

                    <div class="dropdown">
                            <button class="dropbtn">Select Language</button>
                            <div class="dropdown-content">
                            <a class="language" href="#">Javascript </a>
                            <a class="language" href="#">Ruby </a>
                            <a class="language"href="#">SQL</a>
                            </div>
                    </div>
                    <p id="timer"> 30m 0s</p>
                    <i class="icon ion-md-create board-button"  id="board-button"></i>
                </div>         
        </div>

        <div id="container">
            <div class="sidebar">
                <div class="question">
                    Question 1
                </div>
                <br/>
                <div class="description">
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
                <div class="inner-sidebar"> 

                    <div class="button"> 
                        <div id="translate"></div>
                        <a> Previous </a>
                    </div>

                    <div class="button"> 
                            <div id="translate"></div>
                            <a> Next 
                            </a>
               
                    </div>
                    <div class="button skip"> 
                            <div id="translate"></div>
                            <a> Skip Question </a>
                    </div>
                    <br/> 
                    <i class="icon ion-md-arrow"></i>
                    <p class="skip-text"> Skip all questions and proceed to next level
                    
                    <div class="button"> 
                            <div id="translate"></div>
                            <a> Skip All </a>
                    </div>
                    </p>
              </div>
            </div>    
            <div class="edit-cont">  
                <div id="editor">              
                </div>
                <div class="run-submit">          
                    <div class="button run"> 
                            <div id="translate-2"></div>
                            <a> Run Test Cases </a>
                    </div>
                    <div class="button submit"> 
                            <div id="translate-2"></div>
                            <a> Submit All </a>
                    </div>
                </div>
            </div>    
            <div id="white-board" class="white-board">                      
            <textarea class="text-area" value="My Notes" cols="22" rows="14"> </textarea>          
            </div>  
        </div>
    </div>


    )
  }
}

export default withRouter(Editor);