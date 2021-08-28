import React, {useState} from 'react'
import classnames from 'classnames'

import CircularLoader from '../CircularLoader'

import styles from './Loader.module.scss'

interface LoaderT {
  loading: boolean
  className?: string
}

function Loader({loading, className}: LoaderT) {
  const [isLoading, setLoading] = useState(loading)

  const loaderClasses = classnames(styles.go_loader, styles.page_loader, {
    [`${className}`]: !!className,
  })

  return (
    <>
      {isLoading && (
        <div className={loaderClasses}>
          <CircularLoader
            variant="secondary"
            size="xlarge"
            className="loader_page_loader"
          />
        </div>
      )}
    </>
  )
}

export default Loader
