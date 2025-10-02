import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  whatsappLink: string = 'https://wa.me/5561992123062?text=Vim%20do%20seu%20trg%20e%20gostaria%20de%20agendar%20um%20dia';

  ngOnInit() {
    AOS.init();
  }
}
