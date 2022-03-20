import {Planet} from "./planet";
import {StarShip} from "./starship";
import {People} from "./people";

export interface Film{
  title: string;
  episode_id: number;
  producer: string;
  opening_crawl: string;
  release_date: Date;
  url: string;
  planets: string[];
  starships: string[];
  peoples: string[]
}

