import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter): void;
  attack(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;