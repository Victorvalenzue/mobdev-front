import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import classnames from 'classnames'

import styles from './Text.module.scss'

interface IText {
  text: string
  className: string
}

function Text({text, className = ''}: IText): JSX.Element {
  const textClasses = classnames(styles.text, {
    [`${className}`]: className,
  })

  return <span className={textClasses}>{ReactHtmlParser(text)}</span>
}

export default Text
