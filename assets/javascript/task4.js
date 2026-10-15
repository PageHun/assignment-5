let i = 1;

function addListItem() {
    let list = document.querySelector("ol");
    list.insertAdjacentHTML(
        'beforeend',
        `<li>list-item ${i}</li>`
    )
    i++;
}

function removeListItem() {
    let listItem = document.querySelector("ol li:last-child");
    listItem.remove();
    i--;
}