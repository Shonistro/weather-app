export interface Weather {
 weather: WeatherInfo[],
 main: {
    temp: number;
    pressure:number;
    humidity:number;
 };
 wind:{
    speed: number;
 };
 sys: {
    country: string;
 };
 coord:{
    lon: number; 
 }
 name: string;
}

interface WeatherInfo {
    main: string;
    icon: string;
}
