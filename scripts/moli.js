

$.get("data/movies.json", function(movies) {

    var i = 1;
   movies.forEach(function(movie){
    addRowToTable(i++,movie.name,movie.description,movie.director,movie.year);
   });
});

function addRowToTable(number,name,description,director,year){
     $("#movieTable").append('<tr><td>'+number+
                            '</td><td>'+name+
                            '</td><td>'+description+
                            '</td><td>'+director+
                            '</td><td>'+year+'</td></tr>');
}