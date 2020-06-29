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
import { debounce } from '@agentepsilon/decko';
import { DndDropEvent } from 'ngx-drag-drop';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import { singleEquipmentNode } from 'src/app/core/models/singleEquipment';

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
})

export class AddEquipmentComponent implements OnInit {
  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>;

  arrayOfCreatedEquipmentKeys = [];

  nodes = [];

    // ids for connected drop lists
    dropTargetIds = [];
    nodeLookup = {};
    dropActionTodo = null;
  selectedNode: any;
  show = false;
  showNodeOptions = false;
  selectedNodeId: string;
  containerToDeleteFromId: any;

    constructor(@Inject(DOCUMENT) private document: Document, public modalService: SuiModalService) {
        this.prepareDragDrop(this.nodes);
    }

    ngOnInit() {}


    // Select a single equipment
    selectSingleEquipment(equipmentKey: number) {
      const index = this.arrayOfCreatedEquipmentKeys.findIndex(equipment => {
        return equipment.key === equipmentKey;
      });
      this.selectedNode = this.arrayOfCreatedEquipmentKeys[index];
    }

    // Control the single equipment option modal starts
    showNodeOptionsModal(nodeId: any = false, event) {
      // Grab the Id of the container where a nested equipment is. Used for deleting the nested equipment
      this.containerToDeleteFromId = event.target.parentNode.offsetParent.id;

      this.showNodeOptions = !this.showNodeOptions;
      if (!nodeId) {
        this.selectedNode = undefined;
      } else {
        this.selectedNodeId = nodeId;
      }

    }

    hideNodeOptionsModal() {
      if (this.showNodeOptions) {
        this.showNodeOptions = !this.showNodeOptions;
      }
    }
    // Control the single equipment option modal ends

  showAddEquipmentModal() {
    this.show = true;
    this.hideNodeOptionsModal();
  }

  // Delete a single equipment
  deleteEquipment() {
    const index = this.arrayOfCreatedEquipmentKeys.findIndex(equipment => {
      return equipment.key === this.selectedNodeId;
    });

    // const parentId = this.
    const oldItemContainer = this.containerToDeleteFromId !== '' ? this.nodeLookup[this.containerToDeleteFromId].children : this.nodes;

    const i = oldItemContainer.findIndex(c => c.key === this.selectedNodeId);
    oldItemContainer.splice(i, 1);

    this.arrayOfCreatedEquipmentKeys.splice(index, 1);
    delete this.selectedNode;

    this.hideNodeOptionsModal();
  }

  // Create a new equipment
  createNewEquipment(form) {
    const equipmentRegulatoryName = form.value.equipmentRegulatoryName;
    let equipmentId;

    if (this.selectedNode) {
      equipmentId = `${ this.selectedNode.id }.${this.selectedNode.children.length + 1}`;
    } else {
      equipmentId = `${this.nodes.length + 1}`;
    }

    const equipmentKey = Math.random() * 400;

    const newEquipment = new singleEquipmentNode(equipmentKey, equipmentId, equipmentRegulatoryName);

    const newEquipmentReference = newEquipment;
    this.arrayOfCreatedEquipmentKeys.push(newEquipmentReference);

    this.selectedNode ? this.selectedNode?.children.push(newEquipment) : this.nodes.push(newEquipment);

    this.prepareDragDrop(this.nodes);
  }

  // Duplicate equipment
  duplicateEquipment() {
    const duplicateEquipment = JSON.parse(JSON.stringify(this.selectedNode));
    const duplicateEquipmentKey = Math.random() * 400;
    duplicateEquipment.key = duplicateEquipmentKey;
    this.arrayOfCreatedEquipmentKeys.push(duplicateEquipmentKey);

    let duplicateEquipmentChildrenArray = duplicateEquipment.children;

    const modifyChildrenKey = (array) => {
      array.forEach((element) => {
        const duplicateEquipmentChildKey = Math.random() * 400;
        element.key = duplicateEquipmentChildKey;
        this.arrayOfCreatedEquipmentKeys.push(duplicateEquipmentChildKey);

        if (element.children.length > 0) {
          duplicateEquipmentChildrenArray = element.children;

          modifyChildrenKey(duplicateEquipmentChildrenArray);
        }
      });
    };

    const oldItemContainer = this.containerToDeleteFromId !== '' ? this.nodeLookup[this.containerToDeleteFromId].children : this.nodes;

    oldItemContainer.push(duplicateEquipment);
  }



// Managing Nesting of created equipment as well as drag drop functionality
// with Angular Material DragDrop cdk starts here
// !! Do NOT edit !! ( Unless you know what you are doing :) )

