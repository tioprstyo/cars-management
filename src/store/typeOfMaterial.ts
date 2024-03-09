import { atom } from 'recoil';

export const typeOfMaterial = atom({
  key: 'typeOfMaterial',
  default: [
    'news',
    'news analysis',
    'an appraisal',
    'archives',
    'artile',
  ]
});