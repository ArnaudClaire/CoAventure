import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adventure-by-budget-by-peoples',
  templateUrl: './adventure-by-budget-by-peoples.component.html',
  styleUrls: ['./adventure-by-budget-by-peoples.component.css']
})
export class AdventureByBudgetByPeoplesComponent {
  saison= "été";
  month= 0;
  budget= 0;
  nombreDePersonnes= 0;
  adventuresList: any[] = [];

  constructor(private http: HttpClient) {}

  setNbPersonne(event : any) {
    this.nombreDePersonnes= event.target.value;
    console.log(this.nombreDePersonnes);
  }

  getAdventureByMonth(month : number) {
    this.month= month;
    this.http.get<any[]>('./assets/Adventures.json').subscribe(
      (data) => {
        // Filtrer les aventures pour le mois de juin
        this.adventuresList = data.filter(adventure => {
          // Extraire le mois de la date de l'aventure
          const adventureMonth = new Date(adventure.date).getMonth() + 1; // Les mois commencent à partir de 0 (janvier)
  
          // Vérifier si l'aventure est en juin (mois 6)
          return adventureMonth === month;
        });
      },
      (error) => {
        console.log('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
      }
    );
  }

  getAdventureByMonthAndBudget(event: any) {
    const budgetInput = event.target as HTMLInputElement;
    const budget = parseInt(budgetInput.value, 10);
    console.log(budget);
    if (budget !== null && budget !== undefined) {    
      // console.log("budget non null"+this.month);
      this.http.get<any[]>('./assets/Adventures.json').subscribe(
      (data) => {
        

        this.adventuresList = data.filter(adventure => {
          // Extract the month from the adventure's date
          const adventureDate = new Date(adventure.date);
          const adventureMonth = adventureDate.getMonth() + 1; // Months are zero-based, so add 1 to get the correct month value
        
          // Check if the adventure is in June (month 6) and if the cost per person is less than or equal to the budget
          return adventureMonth === this.month && adventure.costPerPerson * this.nombreDePersonnes <= budget;
        });
      },
      (error) => {
        console.log('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
      }
    );}

  }
}
