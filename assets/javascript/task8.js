const addBtn = document.querySelector(".btn-add");
let tasks = []

addBtn.addEventListener('click', function(event){
    const list = document.querySelector(".left__list");
    const name = document.querySelector(".form__input").value;
    const desc = document.querySelector(".form__textarea").value;
    
    if (name != "" && desc != ""){
        list.insertAdjacentHTML(
            'afterbegin',
            `<li>
                <div>
                    <h3>
                        ${name}
                    </h3>
                    <p>
                        ${desc}
                    </p>
                </div>
                <button class="btn-delete" onclick="this.closest('li').remove(); tasks.pop()">Delete</button>
            </li>`
        )
        tasks.push(name);
    } else{
        alert("Fill inputs");
    }
});

function storeTask() {
    console.log(tasks);
}