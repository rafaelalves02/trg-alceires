import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getItems(): Array<Menu> {
    const menu: Array<Menu> = [
      {
        name: 'Inicio',
        url: '#banner'
      },
      {
        name: 'Tratamentos',
        url: '#treatments'
      },
      {
        name: 'Abordagem',
        url: '#methods'
      },
      {
        name: 'Sobre mim',
        url: '#about'
      }
    ];

    return menu;
  }

}
