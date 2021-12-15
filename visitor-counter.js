function VisitorCounter(){
    fetch("https://6guvlwqcz7.execute-api.us-east-1.amazonaws.com/VisitorCounter")
        .then(response => response.text())
        .then((body) => {
            document.getElementById("visitor-counter").innerHTML=body
        })
}