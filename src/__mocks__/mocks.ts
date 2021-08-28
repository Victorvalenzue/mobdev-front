import {BreedImageResponse, BreedServiceResponse} from 'types/breeds'

export const mockedBreeds: BreedServiceResponse = {
  message: {
    buhund: ['norwegian'],
  },
  status: 'success',
}

export const mockedImages: BreedImageResponse = {
  message: [
    'https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg',
    'https://images.dog.ceo/breeds/buhund-norwegian/hakon2.jpg',
    'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg',
  ],
  status: 'success',
}
