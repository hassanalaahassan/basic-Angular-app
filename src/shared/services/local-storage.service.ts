import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) as T : null;
    } catch (e) {
      console.error('Error parsing localStorage item', e);
      return null;
    }
  }

  updateItem(key: string, newValue: any): boolean {
    if (newValue !== this.getItem(key)) {
      this.setItem(key, newValue);
      return true;
    }
    return false;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
