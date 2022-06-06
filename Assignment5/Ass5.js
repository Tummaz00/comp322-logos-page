function theIcons() {
    $(document).ready(function(){
        $("#Netflix").mouseenter(function(){
            document.getElementById("in").innerHTML = "NETFLIX";
            $("#Netflix").css("opacity", "0.5");
        });
        $("#Netflix").mouseleave(function(){
            document.getElementById("out").innerHTML = "NETFLIX";
            $("#Netflix").css("opacity", "1.0");
        });
        $("#Netflix").dblclick(function(){
            window.open('http://www.netflix.com');
        });
        $("#Netflix").click(function(){
            $("#bigIcon").html('<img src = "./img/Netflix.jfif" id = "NF">');
            $("#NF").css("width", "500px");
            $("#NF").css("height", "400px");
        });

        $("#Instagram").mouseenter(function(){
            document.getElementById("in").innerHTML = "INSTAGRAM";
            $("#Instagram").css("opacity", "0.5");
        });
        $("#Instagram").mouseleave(function(){
            document.getElementById("out").innerHTML = "INSTAGRAM";
            $("#Instagram").css("opacity", "1.0");
        });
        $("#Instagram").dblclick(function(){
            window.open('http://www.instagram.com');
        });
        $("#Instagram").click(function(){
            $("#bigIcon").html('<img src = "./img/Instagram.jpg" id = "IG">');
            $("#IG").css("width", "500px");
            $("#IG").css("height", "400px");
        });

        $("#Playstation").mouseenter(function(){
            document.getElementById("in").innerHTML = "PLAYSTATION";
            $("#Playstation").css("opacity", "0.5");
        });
        $("#Playstation").mouseleave(function(){
            document.getElementById("out").innerHTML = "PLAYSTATION";
            $("#Playstation").css("opacity", "1.0");
        });
        $("#Playstation").dblclick(function(){
            window.open('http://www.playstation.com');
        });
        $("#Playstation").click(function(){
            $("#bigIcon").html('<img src = "./img/PSN.png" id = "PS">');
            $("#PS").css("width", "500px");
            $("#PS").css("height", "400px");
        });

        $("#Crunchyroll").mouseenter(function(){
            document.getElementById("in").innerHTML = "CRUNCHYROLL";
            $("#Crunchyroll").css("opacity", "0.5");
        });
        $("#Crunchyroll").mouseleave(function(){
            document.getElementById("out").innerHTML = "CRUNCHYROLL";
            $("#Crunchyroll").css("opacity", "1.0");
        });
        $("#Crunchyroll").dblclick(function(){
            window.open('http://www.crunchyroll.com');
        });
        $("#Crunchyroll").click(function(){
            $("#bigIcon").html('<img src = "./img/Crunchyroll.png" id = "CR">');
            $("#CR").css("width", "500px");
            $("#CR").css("height", "400px");
        });

        $("#VizMedia").mouseenter(function(){
            document.getElementById("in").innerHTML = "VIZMEDIA";
            $("#VizMedia").css("opacity", "0.5");
        });
        $("#VizMedia").mouseleave(function(){
            document.getElementById("out").innerHTML = "VIZMEDIA";
            $("#VizMedia").css("opacity", "1.0");
        });
        $("#VizMedia").dblclick(function(){
            window.open('http://www.viz.com');
        });
        $("#VizMedia").click(function(){
            $("#bigIcon").html('<img src = "./img/VizMedia.png" id = "VM">');
            $("#VM").css("width", "500px");
            $("#VM").css("height", "400px");
        });

        $("#Youtube").mouseenter(function(){
            document.getElementById("in").innerHTML = "YOUTUBE";
            $("#Youtube").css("opacity", "0.5");
        });
        $("#Youtube").mouseleave(function(){
            document.getElementById("out").innerHTML = "YOUTUBE";
            $("#Youtube").css("opacity", "1.0");
        });
        $("#Youtube").dblclick(function(){
            window.open('http://www.youtube.com');
        });
        $("#Youtube").click(function(){
            $("#bigIcon").html('<img src = "./img/Youtube.png" id = "YT">');
            $("#YT").css("width", "500px");
            $("#YT").css("height", "400px");
        });

    });
}

function getXY(){
    let x = document.getElementById("X");
    let y = document.getElementById("Y");
    $(document).ready(function() {
        $("#Icons").mousemove(function (event) {
            x.innerHTML = event.pageX;
            y.innerHTML = event.pageY;
        });
    });

}