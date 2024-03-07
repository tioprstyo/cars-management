import { ByLineProps } from './ByLineProps'
import { HeadlineProps } from './HeadlineProps';
import { KeywordProps } from './KeyowrdProps';
import { MultimediaProps } from './MultimediaProps';

export interface ArticlesProps {
  abstract: string;
  document_type: string;
  pub_date: string;
  lead_paragraph: string;
  news_desk: string;
  section_name: string;
  snippet: string;
  source: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  byline: ByLineProps
  headline: HeadlineProps;
  keywords: KeywordProps[];
  multimedia: MultimediaProps[];
  _id: string;
}