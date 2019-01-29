function showTime() {
    var date = new Date();
    var now = "";
    now = "GMT+8, " + date.getFullYear() + "-";
    now = now + (date.getMonth() + 1) + "-";
    now = now + date.getDate();
    now = now + " ";

    if (date.getHours() < 10) {
        now = now + "0" + date.getHours() + ":";
    } else {
        now = now + date.getHours() + ":";
    }
    if (date.getMinutes() < 10) {
        now = now + "0" + date.getMinutes() + ":";
    } else {
        now = now + date.getMinutes() + ":";
    }
    if (date.getSeconds() < 10) {
        now = now + "0" + date.getSeconds();
    } else {
        now = now + date.getSeconds();
    }
    document.getElementById("nowTime").innerHTML = now;
    setTimeout("show()", 1000);
}