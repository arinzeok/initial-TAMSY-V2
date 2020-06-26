import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ModalService } from 'src/app/core/service/modal.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { pipe } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
})
export class AddEquipmentComponent implements OnInit {
  entries = [
    {
      title: "exDirectory",
      isDirectory: true,
      entries: [
        {
          title: "file1"
        },
        {
          title: "file2"
        },
        {
          title: "file3"
        },
      ]
    },
    {
      title: "exDirectory2",
      isDirectory: true,
      entries: [
        {
          title: "file4"
        },
        {
          title: "image5"
        },
        {
          title: "text6"
        },
      ]
    },
    {
      title: "file7"
    },
    {
      title: "image8"
    },
    {
      title: "text9"
    },
  ];

  dropTargetIds = [];
  nodeLookup = {};
  dropActionTodo = null;

  constructor(
    public modalService: ModalService,
    @Inject(DOCUMENT) private document: Document
  ) {
   // this.prepareDragDrop(this.demoData);
  }

  ngOnInit(): void {}

  /* prepareDragDrop(nodes) {
    nodes.forEach((node) => {
      this.dropTargetIds.push(node.id);
      this.nodeLookup[node.id] = node;
      this.prepareDragDrop(node.children);
    });
  } */

  /* dragMoved(event) {
    const e = this.document.elementFromPoint(
      event.pointerPosition.x,
      event.pointerPosition.y
    );

    console.log(event)

    if (!e) {
      this.clearDragInfo();
      return;
    }
    const container = e.classList.contains('node-item')
      ? e
      : e.closest('.node-item');
    if (!container) {
      this.clearDragInfo();
      return;
    }
    this.dropActionTodo = {
      targetId: container.getAttribute('data-id'),
    };
    const targetRect = container.getBoundingClientRect();
    const oneThird = targetRect.height / 3;

    if (event.pointerPosition.y - targetRect.top < oneThird) {
      // before
      // tslint:disable-n.actionno-string-literal
      // tslint:disable-next-line: no-string-literal
      this.dropActionTodo['action'] = 'before';
      // console.log(this.dropActionTodo['action'])
    } else if (event.pointerPosition.y - targetRect.top > 2 * oneThird) {
      // after
      // tslint:disable-next-line: no-string-literal
      this.dropActionTodo['action'] = 'after';
      // console.log(this.dropActionTodo['action'])
    } else {
      // inside
      // tslint:disable-next-line: no-string-literal
      this.dropActionTodo['action'] = 'inside';
      // console.log(this.dropActionTodo['action'])
    }
    this.showDragInfo();
  }

  drop(event) {
    if (!this.dropActionTodo) {
      return;
    }

    const draggedItemId = event.item.data;
    const parentItemId = event.previousContainer.id;
    // console.log(parentItemId)
    const targetListId = this.getParentNodeId(
      this.dropActionTodo.targetId,
      this.demoData,
      'main'
    );



    const draggedItem = this.nodeLookup[draggedItemId];

    const oldItemContainer =
      parentItemId !== 'main'
        ? this.nodeLookup[parentItemId].children
        : this.demoData;
    const newContainer =
      targetListId !== 'main'
        ? this.nodeLookup[targetListId].children
        : this.demoData;

    const i = oldItemContainer.findIndex((c) => c.id === draggedItemId);
    oldItemContainer.splice(i, 1);

    switch (this.dropActionTodo.action) {
      case 'before':
      case 'after':
        const targetIndex = newContainer.findIndex(
          (c) => c.id === this.dropActionTodo.targetId
        );
        if (this.dropActionTodo.action == 'before') {
          newContainer.splice(targetIndex, 0, draggedItem);
        } else {
          newContainer.splice(targetIndex + 1, 0, draggedItem);
        }
        break;

      case 'inside':
        this.nodeLookup[this.dropActionTodo.targetId].children.push(
          draggedItem
        );
        this.nodeLookup[this.dropActionTodo.targetId].isExpanded = true;
        break;
    }

    this.clearDragInfo(true);
  }

  getParentNodeId(id: string, nodesToSearch, parentId: string): string {
    for (const node of nodesToSearch) {
      if (node.id === id) {
        return parentId;
      }
      const ret = this.getParentNodeId(id, node.children, node.id);
      if (ret) {
        return ret;
      }
    }
    return null;
  }

  showDragInfo() {
    this.clearDragInfo();
    if (this.dropActionTodo) {
      console.log(this.dropActionTodo)
      this.document
        .getElementById('node-' + this.dropActionTodo.targetId)
        .classList.add('drop-' + this.dropActionTodo.action);
    }
  }

  clearDragInfo(dropped = false) {
    if (dropped) {
      this.dropActionTodo = null;
    }
    this.document
      .querySelectorAll('.drop-before')
      .forEach((element) => element.classList.remove('drop-before'));
    this.document
      .querySelectorAll('.drop-after')
      .forEach((element) => element.classList.remove('drop-after'));
    this.document
      .querySelectorAll('.drop-inside')
      .forEach((element) => element.classList.remove('drop-inside'));
  } */

  /* drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.demoData, event.previousIndex, event.currentIndex);
  } */

  /* drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    return;
    if ((event.previousContainer.id === event.container.id) && event.isPointerOverContainer) {
      console.log('Previous: ' , event.previousContainer, 'Current: ', event.isPointerOverContainer);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.container.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      console.log(event.previousContainer.data,
                          event);
    }
    // console.log(event)
  } */

  /* dragMoved(event) {
    console.log(event);
  } */

  onDragged(item: any, entries: any[]) {

    console.log('dragged');
    const index = entries.indexOf(item);
    entries.splice(index, 1);
  }

  onDrop(event: DndDropEvent, entries: any[]) {

    console.log('dropped');
    let index = event.index;

    if (typeof index === 'undefined') {

      index = entries.length;
    }

    entries.splice(index, 0, event.data);
  }
}
