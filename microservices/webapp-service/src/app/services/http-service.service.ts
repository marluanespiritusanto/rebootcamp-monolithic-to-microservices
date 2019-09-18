import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  baseUrl: string = environment.BASE_API_URL;

  constructor(private _http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl + "/product");
  }

  public getProduct(id: string): Observable<Product> {
    return this._http.get<Product>(this.baseUrl + "/product/" + id);
  }

  public createProduct(product: Product) {
    delete product._id;
    return this._http
      .post(this.baseUrl + "/product", product)
      .subscribe(result => {});
  }
}
