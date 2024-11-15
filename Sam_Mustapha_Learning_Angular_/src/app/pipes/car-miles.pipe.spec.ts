import { CarMilesPipe } from './car-miles.pipe';

describe('CarMilesPipe', () => {
  it('create an instance', () => {
    const pipe = new CarMilesPipe();
    expect(pipe).toBeTruthy();
  });
});
