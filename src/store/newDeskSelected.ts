import { atom } from 'recoil';

export const newDesksSelected = atom({
  key: 'newDesksSelected',
  default: [] as string[]
});