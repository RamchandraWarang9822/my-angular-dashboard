import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentContainerComponent } from './content-container/content-container.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ContentContainerComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentContainerComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ComponentsModule { }
