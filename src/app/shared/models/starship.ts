import {Film} from "./film";

export interface StarShip {
  name: string;
  starship_class: string;
  passengers: number[];
  length: number;
  created: Date;
  model?: string;
  manufacturer?: string;
  cost_in_credits?: string;
  crew?: string;
  max_atmosphering_speed?: string;
  hyperdrive_rating?: string;
  MGLT?: string;
  cargo_capacity?: string;
  consumables?: string;
  url?: string;
  films?: Film[];
}
