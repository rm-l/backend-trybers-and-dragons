import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._mageInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Ranger._mageInstances;
  }
}

export default Ranger;