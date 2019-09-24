import React from 'react';
import { withRouter } from 'react-router-dom';
import demouser from '../../demo-user.png'
import graph from '../../gray-bar-chart.png'
import './profile.css';



class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLanguage: ''
    }
  }

  componentWillMount() {
  }

  componentDidMount(){
  }
  
  
  render() {
   return (
    <div className="profile-container">
       <div id="blue-background-image">
       </div>

       <div className="profile-left-bar">

         <div id="profile-presentation">
           <img id="profile-presentation-profile-picture" src={demouser}/>
             <h2 id="username">Demo User</h2>
  
           <div id="levels">
             <h1 id="levels-title">Level</h1>
             <h3 id="level-x-target">1</h3>
             <h3 id="level-x">2</h3>
             <h3 id="level-x">3</h3>
             <h3 id="level-x">4</h3>
             <h3 id="level-x">5</h3>
           </div>

           <div id="progress">
             <progress id="user-progress" value="44" max="100"></progress>
             <h3 id="exercises-completed">44/100</h3>
             {/* <!-- The value will be updated based on each user --> */}
            </div>
           <div>
             <dl>
               <dt id="minutes-practiced-title">Minutes practiced this week</dt>
               <div id="progress-chart-container">
                 <img id="chart" src={graph}/>
                   {/* <!-- WHERE THE CHART WILL BE LIVING - look for cool animations when the page refreshes--> */}
                    </div>
                  </dl>
                </div>
              </div>
           </div>

           <div id="top-right-container">
             <button id="continue-learning">Continue learning</button>
             <button id="join-contest">Join contest</button>
             <div id="star">⭐</div>
             <div id="contest-container">
               <div id="trophee">🏆</div>
               <h3 id="number-of-wins">0 wins</h3>
             </div>
             <div id="points-earned-container">
               <div id="plus-points">✛</div>
               <h3 id="points-earned">10 points earned</h3>
             </div>
             <div id="bottom-right-container">
               <table id="table">
                 <tr id="headers-row">
                   <th id="header-table-text">Problem</th>
                   <th id="header-table-text">Date</th>
                   <th id="header-table-text">Time completed</th>
                   <th id="header-table-text">Thumbs up</th>
                 </tr>
                 <tr id="row-number">
                   <td>1</td>
                   <td>00-00-0000</td>
                   <td>2:03</td>
                   <td>3</td>
                 </tr>

                 <tr id="row-number">
                   <td>2</td>
                   <td>00-00-0000</td>
                   <td>2:03</td>
                   <td>3</td>
                 </tr>

                 <tr id="row-number">
                   <td>3</td>
                   <td>00-00-0000</td>
                   <td>2:03</td>
                   <td>3</td>
                 </tr>

                 <tr id="row-number">
                   <td>4</td>
                   <td>00-00-0000</td>
                   <td>2:03</td>
                   <td>3</td>
                 </tr>

                 <tr id="row-number">
                   <td>5</td>
                   <td>00-00-0000</td>
                   <td>2:03</td>
                   <td>3</td>
                 </tr>

               </table>
             </div>
           </div>
         </div>
    // </div>
   )
  }
}

export default withRouter(Profile);