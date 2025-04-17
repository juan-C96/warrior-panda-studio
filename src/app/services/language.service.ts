import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLang: 'es' | 'en' = 'es';
  private translations: any = {};

  constructor() {
    this.loadLanguage(this.currentLang);

    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'es' || saved === 'en')) {
      this.currentLang = saved;
    }
  }

  async loadLanguage(lang: 'es' | 'en') {
    const data = await fetch(`assets/i18n/${lang}.json`).then((res) =>
      res.json()
    );
    this.translations[lang] = data;
  }

  translate(key: string): string {
    return this.translations[this.currentLang]?.[key] || key;
  }

  async switchLang(lang: 'es' | 'en') {
    if (!this.translations[lang]) {
      await this.loadLanguage(lang);
    }
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  get lang() {
    return this.currentLang;
  }
}
