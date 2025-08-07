import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { SolutionComponent } from "../solution/solution.component";
import { ResourceComponent } from "../resource/resource.component";
import { ProductComponent } from "../product/product.component";
import { TrustComponent } from "../trust/trust.component";
import { NewsComponent } from "../news/news.component";
import { JoinComponent } from "../join/join.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-home",
  imports: [
    HeaderComponent,
    AboutComponent,
    SolutionComponent,
    ResourceComponent,
    ProductComponent,
    TrustComponent,
    NewsComponent,
    JoinComponent,
    FooterComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
