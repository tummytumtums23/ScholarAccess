import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import {NgbModule} from '../node_modules/bootstrap/bootstrap';*/
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FileExplorerModule } from './file-explorer/file-explorer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FileService } from './service/file.service';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    HeaderComponent,
    HomeComponent,
    StudentloginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileExplorerModule, FlexLayoutModule, MatCardModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
