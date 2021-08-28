/* eslint-disable react/no-array-index-key */
import React, {useEffect, useState} from 'react'

import BreedSelector from 'components/BreedSelector'
import ImagesList from 'components/ImagesList'
import NoResult from 'components/NoResult'
import Loader from 'components/Loader'
import Top from 'components/Top'

import {DOG_API_SUCCESS, getImages, getBreeds} from '../../services/breeds'
import {LOADER_PAGE_DELAY} from '../../utils/constants'
import {IBreed} from '../../types/breeds'

import styles from './Breeds.module.scss'

const Breeds = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true)
  const [madeCall, setMadeCall] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [breedsList, setBreeds] = useState<IBreed>()
  const [responses, setResponses] = useState({})
  const [selected, setSelected] = useState<string[]>([])

  const onErrorReset = () => {
    setMadeCall(true)
    setIsLoading(false)
    setServerError(true)
    setBreeds(null)
  }

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const connectBreeds = async () => {
    try {
      const breeds = await getBreeds()
      const {message, status} = breeds
      if (status !== DOG_API_SUCCESS) {
        onErrorReset()
      }

      setBreeds(message)
    } catch (error) {
      onErrorReset()
    }
  }

  useEffect(() => {
    connectBreeds()
  }, [])

  useEffect(() => {
    let goLoaderTimeout

    if (isLoading) {
      goLoaderTimeout = setTimeout(() => {
        setIsLoading(false)
      }, LOADER_PAGE_DELAY)
    }

    return () => {
      clearTimeout(goLoaderTimeout)
    }
  }, [isLoading])

  const onSelectBreedHandler = async (selection: string[]) => {
    const responsesKeys = Object.keys(responses)

    await Promise.all(
      selection
        .filter((breed: string) => !responsesKeys.includes(breed))
        .map(async filtered => {
          try {
            const isSubBreed = filtered.includes('|')
            const [subName, ancestorName] = isSubBreed
              ? filtered.split('|')
              : [filtered, '']

            if (isSubBreed) {
              const isSelected = selected.includes(ancestorName)
              const oneChild = breedsList[ancestorName].length === 1

              if (isSelected && oneChild) {
                return
              }
            }

            setIsLoading(true)

            const requestBreed = isSubBreed
              ? `${ancestorName}/${subName}`
              : filtered
            const images = await getImages(requestBreed)
            const {message, status} = images

            if (status === DOG_API_SUCCESS) {
              setResponses({...responses, [filtered]: message})
              setIsLoading(false)
            }
          } catch (error) {
            setIsLoading(false)
          }
        }),
    )

    goTop()
    setSelected(selection)
  }

  const renderName = (name: string) => {
    const isSubBreed = name.includes('|')

    return isSubBreed ? name.split('|').shift() : name
  }

  return (
    <>
      {isLoading && <Loader loading={isLoading} />}

      {madeCall && serverError ? (
        <NoResult serverError={serverError} />
      ) : (
        <div className={styles.breeds_container}>
          {breedsList && (
            <BreedSelector
              breedInput={breedsList}
              selectBreedHandler={onSelectBreedHandler}
            />
          )}
          {selected.length > 0 ? (
            <div className={styles.images_container}>
              {Object.keys(responses)
                .filter(response => selected.includes(response))
                .map(
                  (breed: string, index: number) =>
                    selected.includes(breed) && (
                      <ImagesList
                        key={`breed_images_${index}`}
                        breedName={renderName(breed)}
                        images={responses[breed]}
                      />
                    ),
                )}
            </div>
          ) : (
            <NoResult serverError={false} />
          )}
          <Top />
        </div>
      )}
    </>
  )
}

export default Breeds
