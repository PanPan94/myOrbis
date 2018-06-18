window.addEventListener("load", main);

function main() {
    var ovh = document.querySelector('html, body');
    ovh.style.overflow ="auto";
    var loader = document.querySelector("#loader");
    loader.parentNode.removeChild(loader);
    var team = document.querySelector(".team");
    var delay = 100;
    var h = document.querySelector('html');
    for (var i = 0 ; i < team.children.length ; i++) {
        team.children[i].dataset.aos = "fade-up";
        team.children[i].setAttribute("data-aos-delay", delay);
        if(h.clientWidth<768) {
            delay += 50;
        }else {
            delay += 150;
        }
    }

    var wwdBtn = document.querySelectorAll(".wwd-btn");
    var wwdData  = [];
    var wwdCpt = true;

    for(i=0; i < wwdBtn.length; i++) {
        var btn = wwdBtn[i];
        var opened = false;
        var pdf = false;
        var pdf2 = false;
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            if(opened) {
                document.querySelector("#" + wwdData).style.height = "0";
                document.querySelector("#" + wwdData).style.transform = "scaleY(0)";
            }
            wwdData = this.getAttribute("data-display");
            if(wwdData == "wwd-cdc" && (!pdf)) {
                var iframe = document.createElement("iframe");
                iframe.setAttribute("src", "https://drive.google.com/file/d/0B0P_MxEqMqp6RDZkU0ZvQTdscEE/preview");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("border", "0");
                iframe.setAttribute("cellspacing", "0");
                iframe.classList.add("wwd-pdf");
                iframe.style.height="100%";
                iframe.style.width="50%";
                iframe.style.margin="0 auto";
                iframe.style.display="block";
                document.querySelector("#" + wwdData).appendChild(iframe);
                pdf = true;
            }else if(wwdData == 'wwd-cdr' && !pdf2) {
                var iframe = document.createElement("iframe");
                iframe.setAttribute("src", "https://drive.google.com/file/d/1E7Rn4hkNwHztKH3Q7EXCLJnqjE181PLx/preview");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("border", "0");
                iframe.setAttribute("cellspacing", "0");
                iframe.classList.add("wwd-pdf");
                iframe.style.height="100%";
                iframe.style.width="50%";
                iframe.style.margin="0 auto";
                iframe.style.display="block";
                document.querySelector("#" + wwdData).appendChild(iframe);
                pdf2 = true;
            }
            
            document.querySelector("#" + wwdData).style.height = "650px";
            document.querySelector("#" + wwdData).style.transform = "scaleY(1)";
            opened = true;
        });
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    document.querySelector('#form-btn').addEventListener("click", function(e) {
        e.preventDefault();
        var valid = true;
        var name = document.querySelector('#field-name').value;
        var mail = document.querySelector('#field-mail').value;
        var message = document.querySelector('#field-message').value;

        if(name == "") {
            alert("Entrez un nom valide.")
            valid = false;
        }else if (!(validateEmail(mail))) {
            alert("Entrez un mail valide.");
            valid = false;
        }else if (message == "") {
            alert("Entrez un message valide.");
            valid = false;
        }

        if(valid) {
            document.getElementById("contact").submit();
        }
    })
} //end

