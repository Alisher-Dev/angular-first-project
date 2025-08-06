import { Component } from '@angular/core';
import { IButtonActive, IButtonList } from '../../types/type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  btns: IButtonList[] = [
    {
      id: 1,
      text: 'Мозговые штурмы',
      active: true,
      prod: {
        title: 'Как проводить мозговые штурмы',
        desc: 'Эффективные техники генерации идей в команде.',
        link: 'https://example.com/brainstorming',
        banner:
          'https://neiros.ru/img/brainstorm/pravila-mozgovogo-shturma.png',
      },
    },
    {
      id: 2,
      text: 'Диаграммы',
      active: false,
      prod: {
        title: 'Создание диаграмм',
        desc: 'Визуализируй процессы и данные с помощью диаграмм.',
        link: 'https://example.com/diagrams',
        banner: 'https://example.com/images/diagrams.jpg',
      },
    },
    {
      id: 3,
      text: 'Встречи',
      active: false,
      prod: {
        title: 'Организация встреч',
        desc: 'Как проводить встречи продуктивно и по делу.',
        link: 'https://example.com/meetings',
        banner: 'https://example.com/images/meetings.jpg',
      },
    },
    {
      id: 4,
      text: 'SCRUM',
      active: false,
      prod: {
        title: 'SCRUM для команды',
        desc: 'Гибкий подход к управлению проектами и задачами.',
        link: 'https://example.com/scrum',
        banner: 'https://example.com/images/scrum.jpg',
      },
    },
    {
      id: 5,
      text: 'Картирование',
      active: false,
      prod: {
        title: 'Картирование процессов',
        desc: 'Анализируй и улучшай бизнес-процессы с помощью карт.',
        link: 'https://example.com/mapping',
        banner: 'https://example.com/images/mapping.jpg',
      },
    },
    {
      id: 6,
      text: 'Дизайн-исследования',
      active: false,
      prod: {
        title: 'Дизайн-исследования в UX',
        desc: 'Понимай своих пользователей через исследования.',
        link: 'https://example.com/ux-research',
        banner: 'https://example.com/images/research.jpg',
      },
    },
    {
      id: 7,
      text: 'Планирование',
      active: false,
      prod: {
        title: 'Планирование проекта',
        desc: 'Ставь цели, сроки и ресурсы — планируй как профи.',
        link: 'https://example.com/planning',
        banner: 'https://example.com/images/planning.jpg',
      },
    },
  ];

  activeBtn: IButtonActive = { ...this.btns[0].prod };

  handleActive(btnId: number) {
    this.btns.map((btn) =>
      btn.id === btnId ? (btn.active = true) : (btn.active = false)
    );
  }
}
