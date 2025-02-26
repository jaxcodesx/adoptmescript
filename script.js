function copyScript() {
    let scriptBox = document.getElementById("scriptBox");
    scriptBox.select();
    document.execCommand("copy");

    let message = document.getElementById("copyMessage");
    message.style.display = "block";
    setTimeout(() => { message.style.display = "none"; }, 2000);
}
