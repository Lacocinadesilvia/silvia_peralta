import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { DulcesComponent } from './pages/dulces/dulces.component';
import { EmpanadasComponent } from './pages/empanadas/empanadas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    DulcesComponent,
    EmpanadasComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollCoreModule.forRoot({
      duration: 500,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
