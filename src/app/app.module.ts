import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MoviesComponent } from './movies/movies.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighlightDirective
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
