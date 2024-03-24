import { atom } from 'recoil';

export const brandSelected = atom({
  key: 'brandSelected',
  default: 'toyota' as string
});