/**
 * Created by chenmao on 2018/3/22.
 */
import React from 'react'
const NotesList = (props) => {
  console.log(props)
  return (
    props.children
      ? React.Children.map(props.children, function (child) {
        return <li>{child}</li>
      }) : null
  )
}
export default NotesList
