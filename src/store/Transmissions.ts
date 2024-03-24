import { atom } from 'recoil';

export const transmissions = atom({
  key: 'transmissions',
  default: [
    'automatic', 'manual'
  ]
});