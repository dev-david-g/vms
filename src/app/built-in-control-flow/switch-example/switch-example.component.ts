import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  standalone: true,
  imports: [],
  templateUrl: './switch-example.component.html',
  styleUrl: './switch-example.component.scss',
})
export class SwitchExampleComponent {
  country = 'Bulgaria';
  descBulgaria =
    'Bulgaria is a Balkan nation with diverse terrain encompassing Black Sea coastline, a mountainous interior and rivers, including the Danube. A cultural melting pot with Greek, Slavic, Ottoman, and Persian influences, it has a rich heritage of traditional dance, music, costumes, and crafts. At the foot of domed Vitosha mountain is its capital city, Sofia, dating to the 5th century B.C.';
  descRomania =
    'Romania is a southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains. Its preserved medieval towns include Sighişoara, and there are many fortified churches and castles, notably clifftop Bran Castle, long associated with the Dracula legend. Bucharest, the country’s capital, is the site of the gigantic, Communist-era Palatul Parlamentului government building';
  descItaly =
    'Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s "David" and Brunelleschis Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.';

  setCountry(country: 'Bulgaria' | 'Romania' | 'Italy' | 'Default') {
    this.country = country;
  }
}
