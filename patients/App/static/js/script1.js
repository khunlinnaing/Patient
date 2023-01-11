function validateEmail(email){
    var regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validateAll(){
    var name = $("#name").val()
    var phone = $("#phone").val()
    var email = $("#email").val()
    var age = $("#age").val()
    var gender = $("#gender").val()
    if (name == ''){
        swal("Dpss!", "Name field cannot be empty", 'error')
        return false;
    }
    else if (name.split(' ').length < 2){
        swal("Dpss!", "The last name is required.", 'error')
        return false;
    }
    else if (name == name.toUpperCase()){
        swal("Dpss!", "Name field cannot be UPPERCASE", 'error')
        $("#name").val('')
        return false;
    }
    else if (phone == ''){
        swal("Dpss!", "Phone field cannot be empty", 'error')
        return false;
    }
    else if (email == ''){
        swal("Dpss!", "email field cannot be empty", 'error')
        return false;
    }else if(!(validateEmail(email))){
        swal("Dpss!", "Please Enter Email Format", 'error')
        return false;
    }
    else if (age == ''){
        swal("Dpss!", "Age field cannot be empty", 'error')
        return false;
    }else if(age > 120){
        swal("Denied !", "The maximun value is 120 years", 'error')
        $('#age').val("")
        return false;
    }
    else if (gender == ''){
        swal("Dpss!", "Gender field cannot be empty", 'error')
        return false;
    }
    else{
        return true
    }
}

$("#btn-add").bind('click', validateAll)

// 2) Script (Name field) only letter is allowed
$(document).ready(function(){
    $('input[name="name"]').keyup(function(){
        var letter = $(this).val();
        var allow = letter.replace(/[^a-zA-Z _]/g, '');
        $(this).val(allow);
    });
    $('input').on("keypress",function(e){
        if(e.which === 32 &&  ! this.value.length)
            e.preventDefault();
    });
    $("#name").keyup(function(){
        var txt = $(this).val()
        console.log(txt.split(' ').length)
        if(txt.split(' ').length == 3){
            swal("Dpss!", "Put only first and last name.", 'error')
            return false
        }else{
            $(this).val(ucwords(txt))
        }
    });
    $("#email").keyup(function(){
        $(this).val(($(this).val()).toLowerCase());
    });
    $('#age').keyup(function(){
        var age_val = $(this).val();
        if (/^0/.test(age_val)){
            var allow =age_val.replace(/^0/, '')
            // $(this).val()
        }else{
            var allow = age_val.replace(/[^0-9]/g, '');
        }
        $(this).val(allow);
    });
    $('#phone').inputmask("(99) 99999-9999", 
        { "onincomplete": function(){
            swal("Opss !","Incomplete Phone. Review.", "error");
            return false;
        }
    }); 
    // If NO PATIENT, SHOW A MESSAGE 
    var verify = $("#chk_td").length;
    if(verify == 0){
        $("#no_data").text("No Patient found")
    }
    // 12) Ckise iffcabvas when a button clicked
    $("button.btn_sidebar_logout,button.btn_sidebar_suport").click(function(){
        console.log($(this).attr('href'));
        $('.offcanvas').offcanvas('hide');
    });
    $("button#btn-proceed").on("click",function(){
        $('.sport_form').submit();
    });
})

// <!-- 103 time running at realtime -->
setInterval(function () {
    var date = new Date();
    $("#clock_time").html(
        (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '')+ date.getMinutes() + ":" + (date.getSeconds() < 10 ? '0': '')+ date.getSeconds()
    );
    }, 500);

function ucwords (str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

