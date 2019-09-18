import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { HttpService } from "src/app/services/http-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"]
})
export class ProductAddComponent implements OnInit {
  product: Product = {
    _id: "",
    productName: "",
    image: "",
    from: "",
    nutrients: "",
    quantity: "",
    price: 0,
    organic: true,
    description: ""
  };

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {}

  createProduct() {
    this.httpService.createProduct(this.product);
    window.location.href = "/";
  }
}
