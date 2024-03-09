import { atom } from 'recoil';

export const materialSelected = atom({
  key: 'materialSelected',
  default: [] as string[]
});