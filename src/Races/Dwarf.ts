import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _DwarfInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    this._DwarfInstances += 1;
    return this._DwarfInstances;
  }
}
export default Dwarf;