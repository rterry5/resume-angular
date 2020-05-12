import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutComponent } from './components/about/about/about.component';
import { ProjectComponent } from './components/project-list/project-list/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IntroComponent} from './components/homepage/homepage/intro/intro.component';
import { TitlesComponent } from './components/homepage/homepage/titles/titles.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact/contact/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutContentComponent } from './components/about/about/about-content/about-content.component';
import { ProjectListComponent } from './components/project-list/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    IntroComponent,
    TitlesComponent,
    FooterComponent,
    ContactFormComponent,
    ContactComponent,
    HomepageComponent,
    AboutComponent,
    ProjectComponent,
    PageNotFoundComponent,
    AboutContentComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
