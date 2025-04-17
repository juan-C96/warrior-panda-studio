import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [IonicModule],
})
export class LayoutComponent {

  constructor(public langService: LanguageService) {}

  switchLang(lang: 'es' | 'en') {
    this.langService.switchLang(lang);
  }

  t(key: string): string {
    return this.langService.translate(key);
  }
}
