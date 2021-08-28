// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom'

import {server} from './src/test-utils/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
