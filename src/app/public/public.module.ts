import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';

import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [MainComponent, HomeComponent, AboutComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
