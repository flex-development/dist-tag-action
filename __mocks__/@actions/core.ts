/**
 * @file Mocks - @actions/core
 * @module mocks/actions/core
 * @see https://github.com/actions/toolkit/tree/main/packages/core
 */

export const getInput = vi.fn(() => '').mockName('getInput')
export const setFailed = vi.fn().mockName('setFailed')
export const setOutput = vi.fn().mockName('setOutput')
