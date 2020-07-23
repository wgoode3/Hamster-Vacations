document.getElementById("submit").addEventListener("submit", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    alert("hello there " + name + " nice to meet you!");
    return false;
})