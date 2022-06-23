import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: '', markAppointment: false}

  onChangeTitle = event => this.setState({title: event.target.value})

  onChangeDate = event => this.setState({date: event.target.value})

  addAppointments = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {id: uuidv4(), title, date, isMark: false}
    this.setState(prev => ({
      appointmentList: [...prev.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onClickStatMark = id => {
    this.setState(prev => ({
      appointmentList: prev.appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isMark: !each.isMark}
        }
        return each
      }),
    }))
  }

  onMarkedAppointment = () => {
    this.setState(prev => ({markAppointment: !prev.markAppointment}))
  }

  render() {
    const {title, date, appointmentList, markAppointment} = this.state
    const allAppointmentsList =
      markAppointment === true
        ? appointmentList.filter(each => each.isMark === true)
        : appointmentList
    const markBtn = markAppointment === true ? 'mark-button' : ''

    return (
      <div className="appointment-page-container">
        <div className="page-container">
          <div className="user-filed-container">
            <div className="user-container">
              <h1 className="header">Add Appointment</h1>
              <form className="form-control" onSubmit={this.addAppointments}>
                <div>
                  <label htmlFor="title">TITLE</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Title"
                    id="title"
                    value={title}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div>
                  <label htmlFor="date">DATE</label>
                  <br />
                  <input
                    type="date"
                    placeholder="dd/mm/yy"
                    id="date"
                    value={date}
                    onChange={this.onChangeDate}
                  />
                </div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div className="card-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="appointments"
                className="user-field-image"
              />
            </div>
          </div>
          <hr />
          <div className="all-appointments-header-card">
            <h1 className="appoint-header">Appointments</h1>
            <button
              type="button"
              className={`star-button ${markBtn}`}
              onClick={this.onMarkedAppointment}
              testid="star"
            >
              Starred
            </button>
          </div>

          <ul className="appointments-container">
            {allAppointmentsList.map(eachAppointment => (
              <AppointmentItem
                eachAppointment={eachAppointment}
                key={eachAppointment.id}
                onClickStatMark={this.onClickStatMark}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
