import { Component, OnInit } from '@angular/core';
import { AnimateService } from '../animate.service';

@Component({
  selector: 'app-pre-web-loader',
  templateUrl: './pre-web-loader.component.html',
  styleUrls: ['./pre-web-loader.component.scss']
})
export class PreWebLoaderComponent implements OnInit {
  //
  public loading = false;
  public loadDone = false;
  constructor(private aniService: AnimateService) { }

  ngOnInit() {
    this.load();
    this.loadStatus();
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
