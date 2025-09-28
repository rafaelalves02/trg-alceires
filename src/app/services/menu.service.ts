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
        name: 'Sobre mim',
        url: '#about'
      }
    ];

    return menu;
  }

}
