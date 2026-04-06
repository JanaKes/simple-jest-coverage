import { BasicPlan } from '../../src/subscriptions/basic-plan'
import { PremiumPlan } from '../../src/subscriptions/premium-plan'

describe('Subscription', () => {
  describe('BasicPlan', () => {
    test('returns plan name', () => {
      const plan = new BasicPlan()
      expect(plan.getPlanName()).toBe('basic')
    })

    })

  describe('PremiumPlan', () => {
      test('returns plan name', () => {
        const plan = new PremiumPlan()
        expect(plan.getPlanName()).toBe('premium')
  })
    test('get price for premium plan', () => {
      const plan = new PremiumPlan()
      expect(plan.getPrice(12)).toBe(16200)
})
  })
  })