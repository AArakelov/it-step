import {MatDateFormats} from "@angular/material/core";

export const CUSTOM_DATE_FORMATS: MatDateFormats = {

  parse: {
    dateInput: 'DD-MM-YYYY'
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    dateA11yLabel: 'LL',
    monthYearLabel: 'MMM YYYY',
    monthYearA11yLabel: 'MMMM YYYY'
  }
}
