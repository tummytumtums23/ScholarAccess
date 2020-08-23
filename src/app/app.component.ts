import { Component } from '@angular/core';
import { FileElement } from './file-explorer/model/file-element';
import { Observable } from 'rxjs';
import { FileService } from './service/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' /*'../node_modules/bootstrap/dist/css/bootstrap.min.css'*/]
})
export class AppComponent {
  title = 'share';
  
}
