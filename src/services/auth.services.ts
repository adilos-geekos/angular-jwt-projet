import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthService{
    private host:string ="http://localhost:5454";
    test:string;
    constructor(private http:HttpClient){

    }
    login(user){
        return this.http.post("http://localhost:5454/login",{"usename":"adil","password":"adil"},{observe:'response'});
    }
}