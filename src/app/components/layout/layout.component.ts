import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [IonicModule],
})
export class LayoutComponent  implements OnInit {

  @ViewChild('description', { static: false }) description!: ElementRef;

  scrollToDescription() {
    this.description.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit() {}

}
