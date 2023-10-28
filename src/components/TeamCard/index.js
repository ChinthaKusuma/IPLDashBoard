import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  getData2 = () => {
    const {item} = this.props
    const {id, name, teamImageUrl} = item
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="team">
          <div className="img21">
            <img src={teamImageUrl} alt={name} className="img2" />
          </div>
          <div className="name">
            <p>{name}</p>
          </div>
        </li>
      </Link>
    )
  }

  render() {
    return (
      <div className="li1">
        <div>{this.getData2()}</div>
      </div>
    )
  }
}
export default TeamCard
