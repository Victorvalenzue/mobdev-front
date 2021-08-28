import {BreedServiceResponse} from 'types/breeds'

const {DOG_API_URL} = process.env
export const DOG_API_SUCCESS = 'success'

export const getBreeds = (): Promise<BreedServiceResponse> =>
  fetch(`${DOG_API_URL}breeds/list/all`).then(data => data.json())

export const getImages = (breed: string): Promise<BreedServiceResponse> => {
  return fetch(`${DOG_API_URL}breed/${breed}/images`).then(data => data.json())
}

export default getBreeds
