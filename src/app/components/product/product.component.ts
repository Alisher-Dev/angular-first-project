import { Component, Input } from '@angular/core';
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
      text: 'Frontend',
      active: true,
      prod: {
        title: 'Современный Frontend',
        desc: 'Разработка клиентской части сайтов и приложений с использованием HTML, CSS, JavaScript, а также популярных фреймворков вроде React, Vue или Angular. Включает в себя адаптивную верстку, работу с API и создание интерактивных интерфейсов.',
        link: 'https://example.com/frontend',
        banner:
          'https://img.freepik.com/premium-vector/frontend-developer-web-banner-landing-page_277904-9968.jpg?semt=ais_hybrid&w=740&q=80',
      },
    },
    {
      id: 2,
      text: 'Backend',
      active: false,
      prod: {
        title: 'Надежный Backend',
        desc: 'Серверная часть приложений, отвечающая за логику, базу данных и безопасность. Языки: Node.js, Python, PHP, Java, Go. Важны REST/GraphQL API, работа с БД (PostgreSQL, MongoDB), авторизация и масштабируемость.',
        link: 'https://example.com/backend',
        banner:
          'https://thumbs.dreamstime.com/b/backend-development-coding-software-engineering-programming-languages-program-code-laptop-screen-website-template-technology-155406269.jpg',
      },
    },
    {
      id: 3,
      text: 'DevOps',
      active: false,
      prod: {
        title: 'Инфраструктура и DevOps',
        desc: 'DevOps объединяет разработку и эксплуатацию. Используются CI/CD, Docker, Kubernetes, облачные решения (AWS, GCP, Azure) и мониторинг (Prometheus, Grafana). Основная цель — автоматизация и стабильность релизов.',
        link: 'https://example.com/devops',
        banner:
          'https://www.spec-india.com/wp-content/uploads/2022/11/Banner-Devops.png',
      },
    },
    {
      id: 4,
      text: 'Тестирование',
      active: false,
      prod: {
        title: 'Автоматизация тестов',
        desc: 'Тестирование гарантирует качество продукта. Включает юнит-тесты, интеграционные, e2e. Популярные инструменты: Jest, Cypress, Playwright, Selenium. Это помогает находить баги на ранних этапах и сохранять стабильность.',
        link: 'https://example.com/testing',
        banner: 'https://neiros.ru/img/testing/chto-takoe-testirovanie.jpg',
      },
    },
    {
      id: 5,
      text: 'UI/UX Дизайн',
      active: false,
      prod: {
        title: 'Дизайн интерфейсов и опыт',
        desc: 'Создание удобных и визуально привлекательных интерфейсов. Используются инструменты: Figma, Adobe XD, Sketch. UX включает исследование пользователей, прототипирование и тестирование. Цель — сделать продукт интуитивно понятным.',
        link: 'https://example.com/uiux',
        banner:
          'https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093995.jpg',
      },
    },
  ];

  activeBtn: IButtonActive = { ...this.btns[0].prod };
  isLoadingImg = false;

  handleImgStatus() {
    this.isLoadingImg = false;
  }

  handleActive(btnId: number) {
    this.btns.map((btn) =>
      btn.id === btnId ? (btn.active = true) : (btn.active = false)
    );

    if (
      this.activeBtn.banner !==
      this.btns.find((btn) => btn.id === btnId)?.prod.banner
    ) {
      this.isLoadingImg = true;
    }

    this.activeBtn =
      this.btns.find((btn) => btn.id === btnId)?.prod ?? this.btns[0].prod;
  }
}
