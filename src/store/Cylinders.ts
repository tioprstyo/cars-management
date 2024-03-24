
import { atom } from 'recoil';

export const cylinders = atom({
  key: 'cylinders',
  default: [
    '2', '3', '4', '6', '10', '12'
  ]
});