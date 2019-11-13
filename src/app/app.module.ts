import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfileHeroComponent } from './components/profile-hero/profile-hero.component';
import { BrandLinkComponent } from './components/brand-link/brand-link.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutPageComponent,
    ProfileHeroComponent,
    BrandLinkComponent,
    ExperienceItemComponent,
    ExperienceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
