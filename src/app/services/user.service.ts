import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:5000/usuarios";
  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      "token": "123456"
    })
  }

  constructor(private httpClient: HttpClient) { }

  // CRUD - CREATE, READ, UPDATE, DELETE

  // Retorna a lista de usuários READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Salva o usuário no banco CREATE
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Exclui o usuario do banco DELETE
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/${id}`);
  }

  // Edita usuário UPDATE
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/${id}`, user, this.httpOptions)
  }

  // Lista usuário único
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/${id}`)
  }
}
