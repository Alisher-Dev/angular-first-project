import { Component } from '@angular/core';
import { INavigate } from '../../types/type';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navigate: INavigate[] = [
    { to: '#', title: 'Продукт' },
    { to: '#', title: 'Решения' },
    { to: '#', title: 'Ресурсы' },
    { to: '#', title: 'Предприятия' },
    { to: '#', title: 'Тарифы' },
  ];
}
