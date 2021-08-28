import React, {useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import classnames from 'classnames'

import {headerIds} from '../../utils/ids'
import {LOGO} from '../../utils/assets'
import routes from '../../utils/routes'

import styles from './Header.module.scss'

type HeaderT = {
  sticky: boolean
  logoRedirect: boolean
}

const Header = ({
  sticky = false,
  logoRedirect = false,
}: HeaderT): JSX.Element => {
  const router = useRouter()
  const ref = useRef<HTMLElement>(null)

  const classHeader = classnames(styles.header, {
    [styles.header_sticky]: !!sticky,
  })

  const classLogo = classnames(styles.header_logo, {
    [styles.header_logo_redirect]: logoRedirect,
  })

  useEffect(() => {
    const headerRef = ref.current
    const headerHeight = 80
    let timeOutEnd: any

    const onScroll = () => {
      const currentYPosition = window.pageYOffset

      clearTimeout(timeOutEnd)

      if (currentYPosition > headerHeight) {
        headerRef?.classList.add(styles.header_scrolled)
      } else {
        headerRef?.classList.remove(styles.header_scrolled)
      }
    }

    if (sticky) {
      window.addEventListener('scroll', onScroll)
      onScroll()
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onClickLogoHandler = () => {
    if (logoRedirect) {
      router.push(routes.landing)
    }
  }

  return (
    <>
      <header id={headerIds.container} ref={ref} className={classHeader}>
        <div id={headerIds.link} className={classLogo}>
          <img
            aria-hidden="true"
            className={styles.header_logo_img}
            src={LOGO}
            alt="mobdev header"
            onClick={onClickLogoHandler}
          />
        </div>
      </header>
    </>
  )
}

export default Header
