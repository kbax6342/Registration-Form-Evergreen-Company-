//Problem: Navigation looks gross in smaller browswer widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation


//Create a select and append to menu
var $select = $("<select></select>");
$(".nav-container").append($select);


//Cycle over menu links
    $(".nav-container a").each(function(){
        //create variable for the anchor element
        var $anchor = $(this);
        //Create and option tags for select element
        var $option = $("<option></option>");
        //Get value for the href
        $option.val( 
        $anchor.attr("href")
    );
        //Get list of value of the options
        $option.text($anchor.text()); 
        //Add the options to the select tag
        $select.append($option);
    });


        $select.change(function(){
                  
        window.location = $select.val();

              });

//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times


var $password = $("#password");
var $confirmPassword = $("#confirm-password");

//hide hints
$("form span").hide();

function passwordEvent(){
    //Find out if password is valid
    if($password.val().length > 8){
        //Hide hint if valid
       $password.next().hide();
   }else{
       //else show hint
       $password.next().show();
   }
}

function confirmPasswordEvent(){
    if($password.val()=== $confirmPassword.val()){
        $confirmPassword.next().hide();
    }else{
        $confirmPassword.next().show();
    }
}



$password.focus(passwordEvent).keyup(passwordEvent)
            .focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

//$confirm-password.focus(passwordEvent).keyup(passwordEvent);

//When event happens on confirmation input
    //Fint out if password and confirmation match
    //else show hint


app.listen(4000);









