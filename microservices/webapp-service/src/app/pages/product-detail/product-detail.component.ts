import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/services/http-service.service";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: 0,
    productName: "",
    image: "",
    from: "",
    nutrients: "",
    quantity: "",
    price: 0,
    organic: true,
    description: ""
  };
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.httpService.getProduct(data.id).subscribe(product => {
        this.product = product;
      });
    });
  }
}
