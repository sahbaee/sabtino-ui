const sp_holder = document.querySelectorAll(".sp_holder");
const sp_bar = document.querySelector(".sp_bar_bar");
const home_btn = document.querySelector("#home_btn");
const btn_back = document.querySelector("#btn_back");
const btn_next = document.querySelector("#btn_next");
const form_page = document.querySelectorAll(".form_page");
const sub_btn = document.querySelector("#sub_btn");
function sp_bar_process() {
    let diff = 100 / (sp_holder.length - 1);
    let arr = [];
    let i = 0;
    do {
        arr.push(i * diff + "%");
        i++;
    } while (i < sp_holder.length);
    return arr;
};
let sp_bar_value = sp_bar_process();
let p = 0;
sp_bar.style.width = sp_bar_value[p];
btn_back.addEventListener("click", () => {
    if (p > 0) {
        sp_holder[p].setAttribute('sp_holder', 'deactive');
        p--;
        sp_bar.style.width = sp_bar_value[p];
        check_form_page();
    };
});
btn_next.addEventListener("click", () => {
    if (p < sp_bar_process().length - 1) {
        p++;
        sp_holder[p].setAttribute('sp_holder', 'active');
        sp_bar.style.width = sp_bar_value[p];
    };
    check_form_page();
});
// p  == [0,1,2] 
function check_form_page() {
    console.log(p);
    for (let i = 0; i < 3; i++) {
        form_page[i].classList.add("animate__fadeOutRight");
        setTimeout(() => {
            form_page[i].classList.add("display_none");
            form_page[p].classList.remove("animate__fadeOutRight");
            form_page[p].classList.add("animate__fadeInLeft");
            form_page[p].classList.remove("display_none");
        }, 400);
    };
    if (p == 0) {
        btn_back.classList.add("animate__fadeOutRight");
        setTimeout(() => {
            btn_back.classList.add("display_none");
        }, 400);
    } else {
        btn_back.classList.remove("animate__fadeOutRight");
        btn_back.classList.remove("display_none");
        btn_back.classList.add("animate__fadeInRight");
    };
    if (p == 2) {
        btn_next.classList.add("animate__fadeOutLeft");
        setTimeout(() => {
            btn_next.classList.add("display_none");
            sub_btn.classList.remove("display_none");
            sub_btn.classList.add("animate__fadeInUp");
            btn_next.classList.add("animate__fadeInLeft");
        }, 400);
    } else {
        sub_btn.classList.add("display_none");
        btn_next.classList.remove("animate__fadeOutLeft");
        btn_next.classList.remove("display_none");
    };
};
sub_btn.addEventListener('click', () => {
    document.getElementById("new_form").submit();

});
home_btn.addEventListener('click', go_home)
function go_home() {
    window.location.href = "../../index.html";
};
