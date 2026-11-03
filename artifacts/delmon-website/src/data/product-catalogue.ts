export interface CatalogueProduct {
  name: string;
  origin?: string;
  specification: string;
  remarks?: string;
}

export interface CatalogueGroup {
  id: string;
  title: string;
  products: CatalogueProduct[];
}

// Transcribed from the supplied combined product list. Repeated rows are merged.
// Blank origins remain unspecified; the unlabelled 10 mm row is not attributed.
export const productCatalogue: CatalogueGroup[] = [
  {
    id: 'reinforcement',
    title: 'Steel & Reinforcement',
    products: [
      { name: 'Deformed Steel Bars', origin: 'UAE', specification: '8–32 mm' },
      { name: 'Deformed Steel Bars', origin: 'Bahrain', specification: '8–32 mm' },
      { name: 'Deformed Steel Bars', origin: 'Saudi Arabia', specification: '10–25 mm' },
      { name: 'Deformed Steel Bars', origin: 'Qatar', specification: '8–32 mm' },
      { name: 'Welded Wire Mesh', origin: 'Saudi Arabia', specification: '8 mm, 10 mm', remarks: 'Grade A' },
      { name: 'Binding Wire', origin: 'China · Diamond', specification: '20 gauge · 6 kg', remarks: 'Galvanised' },
    ],
  },
  {
    id: 'solid-timber',
    title: 'Timber & Joinery',
    products: [
      { name: 'White Wood', origin: 'Austria', specification: '1×2, 2×2, 2×3, 2×4, 2×6, 2×8, 2×10, 2×12, 3×3, 3×4, 3×6, 4×4', remarks: '4 metre lengths. Section-size units are not specified in the list.' },
      { name: 'Meranti', origin: 'Malaysia', specification: '2×10, 2×8 · all lengths', remarks: 'Prime quality. Section-size units are not specified in the list.' },
      { name: 'Cherry Wood KD', origin: 'USA', specification: '2 inch', remarks: 'Grade A' },
      { name: 'Maple Wood KD', origin: 'USA', specification: '2 inch', remarks: 'Grade A' },
    ],
  },
  {
    id: 'plywood',
    title: 'Plywood & Marine Ply',
    products: [
      { name: 'Ordinary Plywood', origin: 'China', specification: "4, 6, 12, 18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'Plywood (MR)', origin: 'Malaysia', specification: "4, 6, 9, 12, 18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'Marine Ply (MR) · MR DPLEX', origin: 'China', specification: "18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'Marine Ply (WBP) · DBMPLEX', specification: "18 mm · 4′ × 8′", remarks: 'Grade A · listed for 6–8 reuses' },
      { name: 'Marine Ply (WBP) · Vietnam', origin: 'Vietnam', specification: "18 mm · 4′ × 8′", remarks: 'Grade A · listed for 12 reuses' },
      { name: 'Marine Ply (WBP) · Green PVC', specification: "18 mm · 4′ × 8′", remarks: 'Grade A · listed for 12 reuses' },
      { name: 'PVC Plywood · White', specification: '4 mm', remarks: 'Grade A' },
      { name: 'Oak Plywood', specification: '4 mm × 3 × 7', remarks: 'Grade A · sheet-size units are not specified in the list' },
      { name: 'Teak Plywood', specification: '4 mm × 3 × 7', remarks: 'Grade A · sheet-size units are not specified in the list' },
    ],
  },
  {
    id: 'mdf',
    title: 'MDF & Chip Board',
    products: [
      { name: 'MDF Plain', origin: 'Malaysia', specification: "3, 4, 6, 9, 11, 12, 17, 18, 25 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'MR MDF', origin: 'Malaysia', specification: "12, 18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'Melamine MDF · 1 Side', origin: 'Malaysia', specification: "18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'Melamine MDF · 2 Sides', origin: 'Malaysia', specification: "18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'MDF Oak · 1 Side', origin: 'Malaysia', specification: "12, 18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'MDF Oak · 1 Side', specification: "4, 6 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'MDF Oak · 2 Sides', origin: 'Malaysia', specification: "18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'MDF Oak · 2 Sides', specification: "12 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'Chip Board', specification: '38 mm', remarks: 'Grade A' },
    ],
  },
  {
    id: 'finishing',
    title: 'Putty, Adhesives & Block Laying',
    products: [
      { name: 'CP Wall Care Putty', origin: 'India · Compac', specification: '5 kg bag, 20 kg bag' },
      { name: 'CP Tile Adhesive C500 · Grey', origin: 'India · Compac', specification: '25 kg bag' },
      { name: 'CP Tile Adhesive C500 · White', origin: 'India · Compac', specification: '20 kg bag' },
      { name: 'CP Tile Adhesive C800 · White', origin: 'India · Compac', specification: '25 kg bag' },
      { name: 'CP Lightweight Block Laying LW BM', origin: 'India · Compac', specification: '20 kg bag' },
    ],
  },
  {
    id: 'insulation',
    title: 'Insulation & Expansion Boards',
    products: [
      { name: 'Bitumen Expansion Board', origin: 'India · Jollyboard', specification: "18 mm · 4′ × 8′", remarks: 'Grade A' },
      { name: 'Extruded Polystyrene Board', origin: 'Saudi Arabia', specification: '5 × 60 × 125 cm' },
      { name: 'Eco Board', origin: 'Saudi Arabia', specification: '5 × 60 × 120 cm' },
    ],
  },
];
