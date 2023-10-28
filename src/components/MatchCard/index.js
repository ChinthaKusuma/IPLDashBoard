import './index.css'

const MatchCard = props => {
  const {item} = props
  const {
    competingTeam,
    competingTeamLogo,

    matchStatus,
    result,
  } = item
  return (
    <li className="bg1234">
      <img
        src={competingTeamLogo}
        className="img12345"
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>

      {matchStatus !== 'Lost' ? (
        <p className="h12">{matchStatus}</p>
      ) : (
        <p className="h13">{matchStatus}</p>
      )}
    </li>
  )
}
export default MatchCard
