import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';


 const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'student', component: StudentComponent},
  {path: 'teacher' , component: TeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }
