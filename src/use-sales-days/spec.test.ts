import useSalesDays  from '.'
import { renderHook } from '@testing-library/react-hooks'

describe("useSalesDays spec", () => {

  test('It should accept an array of days as numbers', () => {
    const date = new Date();
    const today = date.getDay();
    const tomorrow = today + 1;
    const { result } = renderHook(() => useSalesDays([tomorrow, today]))
    expect(result.current).toBe(true)
  })

  test('It should return false if tomorrow is included in the workingDays params', () => {
    const date = new Date();
    const tomorrow = date.getDay() + 1;
    const { result } = renderHook(() => useSalesDays([tomorrow]))
    expect(result.current).toBe(false)
  })

  test('It should return true if today is included in the workingDays params', () => {
    const date = new Date();
    const today = date.getDay();
    const { result } = renderHook(() => useSalesDays([today]))
    expect(result.current).toBe(true)
  })
})
