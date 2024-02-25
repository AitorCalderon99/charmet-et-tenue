import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-personal-shopper',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './personal-shopper.component.html',
  styleUrl: './personal-shopper.component.scss'
})
export class PersonalShopperComponent {

}
