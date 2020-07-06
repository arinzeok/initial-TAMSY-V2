export class SpecificationStandard {
  id: number;
  specificationTitle: string;
  EN50360: string;
  EN50361: string;
  EN50364: string;
  EN50371: string;
  EN55011: string;

  constructor(id: number, specificationTitle: string, EN50360: string, EN50361: string, EN50364: string, EN50371: string, EN55011: string) {
    this.id = id;
    this.specificationTitle = specificationTitle;
    this.EN50360 = EN50360;
    this.EN50361 = EN50361;
    this.EN50364 = EN50364;
    this.EN50371 = EN50371;
    this.EN55011 = EN55011;
  }
}
