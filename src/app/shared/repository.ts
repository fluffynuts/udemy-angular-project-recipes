import { Observable } from "rxjs";

export interface IRepository<T> {
  fetchAll(): Observable<T[]>;
}
