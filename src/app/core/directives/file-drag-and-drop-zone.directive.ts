import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFileDragAndDropZone]'
})
export class FileDragAndDropZoneDirective {

  @Output() captureFile = new EventEmitter<any>();

  constructor() { }

  @HostBinding('class.fileover') fileover: boolean;

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileover = true;
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileover = false;
  }

  @HostListener('drop', ['$event']) onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileover = false;

    const files = evt.dataTransfer.files;

    if (files.length > 0) {
      console.log(files);
      this.captureFile.emit(files);
    }
  }

}
