
var num = 1;

function change_image() {
    num++

    if (num == 3) {
        num = 1;
    }

    var imgtag = document.getElementById("members");
    imgtag.setAttribute("src", "members/100png" + num + ".png");
}


