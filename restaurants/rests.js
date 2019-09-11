var sayings = new Map();
sayings.set("vegan", ["Restaurantes Veganos", "L'Etoille Restaurant", "L'Etoille Restaurant", "L'Etoille Restaurant", "L'Etoille Restaurant", "L'Etoille Restaurant"]);
sayings.set("japanese", ["Restaurantes Japoneses", "Restaurante 1", "Restaurante 2"]);
sayings.set("churrascaria", ["Churrascarias", "Churrascaria 1", "Churrascaria 2"]);

var info = new Map();
info.set("L'Etoille Restaurant", ["letoile.jpg", "L'Etoile Restaurante", "$$$$", "4.5", "413"])

$("button").click(function() {
    alert(this.id);
    console.log("foi");
});

function handleRest(rest){
    newHTML = "";
    newHTML += "<h3 style='text-align: center; color: goldenrod;'>"+sayings.get(rest)[0]+"</h3>";
    newHTML += "<div class='card-columns' style='margin: 5px; margin-top: 20px;'>";

    rests = sayings.get(rest);
    
    rests.forEach(element => {
        restaurant = info.get(element);
        console.log(restaurant);

        if (restaurant != undefined ){
            console.log("Code is here");
            newHTML = fill_html(newHTML, restaurant);
            console.log(newHTML);
        }

    });
    newHTML += "</div>";

    $("#rests").html(newHTML);
}

function fill_html(html, rest_array){
    html += "<div class='card' style='min-width: 18rem; max-width: 30rem; border-radius: 70px; background-color: transparent; border-width: 3px; border-color: lightblue' >";
    html += "<img src=../static/" + rest_array[0] +" class='card-img-top' style='width: 100%;height: 220px; ;border-radius: 67px; background-color: transparent;' alt='...'>";
    html += "<div class='card-body' style='color: goldenrod; background-color: transparent; border-bottom-left-radius: 60px; border-bottom-right-radius: 60px;'>"
    html += "<h5 class='card-title' style='color:lightblue'><p class='mb-'>" + rest_array[2] + " • " + rest_array[1] + "</p></h5>";
    html += "<ul class='list-unstyled list-inline rating mb-0'>";
    html += "<li class='list-inline-item mr-0'><i class='fa fa-star checked'> </i></li>";
    html += "<li class='list-inline-item mr-0'><i class='fa fa-star checked'> </i></li>";
    html += "<li class='list-inline-item mr-0'><i class='fa fa-star checked'> </i></li>";
    html += "<li class='list-inline-item mr-0'><i class='fa fa-star checked'> </i></li>";
    html += "<li class='list-inline-item'><i class='fas fa-star-half-alt amber-text'></i></li>";
    html += "<li class='list-inline-item'><p class='text-muted'>"+rest_array[3] + " " + rest_array[4] +"</p></li>";

    html += "</ul>";
    html += "</div>";
    html += "</img>";    
    html += "</div>";

    return html;
}