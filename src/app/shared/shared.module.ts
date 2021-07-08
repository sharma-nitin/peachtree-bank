import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/pt-footer/pt-footer.component';
import { HeaderComponent } from './components/pt-header/pt-header.component';
import { BbUIModule } from '../bb-ui/bb-ui.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, BbUIModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
