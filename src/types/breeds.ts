export interface IBreed {
  [x: string]: string[]
}

export interface BreedServiceResponse {
  message: {
    [x: string]: string[]
  }
  status: string
}

export interface BreedImageResponse {
  message: string[]
  status: string
}
