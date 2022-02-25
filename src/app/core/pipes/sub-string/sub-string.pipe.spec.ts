import { SubStringPipe } from './sub-string.pipe';

describe('SubStringPipe', () => {

  let subStringPipe:SubStringPipe;

  beforeEach(()=>{
    subStringPipe = new SubStringPipe();
  })

  it('create an instance', () => {
    const pipe = new SubStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should test SubStringPipe greaterthan 5 character',()=>{
    expect(
      subStringPipe.transform('tranfomer the last night',5)
    ).toBe('tranf...')
  })

  it('should test SubStringPipe less than or equal to 5 character',()=>{
    expect(
      subStringPipe.transform('ninja',5)
    ).toBe('ninja')
  })

});
