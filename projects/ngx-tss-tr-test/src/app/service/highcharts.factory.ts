import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';

export function HighChartsFactory() {
  // apply Highcharts Modules to this array
  return [stock, more];
}
