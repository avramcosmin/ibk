import {ChartInterface} from './chart.interface';

export interface EntryInterface {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  url: string;
  description: string;
  chart: ChartInterface[];
}
