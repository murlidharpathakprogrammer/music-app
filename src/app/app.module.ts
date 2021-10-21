import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMusicListComponent } from './my-music-list/my-music-list.component';
import { RecentPlaysComponent } from './recent-plays/recent-plays.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMusicListComponent,
    RecentPlaysComponent,
    NowPlayingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
