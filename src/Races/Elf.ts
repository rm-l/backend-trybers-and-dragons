import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _ElfInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    this._ElfInstances += 1;
    return this._ElfInstances;
  }
}
export default Elf;