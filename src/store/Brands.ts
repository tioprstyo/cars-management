import { atom } from 'recoil';

export const brands = atom({
  key: 'brands',
  default: [
    'toyota', 'bmw', 'honda', 'mitsubishi', 'suzuki'
  ]
});