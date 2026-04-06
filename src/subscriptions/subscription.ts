export abstract class Subscription {
  protected monthlyFee: number


  constructor(monthlyFee: number) {
    this.monthlyFee = monthlyFee
  }

  getMonthlyFee(): number {
    return this.monthlyFee
  }

  getPrice(months:number): number {
    return months * this.monthlyFee
  }

  abstract getPlanName():string
}