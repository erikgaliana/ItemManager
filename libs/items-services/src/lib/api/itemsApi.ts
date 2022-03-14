// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJs
import { map, Observable } from 'rxjs';

// Interfaces
import { itemsFromGet, ItemsModel } from '../models/items-list.models';

@Injectable({
  providedIn: 'root',
})
export class ItemsApi {
  private baseUrl =
    'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json'; // URL to web api

  constructor(private httpClient: HttpClient) {}

  /** GET Items from the server */
  getItems(): Observable<ItemsModel[]> {
    return this.httpClient
      .get<{ items: ItemsModel[] }>(this.baseUrl)
      .pipe(map((response) => response.items));
  }
}
