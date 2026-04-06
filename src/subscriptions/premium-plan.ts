import { Subscription } from './subscription'

export class PremiumPlan extends Subscription {
  private discountPercent: number

  constructor(monthlyFee: number = 1500, discountPercent: number = 10) {
    super(monthlyFee)
    this.discountPercent = discountPercent
  }

  getPrice(months: number): number {
    if (months >= 12) {
      const basePrice = months * this.monthlyFee
      return basePrice * (1 - this.discountPercent / 100)
    }
    return months * this.monthlyFee
  }

  getPlanName(): string {
    return 'premium'
  }
}
