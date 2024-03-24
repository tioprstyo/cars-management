import { getRecoil } from "recoil-nexus";
import { transmissionSelected, brandSelected, cylinderSelected, fuelTypeSelected } from 'store';

export const getCars = (limit: number, keyword: string) => {
  const brand = getRecoil<string>(brandSelected);
  const cylinder = getRecoil<string>(cylinderSelected);
  const transmition = getRecoil<string>(transmissionSelected);
  const fuelType = getRecoil<string>(fuelTypeSelected);

  const cars = fetch(`https://api.api-ninjas.com/v1/cars?limit=${limit}&make=${brand}&cylinders=${cylinder}&model=${keyword}&transmission=${transmition}&fuel_type=${fuelType}`, {
      headers: {
        'X-Api-Key': "BoFAA914flX/KFxp3QrAkA==r9BNJayEz1ub6c22"
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  
  return cars;
}
