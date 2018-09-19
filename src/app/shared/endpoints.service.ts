import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EndpointsService {
  readonly basePath = "api";
  resolve(relativePath: string): string {
    return `${this.basePath}/${relativePath}`;
  }

  constructor() { }
}
