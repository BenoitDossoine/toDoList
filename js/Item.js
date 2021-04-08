"use strict";

class Item {
    constructor(item){
        this._item = item;
        this._dueDate = new Date();
        this._status = false;
    }

    get htmlString() {
        return `<div class="toDoItem">
        <p>${this._item}</p>
        <div class="item-icons">
            <a href="#"><i class="far fa-check-circle"></i></a>
            <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
            <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
        </div>
    </div>`;
    }
}

export default Item;