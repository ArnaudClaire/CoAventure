import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar', { static: true }) calendar!: ElementRef;

  ngAfterViewInit(): void {
    this.createCalendar();
  }

  createCalendar(): void {
    const calendar = this.calendar.nativeElement;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const monthName = new Intl.DateTimeFormat('fr', { month: 'long' }).format(currentDate);

    const calendarDays = document.createElement('div');
    calendarDays.classList.add('grid', 'grid-cols-7', 'gap-2');

    // Ajouter les jours du mois au calendrier
    for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement('div');
      day.classList.add('p-2', 'text-center');
      day.textContent = i.toString();

      // Vérifier si le jour est sélectionné
      const selectedDate = new Date(currentYear, currentMonth, i);
      if (this.isSelectedDate(selectedDate)) {
        day.classList.add('bg-red-500', 'text-white');
      }

      calendarDays.appendChild(day);
    }

    calendar.innerHTML = '';
    calendar.appendChild(calendarDays);
  }

  isSelectedDate(date: Date): boolean {
    // Logique pour vérifier si la date est sélectionnée
    // Retourne true si la date est sélectionnée, sinon false
    return false;
  }
}
