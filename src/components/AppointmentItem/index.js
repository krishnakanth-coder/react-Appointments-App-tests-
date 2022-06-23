import format from 'date-fns/format'
import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, onClickStatMark} = props
  const {id, title, date, isMark} = eachAppointment
  const onClickStarMark = () => {
    onClickStatMark(id)
  }

  const appointmentDate =
    date !== '' ? format(new Date(date), 'dd MMMM yyyy EEEE') : ''
  console.log(appointmentDate)
  const starMark =
    isMark === true
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="each-appointment">
      <div className="title-card">
        <p className="title">{title}</p>
        <button
          type="button"
          className="button"
          onClick={onClickStarMark}
          testid="star"
        >
          <img src={starMark} alt="star" className="star" />
        </button>
      </div>

      <p className="date-field">{`Date: ${appointmentDate}`}</p>
    </li>
  )
}
export default AppointmentItem
