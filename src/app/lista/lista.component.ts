import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
contatti= [
{nome:"Dario",cognome:"Cardoni", citta:"Roma"},
{nome:"Carlo",cognome:"fresc", citta:"Roma"},
{nome:"Ciro",cognome:"oralo", citta:"Roma"}
]
	



  constructor() { }

  ngOnInit() {
  }

}
