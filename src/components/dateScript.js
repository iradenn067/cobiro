import * as React from "react"

export const DateDE = ({ siteTitle }) => {
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

  return <span>{getDateNow()}</span>
}

export const DateCL = ({ siteTitle }) => {
  const getDateNow = () => {
    let dayNames = new Array(
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado"
    )
    let monthNames = new Array(
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    )
    let now = new Date()
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

  return <span>{getDateNow()}</span>
}

