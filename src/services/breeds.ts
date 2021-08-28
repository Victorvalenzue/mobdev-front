import {BreedImageResponse, BreedServiceResponse} from 'types/breeds'
import {DOG_API_URL} from '../utils/constants'

export const DOG_API_SUCCESS = 'success'

export const getBreeds = (): Promise<BreedServiceResponse> =>
  fetch(`${DOG_API_URL}breeds/list/all`).then(data => data.json())

export const getImages = (breed: string): Promise<BreedImageResponse> => {
  return fetch(`${DOG_API_URL}breed/${breed}/images`).then(data => data.json())
}

export default getBreeds
