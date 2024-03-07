interface LegacyProps {
  xlarge: string;
  xlargeheight: number;
  xlargewidth: number;
}

export interface MultimediaProps {
  caption: string | null;
  credit: string | null;
  crop_name: string | null;
  height: number;
  legacy: LegacyProps;
  rank: number;
  subType: string;
  subtype: string;
  type: string;
  url: string;
  width: number;
}