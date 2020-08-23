import { Component, OnInit } from '@angular/core';
import { FileElement } from '../file-explorer/model/file-element';
import { Observable } from 'rxjs';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public fileElements: Observable<FileElement[]>;

  constructor(public fileService: FileService) {}
  
  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  ngOnInit() {

    const folderA = this.fileService.add({ name: 'Maths', isFolder: true, parent: 'root' });


    this.fileService.add({ name: 'Physics', isFolder: true, parent: 'root' });
    ///this.fileService.add({ name: '2020-08-22', isFolder: true, parent: folderA.id });
   
    //this.fileService.add({ name: 'Asssignment_2', isFolder: false, parent: 'root' });

    const folderB = this.fileService.add({ name: '2020-08-22', isFolder: true, parent: folderA.id});
 
    //this.fileService.add({ name: '2020-08-22', isFolder: true, parent: folderB.id });
    this.fileService.add({ name: 'Asssignment_1', isFolder: false, parent: folderB.id });

    this.updateFileElementQuery();
  }

  addFolder(folder: { name: string }) {
    this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }

  removeElement(element: FileElement) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }

  renameElement(element: FileElement) {
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }

  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }

  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }

}
