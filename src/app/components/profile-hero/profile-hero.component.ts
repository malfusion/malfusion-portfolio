import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-hero',
  templateUrl: './profile-hero.component.html',
  styleUrls: ['./profile-hero.component.scss']
})
export class ProfileHeroComponent implements OnInit {

  profilePhotos = [
    'assets/profile.jpg',
    'assets/profile2.jpg',
    'assets/profile3.jpg',
    'assets/profile6.jpg'
  ]
  currPhoto = 0
  constructor() { }

  ngOnInit() {
    this.currPhoto = Math.floor(Math.random()*this.profilePhotos.length)
  }

  nextPic(){
    this.currPhoto = (this.currPhoto+1) % this.profilePhotos.length
  }

}
