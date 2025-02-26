document.getElementById("copyBtn").addEventListener("click", function() {
    let scriptBox = document.getElementById("scriptBox");
    scriptBox.select();
    navigator.clipboard.writeText(scriptBox.value).then(() => {
        alert("Script Copied!");
    }).catch(err => {
        console.error("Failed to copy text", err);
    });
});
