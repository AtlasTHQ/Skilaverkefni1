/**
 * Created by 1612972679 on 28.1.2016.
 */
$(document).ready(function(){
    //Hérna næ ég í gögnin með ajax
    $.ajax({
        'url': 'http://apis.is/currency/lb',
        'type': 'GET',
        'dataType': 'json',
        //Hérna skilar functionið út json-inu
        'success': function(response) {
            console.log(response);
            //Ég tek inn html template-ið
            var template = $("#itemTemplate").html();
            //Compile-a það
            var renderer = Handlebars.compile(template);
            //Og svo loks render-a og skila því inn í html-ið
            var result = renderer(response);
            $("#handleContainer").html(result);
        }
    });
});

