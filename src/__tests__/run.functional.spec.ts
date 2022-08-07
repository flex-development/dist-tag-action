/**
 * @file Functional Tests - run
 * @module dtag-action/tests/functional/run
 */

import { getInput, setFailed, setOutput } from '@actions/core'
import dtag from '@flex-development/dtag'
import { Mock } from 'vitest'
import testSubject from '../run'

vi.mock('@actions/core')
vi.mock('@flex-development/dtag')

describe('functional:run', () => {
  beforeEach(() => {
    testSubject()
  })

  it('should get user inputs', () => {
    expect(getInput).toHaveBeenCalledTimes(2)
    expect(getInput).toHaveBeenCalledWith('delimiter')
    expect(getInput).toHaveBeenCalledWith('target')
  })

  it('should perform lookup', () => {
    expect(dtag).toHaveBeenCalledOnce()
    expect(dtag).toHaveBeenCalledWith({ delimiter: undefined, target: '' })
  })

  it('should set outputs', () => {
    expect(setOutput).toHaveBeenCalledTimes(2)
    expect(setOutput).toHaveBeenCalledWith('flag', '')
    expect(setOutput).toHaveBeenCalledWith('tag', '')
  })

  it(`should set action status to ${pf('failed')} if error is thrown`, () => {
    // Arrange
    const error = new Error('test message')
    ;(dtag as Mock).mockImplementationOnce(() => {
      throw error
    })

    // Act
    testSubject()

    // Expect
    expect(setFailed).toHaveBeenCalledOnce()
    expect(setFailed).toHaveBeenCalledWith(error)
  })
})
