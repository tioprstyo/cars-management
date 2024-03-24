
import { atom } from 'recoil';

export const fuelTypes = atom({
  key: 'fuelTypes',
  default: [
    'gas', 'diesel', 'electricity'
  ]
});