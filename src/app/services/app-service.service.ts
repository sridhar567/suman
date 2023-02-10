import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

constructor(private http: HttpClient) { }

public getUserData(): Observable<{completed: boolean, id: number, title: string, userId: number}> {
  return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(map((result: any) => {
    return result;
  }))
}

}
