"use strict";

import Item from "./Item.js";

const app = {
    init() {
        const toDoForm = document.getElementById("inputForm");
        toDoForm.addEventListener("submit", this.submitHandler);

        const clearButton = document.getElementById("clearAll");
        this.fetchList();
    },

    submitHandler(e) {
        e.preventDefault();

        const toDoField = document.getElementById("toDoField");
        const toDoItem = toDoField.value;
        app.createItem(toDoItem);
        toDoField.value = "";
    },

    fetchList() {
        const list = JSON.parse(localStorage.getItem("toDoList"));
        const toDoContainer = document.getElementById("toDoList");
        toDoContainer.innerHTML = "";
        if (list === null) {
            const emptyArr = JSON.stringify([]);
            localStorage.setItem("toDoList", emptyArr);
        } else {
            
            list.forEach(function (value) {
                const item = value;
                const html = document.createElement("div.toDoItem");
                html.innerHTML = `
               <p>${item._item}</p>
               <div class="item-icons">
                   <a href="#"><i class="far fa-check-circle"></i></a>
                   <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
                   <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
               </div>`;
                toDoContainer.appendChild(html);
            });
        }




    },

    createItem(item) {
        const newItem = new Item(item);
        console.log(newItem.htmlString);
        const listStored = JSON.parse(localStorage.getItem("toDoList"));
        listStored.push(newItem);
        localStorage.setItem("toDoList", JSON.stringify(listStored));
        this.fetchList();
    }
};

app.init();