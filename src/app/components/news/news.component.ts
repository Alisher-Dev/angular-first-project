import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IComment } from "../../types/type";

@Component({
  selector: "app-news",
  imports: [CommonModule],
  templateUrl: "./news.component.html",
  styleUrl: "./news.component.css",
})
export class NewsComponent {
  comments: IComment[] = [
    {
      title: "VMWARE",
      desc: `«Когда пришла пандемия, мы беспокоились, что креативность и
        продуктивность команды пострадает, так как многие из нас привыкли
        работать в одной комнате. Но Miro оказался идеальным инструментом для
        совместной работы в удаленном режиме»`,
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "Роксанна Мустафа",
      position: "Design Team Lead в VMware",
    },
    {
      title: "Upwork",
      desc: `«С помощью Miro наша распределённая команда смогла без проблем организовать мозговой штурм, как будто мы все находимся в одной комнате. Это незаменимый инструмент для продуктивных встреч»`,
      avatar:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "Алексей Морозов",
      position: "Product Manager в Upwork",
    },
    {
      title: "Netflix",
      desc: `«Miro дал нам возможность визуализировать идеи и ускорить процесс обсуждения новых функций. Это действительно помогает нам двигаться быстрее»`,
      avatar:
        "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "Екатерина Иванова",
      position: "UX Researcher в Netflix",
    },
  ];
}
