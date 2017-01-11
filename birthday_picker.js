function PopulateBirthdayPicker(yearid, monthid, dateid){

    //populate our years select box
    for (i = new Date().getFullYear(); i > 1900; i--){
        $('#'+yearid).append($('<option />').val(i).html(i));
    }
    //populate our months select box
    for (i = 1; i < 13; i++){
        $('#'+monthid).append($('<option />').val(i).html(i));
    }
    //populate our Days select box
    updateNumberOfDays(yearid, monthid, dateid); 

    //"listen" for change events
    $('#'+yearid+', #'+monthid).change(function(){
        updateNumberOfDays(yearid, monthid, dateid); 
    });
}

function updateNumberOfDays(yearid, monthid, dateid){
    $('#'+dateid).html('');
    month = $('#'+monthid).val();
    year = $('#'+yearid).val();
    days = daysInMonth(month, year);

    for(i=1; i < days+1 ; i++){
            $('#'+dateid).append($('<option />').val(i).html(i));
    }
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
