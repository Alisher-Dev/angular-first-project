import { Component } from '@angular/core';
import { IContentTrust } from '../../types/type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust',
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  styleUrl: './trust.component.css',
})
export class TrustComponent {
  content: IContentTrust[] = [
    {
      title: 'ISO',
      desc: 'Miro cоответствует требованиям безопасности корпоративного уровня, согласно стандарту ISO-27001',
    },
    {
      title: '#1',
      desc: 'Платформа номер 1 для совместной работы, согласно отзывам на G2',
    },
    {
      title: '99%',
      desc: 'Почти все компании из списка Fortune 100 используют Miro',
    },
    {
      title: '1000+',
      desc: 'шаблонов, созданных сообществом и экспертами',
    },
    {
      title: '45M+',
      desc: 'пользователей во всём мире',
    },
    {
      title: '100+',
      desc: 'интеграций с различными онлайн-сервисами и инструментами',
    },
  ];
}
