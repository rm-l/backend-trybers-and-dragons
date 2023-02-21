import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  constructor(name:string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this.name;
  }

  get cost(): number {
    return this.cost;
  }

  get special(): number {
    return this.special;
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;