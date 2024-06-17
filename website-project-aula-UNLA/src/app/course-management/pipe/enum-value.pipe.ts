import { Pipe, PipeTransform } from '@angular/core';
import { FourMonthPeriod } from '../model/course';

@Pipe({
  name: 'enumValue'
})

export class EnumValuePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case FourMonthPeriod.FIRST_QUARTER:
      case "FIRST_QUARTER":
        return "Primer Cuatrimestre";
      case FourMonthPeriod.SECOND_TERM:
      case "SECOND_TERM":
        return "Segundo Cuatrimestre";
      case FourMonthPeriod.ANNUAL:
      case "ANNUAL":
        return "Anual";
      default:
        return value; // Retorna el valor por defecto si no coincide
    }
  }
}
