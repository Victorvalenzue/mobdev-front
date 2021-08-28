import React from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import styles from './Top.module.scss'

const Top = (): JSX.Element => {
  const onClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <ChevronRightIcon
      className={styles.menu_icon_close}
      onClick={onClickHandler}
    />
  )
}

export default Top
