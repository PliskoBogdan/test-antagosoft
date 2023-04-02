import SectionManager from './SectionManager';

describe('SectionManager', () => {
  let sectionManager;

  beforeEach(() => {
    sectionManager = new SectionManager();
  });

  it('should instantiate a new SectionManager', () => {
    expect(sectionManager).toBeDefined();
  });

  describe('registerCell', () => {
    it('should register a cell with the specified metadata', () => {
      const cellMetadatum = { height: 10, width: 10, x: 0, y: 0 };
      const index = 0;

      sectionManager.registerCell({ cellMetadatum, index });

      expect(sectionManager.getCellMetadata(index)).toEqual(cellMetadatum);
    });
  });

  describe('getSections', () => {
    it('should return all sections overlapping the specified region', () => {
      const cellMetadatum = { height: 10, width: 10, x: 0, y: 0 };
      const index = 0;

      sectionManager.registerCell({ cellMetadatum, index });

      const sections = sectionManager.getSections(cellMetadatum);

      expect(sections.length).toBeGreaterThan(0);
    });
  });

  describe('getTotalSectionCount', () => {
    it('should return the total number of sections', () => {
      const cellMetadatum = { height: 10, width: 10, x: 0, y: 0 };
      const index = 0;

      sectionManager.registerCell({ cellMetadatum, index });

      expect(sectionManager.getTotalSectionCount()).toBe(1);
    });
  });

  describe('getCellIndices', () => {
    it('should return all cell indices contained in the specified region', () => {
      const cellMetadatum = { height: 10, width: 10, x: 0, y: 0 };
      const index = 0;

      sectionManager.registerCell({ cellMetadatum, index });

      const cellIndices = sectionManager.getCellIndices(cellMetadatum);

      expect(cellIndices.length).toBe(1);
      expect(cellIndices[0]).toBe(index);
    });
  });

  describe('getCellMetadata', () => {
    it('should return the metadata for the specified cell index', () => {
      const cellMetadatum = { height: 10, width: 10, x: 0, y: 0 };
      const index = 0;

      sectionManager.registerCell({ cellMetadatum, index });

      const metadata = sectionManager.getCellMetadata(index);

      expect(metadata).toEqual(cellMetadatum);
    });
  });
});