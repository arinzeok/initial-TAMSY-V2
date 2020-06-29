export class singleEquipmentNode {
  key = undefined;
  id = '';
  details = {
    equipmentType: '',
  equipmentRegulatoryName: '',
    commercialName: '',
    functionOfTheEquipment: '',
    nameOfTheManufacturer: '',
    yearOfManufacture: undefined,
    addressOfTheManufacturer: ''
  };
  children: Array<singleEquipmentNode> = [];

  constructor(key: number, id: string, equipmentRegulatoryName: string) {
    this.key = key;
    this.id = id;
    this.details.equipmentRegulatoryName = equipmentRegulatoryName;
  }
}
