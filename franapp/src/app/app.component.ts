import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'franapp';

  audio : HTMLAudioElement ; 
  duration: number = 0 ;
  playAudio() {
    this.duration = this.audio.duration
    this.audio.load();
    this.audio.play();
  }

  stopAudio(){
    this.audio.pause()
  }
  constructor() { this.audio = new Audio();
    this.audio.src = "https://www.myinstants.com/instant/bosetti-errape-32923/?utm_source=copy&utm_medium=share"}

  ngOnInit(): void {
      this.audio = new Audio();
      this.audio.src = "https://www.myinstants.com/instant/bosetti-errape-32923/?utm_source=copy&utm_medium=share"
  }
}
