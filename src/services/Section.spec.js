import Section from '@/services/Section';

describe('Section', () => {
  let section;

  beforeEach(() => {
    section = new Section({ height: 10, width: 10, x: 0, y: 0 });
  });

  it('should instantiate Section with correct properties', () => {
    expect(section.height).toBe(10);
    expect(section.width).toBe(10);
    expect(section.x).toBe(0);
    expect(section.y).toBe(0);
    expect(section._indexMap).toEqual({});
    expect(section._indices).toEqual([]);
  });

  it('should add cell index', () => {
    section.addCellIndex({ index: 1 });
    expect(section._indexMap).toEqual({ 1: true });
    expect(section._indices).toEqual([1]);
  });

  it('should not add duplicate cell index', () => {
    section.addCellIndex({ index: 1 });
    section.addCellIndex({ index: 1 });
    expect(section._indexMap).toEqual({ 1: true });
    expect(section._indices).toEqual([1]);
  });

  it('should get all cell indices', () => {
    section.addCellIndex({ index: 1 });
    section.addCellIndex({ index: 2 });
    expect(section.getCellIndices()).toEqual([1, 2]);
  });

  it('toString should return correct representation', () => {
    expect(section.toString()).toBe('0,0 10x10');
  });
});