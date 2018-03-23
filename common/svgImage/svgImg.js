/**
 * Created by JieLi on 2017/11/18.
 */

import React from 'react'

const SvgImg = (props) => {
  return (
    <svg className={props.className} aria-hidden="true" style={props.style}>
      <use xlinkHref={props.xlinkHref}></use>
    </svg>
  )
}
export default SvgImg
