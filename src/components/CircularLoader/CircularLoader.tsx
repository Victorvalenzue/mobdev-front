import React from 'react'
import classNames from 'classnames'

import styles from './CircularLoader.module.scss'

const CircularLoader = ({
  variant = 'primary',
  size = 'large',
  className,
  ...props
}) => {
  const circularClasses = classNames(
    styles['circular_loader'],
    styles[`circular_loader_${variant}`],
    styles[`circular_loader_${size}`],
    {
      [`${className}`]: className,
    },
  )

  return (
    <svg className={circularClasses} viewBox="25 25 50 50" {...props}>
      <circle className={styles.circular_loader__path} cx="50" cy="50" r="20" />
    </svg>
  )
}

export default CircularLoader
