import { Subscription } from './subscription'

export class BasicPlan extends Subscription {
  constructor(monthlyFee: number = 500) {
    super(monthlyFee)
  }

  getPlanName(): string {
    return 'basic'
  }
}
