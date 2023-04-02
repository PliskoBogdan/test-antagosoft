import SectionManager from './SectionManager';
import Section from './Section';

describe('SectionManager', () => {
  const SECTION_SIZE = 600;
  let sectionManager;

  beforeEach(() => {
    sectionManager = new SectionManager();
  });

  test('should create an instance with default section size', () => {
    expect(sectionManager).toBeInstanceOf(SectionManager);
    expect(sectionManager._sectionSize).toBe(SECTION_SIZE);
  });

  test('should create an instance with custom section size', () => {
    const customSectionSize = 500;
    const customSectionManager = new SectionManager(customSectionSize);
    expect(customSectionManager._sectionSize).toBe(customSectionSize);
  });

  test('registerCell, freezeCells, and getCellMetadata', () => {
    const cellMetadatum = { height: 100, width: 100, x: 0, y: 0 };
    sectionManager.registerCell({ cellMetadatum, index: 0 });
    sectionManager.freezeCells();
    expect(sectionManager.getCellMetadata(0)).toEqual(cellMetadatum);
    expect(() => {
      sectionManager.registerCell({ cellMetadatum, index: 1 });
    }).toThrowError(TypeError);
  });

  test('getSections', () => {
    const cellMetadatum = { height: 100, width: 100, x: 0, y: 0 };
    sectionManager.registerCell({ cellMetadatum, index: 0 });

    const sections = sectionManager.getSections(cellMetadatum);
    expect(sections.length).toBe(1);
    expect(sections[0]).toBeInstanceOf(Section);
    expect(sections[0].getCellIndices()).toContain(0);
  });

  test('getTotalSectionCount', () => {
    expect(sectionManager.getTotalSectionCount()).toBe(0);

    const cellMetadatum = { height: 100, width: 100, x: 0, y: 0 };
    sectionManager.registerCell({ cellMetadatum, index: 0 });

    expect(sectionManager.getTotalSectionCount()).toBe(1);
  });

  test('getCellIndices', () => {
    const cellMetadatum = { height: 100, width: 100, x: 0, y: 0 };
    sectionManager.registerCell({ cellMetadatum, index: 0 });

    const indices = sectionManager.getCellIndices(cellMetadatum);
    expect(indices.length).toBe(1);
    expect(indices).toContain(0);
  });
});