import React, {ReactNode} from 'react'

import styles from './Layout.module.scss'

interface ILayout {
  id: string
  children: ReactNode
}

const Layout = ({id, children}: ILayout): JSX.Element => {
  return (
    <div id={id} className={styles.layout_container}>
      {children}
    </div>
  )
}

export default Layout
