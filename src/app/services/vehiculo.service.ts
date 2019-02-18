import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehiculo } from '../model/vehiculo';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {

  private baseUrl = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Estacionamiento Funcionando');
  }

  consultarVehiculos(): Observable<Vehiculo[]> {
    return this.http.get(`${this.baseUrl}/consultaVehiculos`).pipe(
      map(data => data as Vehiculo[])
    );
  }

  registrarEntradaVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(`${this.baseUrl}/registroEntrada`, vehiculo, {headers: this.httpHeaders});
  }

  registrarSalidaVehiculo(id: number): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${this.baseUrl}/registroSalida/${id}`, {headers: this.httpHeaders});
  }
}
