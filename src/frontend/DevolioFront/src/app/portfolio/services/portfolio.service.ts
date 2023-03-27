import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Portfolio } from '../models/create-portfolio.dto';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${this.apiUrl}`);
  }

  getPortfolioById(id: number): Observable<Portfolio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Portfolio>(url);
  }

  deletePortfolio(portfolio: Portfolio): Observable<Portfolio> {
    const url = `${this.apiUrl}/${portfolio.id}`;
    return this.http.delete<Portfolio>(url);
  }

  updatePortfolio(id: number, portfolio: Portfolio): Observable<Portfolio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Portfolio>(url, portfolio);
  }

  addPortfolio(portfolio: Portfolio): Observable<Portfolio> {
    return this.http.post<Portfolio>(this.apiUrl, portfolio);
  }
}
