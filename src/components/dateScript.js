import * as React from "react"

const DateDE = ({ siteTitle }) => {
  const getDateNow = () => {
    let dayNames = new Array(
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag"
    )
    let monthNames = new Array(
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    )
    let now = new Date()
    let dayOfTheWeek = now.getDay()
    now.setTime(now.getTime() - 0 * 24 * 60 * 60 * 1000)
    return (
      dayNames[now.getDay()] +
        ", " +
        monthNames[now.getMonth()] +
        " " +
        now.getDate() +
        ", " +
        now.getFullYear()
    ) 
  }

  return (
    <span>
      {getDateNow()}
    </span>
  )
}

export default DateDE
