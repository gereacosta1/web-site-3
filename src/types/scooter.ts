export interface Scooter {
  id: number;
  name: string;
  description: string;
  image: string;
  year: number;
  price: string;
  specs: {
    range: string;
    speed: string;
    power: string;
  };
}