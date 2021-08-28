import React from 'react'
import {useRouter} from 'next/router'

import routes from 'utils/routes'
import {footerIds} from 'utils/ids'
import {FOOTER_LOGO} from '../../utils/assets'

import styles from './Footer.module.scss'

const Footer = (): JSX.Element => {
  const router = useRouter()
  const onClickLogoHandler = () => router.push(routes.landing)

  return (
    <footer id={footerIds.container} className={styles.footer}>
      <hr className={styles.horizontal_separator} />
      <div id={footerIds.link} className={styles.actions_container}>
        <img
          aria-hidden="true"
          className={styles.footer_logo_img}
          src={FOOTER_LOGO}
          alt="mobdev footer"
          onClick={onClickLogoHandler}
        />
      </div>
    </footer>
  )
}

export default Footer
