import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTimestampAmPm',
})
export class UnixTimestampAmPmPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '';
    const date = new Date(value * 1000); // Converti il timestamp Unix in millisecondi
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // Formatta le ore per il formato 12 ore
    return `${formattedHours}:${minutes} ${ampm}`;
  }
}
