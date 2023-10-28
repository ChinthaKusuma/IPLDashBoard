import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {list1: [], isLoad: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedData)
    this.setState({
      list1: updatedData,
      isLoad: false,
    })
  }

  render() {
    const {list1, isLoad} = this.state
    return (
      <div className="bgContainer">
        <Link to="/">
          {isLoad ? (
            <div
              className="loader"
              // testid="loader"
            >
              <Loader type="Oval" height={50} width={50} color="#ffffff" />
            </div>
          ) : (
            <>
              <div className="c1">
                <div className="c11">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                    alt="ipl logo"
                    className="img1"
                  />
                </div>
                <h1 className="heading1">Ipl Dashboard</h1>
              </div>
              <ul className="ul1">
                {list1.map(each => (
                  <TeamCard item={each} key={each.id} />
                ))}
              </ul>
            </>
          )}
        </Link>
      </div>
    )
  }
}
export default Home
