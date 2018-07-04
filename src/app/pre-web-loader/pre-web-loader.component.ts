import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimateService } from '../animate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-web-loader',
  templateUrl: './pre-web-loader.component.html',
  styleUrls: ['./pre-web-loader.component.scss']
})
export class PreWebLoaderComponent implements OnInit {
  //
  public loading = false;
  public loadDone = false;
  // @ViewChild('mute') mute: ElementRef;
  // @ViewChild('vol') vol: ElementRef;

  public mute = false;
  constructor(private aniService: AnimateService, private rout: Router) { }

  ngOnInit() {
    this.load();
    this.loadStatus();
  }
  checkClient() {
    console.log(window.innerWidth);
    if (window.innerWidth < 400) {
      this.rout.navigate(['/mobileHome']);
    } else {
      this.rout.navigate(['/home']);

    }
  }
  toggleMute() {
    if (this.mute) {
      this.mute = false;
    } else if (!this.mute) {
      this.mute = true;
      this.aniService.toggleMute();
    }
  }

  load() {
    this.loading = true;

  }

  loadStatus() {
    setTimeout(() => {
      const isLoaded = this.aniService.isSoundLoaded();
      if (isLoaded) {
        this.loadDone = true;
      } else {
        this.loadStatus();

      }
      // Then recall the parent function to
      // create a recursive loop.
    }, 1000);
  }
}
