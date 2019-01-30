import { PricingRoutingModule } from './pricing-routing.module';

describe('PricingRoutingModule', () => {
  let pricingRoutingModule: PricingRoutingModule;

  beforeEach(() => {
    pricingRoutingModule = new PricingRoutingModule();
  });

  it('should create an instance', () => {
    expect(pricingRoutingModule).toBeTruthy();
  });
});
