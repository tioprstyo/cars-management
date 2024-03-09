import { atom } from 'recoil';

export const newDesks = atom({
  key: 'newDesks',
  default: [
    'politics', 'national', 'business', 'culture', 'washington'
  ]
});