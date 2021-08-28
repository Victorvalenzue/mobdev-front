/* eslint-disable react/no-array-index-key */
import React from 'react'

import Text from 'components/Text'

import {productsIds} from 'utils/ids'
import styles from './ImagesList.module.scss'

interface ImagesListT {
  breedName: string
  images: string[]
}

const ImagesList = ({breedName, images}: ImagesListT): JSX.Element => {
  return (
    <>
      <div id={productsIds.container} className={styles.images_container}>
        <Text text={breedName.toUpperCase()} className={styles.breed_name} />
        {images.map((url: string, index: number) => (
          <img
            key={`image_link_${index}`}
            className={styles.image_dog}
            src={url}
            alt="mobdev dog"
          />
        ))}
      </div>
    </>
  )
}

export default ImagesList
