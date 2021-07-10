import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/pt-footer/pt-footer.component';
import { HeaderComponent } from './components/pt-header/pt-header.component';
import { BbUIModule } from '../bb-ui/bb-ui.module';
import { PanelContainerComponent } from './components/pt-panel-container/pt-panel-container.component';
import { FilterbyPipe } from './pipes/filterby.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PanelContainerComponent, FilterbyPipe],
  imports: [CommonModule, BbUIModule],
  exports: [HeaderComponent, FooterComponent, PanelContainerComponent,FilterbyPipe],
})
export class SharedModule {}
