// Write your code here
import {Component} from 'react'
// eslint-disable-next-line
import MatchCard from '../MatchCard'
import './index.css'

class LatestMatch extends Component {
  getData1 = () => {
    const {item} = this.props

    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,

      result,
      secondInnings,
      umpires,
      venue,
    } = item

    return (
      <div className="bg111">
        <div className="oneOne">
          <div className="oneBg">
            <div>
              <p>{competingTeam}</p>
              <p>{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
            </div>
            <div className="img1234">
              <img
                src={competingTeamLogo}
                alt={`latest match ${competingTeam}`}
                className="imgImg"
              />
            </div>
          </div>
          <hr />
          <div className="twoBig">
            <p>First Innings</p>
            <p>{firstInnings}</p>
            <p>Second Innings</p>
            <p>{secondInnings}</p>
            <p>Man Of The Match</p>
            <p>{manOfTheMatch}</p>
            <p>umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    // const {item} = this.props
    // const {recentMatches} = item
    return (
      <div>
        <div>{this.getData1()}</div>
      </div>
    )
  }
}
export default LatestMatch
