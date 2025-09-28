import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   constructor(private menuService: MenuService) { }
  
    menuItems?: Array<Menu>;
  
    menuStatus: string = 'closed';
  
   whatsappLink: string = 'https://wa.me/5561992123062?text=Vim%20do%20seu%20trg%20e%20gostaria%20de%20agendar%20um%20dia.';
  
    ngOnInit() {
      const menu = this.menuService.getItems();
  
      this.menuItems = menu;
    }
  
    menuClick() {
      this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open')
    }

    openWhatsApp() {
      window.open(this.whatsappLink, '_blank');
    }
}
