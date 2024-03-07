import { PersonProps } from './PersonProps'

export interface ByLineProps {
  organization: string | null;
  original: string;
  person: PersonProps[]
}