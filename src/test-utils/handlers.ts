// eslint-disable-next-line import/no-extraneous-dependencies
import {rest} from 'msw'

import {DOG_API_URL} from '../utils/constants'
import {mockedBreeds, mockedImages} from '../__mocks__/mocks'

const handlers = [
  rest.get(`${DOG_API_URL}breeds/list/all`, (_req, res, ctx) => {
    return res(ctx.json(mockedBreeds))
  }),
  rest.get(`${DOG_API_URL}breed/buhund/norwegian/images`, (_req, res, ctx) => {
    return res(ctx.json(mockedImages))
  }),
]

export default handlers
