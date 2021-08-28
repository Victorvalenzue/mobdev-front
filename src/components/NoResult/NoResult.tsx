import React from 'react'

import {NO_RESULT} from 'utils/assets'
import {serverErrorContent, withoutContent} from 'utils/texts'

import Text from '../Text'

import styles from './NoResult.module.scss'

type NoResultT = {
  serverError: boolean
}

const NoResult = ({serverError = false}: NoResultT): JSX.Element => {
  return (
    <div className={styles.without_result_container}>
      <div className={styles.withour_result_image_container}>
        <img src={NO_RESULT} alt="mobdev no result" />
      </div>

      {serverError ? (
        <>
          <Text
            className={styles.without_result_title}
            text={serverErrorContent.title}
          />
          <div className={styles.without_separator} />
          <Text
            className={styles.without_result_body}
            text={serverErrorContent.body}
          />
        </>
      ) : (
        <>
          <Text
            className={styles.without_result_title}
            text={withoutContent.title}
          />
          <div className={styles.without_separator} />
          <Text
            className={styles.without_result_body}
            text={withoutContent.body}
          />
        </>
      )}
    </div>
  )
}

export default NoResult