    prepareDragDrop(nodes) {
      nodes.forEach(node => {
          this.dropTargetIds.push(node.id);
          this.nodeLookup[node.id] = node;
          this.prepareDragDrop(node.children);
      });
  }

    @debounce(50)
    dragMoved(event) {
        const e = this.document.elementFromPoint(event.pointerPosition.x, event.pointerPosition.y);

        if (!e) {
            this.clearDragInfo();
            return;
        }
        const container = e.classList.contains('node-item') ? e : e.closest('.node-item');
        if (!container) {
            this.clearDragInfo();
            return;
        }
        this.dropActionTodo = {
            targetId: container.getAttribute('data-id')
        };
        const targetRect = container.getBoundingClientRect();
        const oneThird = targetRect.height / 3;

        if (event.pointerPosition.y - targetRect.top < oneThird) {
            // before
            // tslint:disable-next-line: no-string-literal
            this.dropActionTodo['action'] = 'before';
        } else if (event.pointerPosition.y - targetRect.top > 2 * oneThird) {
            // after
            // tslint:disable-next-line: no-string-literal
            this.dropActionTodo['action'] = 'after';
        } else {
            // inside
            // tslint:disable-next-line: no-string-literal
            this.dropActionTodo['action'] = 'inside';
        }
        this.showDragInfo();
    }


    drop(event) {
        if (!this.dropActionTodo) { return; }

        const draggedItemId = event.item.data;
        const parentItemId = event.previousContainer.id;
        const targetListId = this.getParentNodeId(this.dropActionTodo.targetId, this.nodes, 'main');

        const draggedItem = this.nodeLookup[draggedItemId];

        const oldItemContainer = parentItemId !== 'main' ? this.nodeLookup[parentItemId].children : this.nodes;
        const newContainer = targetListId !== 'main' ? this.nodeLookup[targetListId].children : this.nodes;


        const i = oldItemContainer.findIndex(c => c.id === draggedItemId);
        oldItemContainer.splice(i, 1);

        switch (this.dropActionTodo.action) {
            case 'before':
            case 'after':
                const targetIndex = newContainer.findIndex(c => c.id === this.dropActionTodo.targetId);
                if (this.dropActionTodo.action === 'before') {
                    newContainer.splice(targetIndex, 0, draggedItem);
                } else {
                    newContainer.splice(targetIndex + 1, 0, draggedItem);
                }
                break;

            case 'inside':
                this.nodeLookup[this.dropActionTodo.targetId].children.push(draggedItem);
                this.nodeLookup[this.dropActionTodo.targetId].isExpanded = true;
                break;
        }

        if (targetListId !== 'main') {
          draggedItem.id = `${this.nodeLookup[this.dropActionTodo.targetId].id}.${this.nodeLookup[this.dropActionTodo.targetId].children.length}`;
        }

        this.prepareDragDrop(this.nodes);
        this.clearDragInfo(true);
    }
    getParentNodeId(id: string, nodesToSearch, parentId: string): string {
        for (const node of nodesToSearch) {
            if (node.id === id) { return parentId; }
            const ret = this.getParentNodeId(id, node.children, node.id);
            if (ret) { return ret; }
        }
        return null;
    }
    showDragInfo() {
        this.clearDragInfo();
        if (this.dropActionTodo) {
            this.document.getElementById('node-' + this.dropActionTodo.targetId).classList.add('drop-' + this.dropActionTodo.action);
        }
    }
    clearDragInfo(dropped = false) {
        if (dropped) {
            this.dropActionTodo = null;
        }
        this.document
            .querySelectorAll('.drop-before')
            .forEach(element => element.classList.remove('drop-before'));
        this.document
            .querySelectorAll('.drop-after')
            .forEach(element => element.classList.remove('drop-after'));
        this.document
            .querySelectorAll('.drop-inside')
            .forEach(element => element.classList.remove('drop-inside'));
    }

    // Managing Nesting of created equipment as well as drag drop functionality
    // with Angular Material DragDrop cdk ends here
}