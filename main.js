
function toggleListBox(){
    $("#listBox").toggle();
}

function changeFormOfHoney(dot, honeyId) {
    
    /* change the current dot */
    $("#dots i.current").removeClass("current");
    $(dot.id).addClass("current");

    /* change the subject content and counter */
    $("#subjectContent h4").html(dot.form);
    $("#subject").html(dot.subject);
    $("#counter").html(dot.number);

    /* change the selected bottom bar */
    $("#bottomNav li.selected").removeClass("selected");
    $(honeyId).addClass("selected");

    /* change the background image of the header */
    $("header").css('background', dot.image);

    /* change Read Me content */
    $("#readMoreBox").html(dot.info);
}

function toggleReadMoreBox(){
    $("#readMoreBox").toggle();
}


