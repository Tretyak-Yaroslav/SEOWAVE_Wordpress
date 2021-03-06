function pm_change_search_field(a)
{
    var group = a;
    var data ={'action':'pm_advance_search_get_search_fields_by_gid', 'gid' : group, 'match_fields': ' '};
    jQuery.post(pm_ajax_object.ajax_url, data, function (response){
       if(response){
           jQuery('#advance_seach_ul').empty();
         jQuery('#advance_seach_ul').append(response);
         pm_advance_user_search('');

     }else{
           //console.log("err");
       }

    });
}
function pm_remove_attachment(obj,key,value)
{
    jQuery('#pm-edit-group-popup, .pm-popup-mask, .pg-blog-dialog-mask').toggle();
    ( function($) {
        $( "#pg-remove-attachment-dialog" ).dialog({
          resizable: false,
          height: "auto",
          width: 400,
          modal: true,
          buttons: {
            "Yes": function() {
                
                var data = {
                        'action': 'pm_remove_attachment',
                        'key': key,
                        'value':value
                };
                $.post(pm_ajax_object.ajax_url, data, function(response) {
                    if(response)
                    {
                        $(obj).parent('a').parent('span.pm_frontend_attachment').remove();
                    }
                });

                $( this ).dialog( "close" );
            },
            "No": function() {
              $( this ).dialog( "close" );
            }
          }
        });
    } )(jQuery);
}

function pm_expand_all_conent()
{
	jQuery("#pm-accordion .pm-accordian-content").show();	
}

function pm_collapse_all_conent()
{
	jQuery("#pm-accordion .pm-accordian-content").hide();	
}
 
function pm_show_hide(obj,primary,secondary,trinary)
{	
	a = jQuery(obj).is(':checked');
	if (a == true)
	 {
		jQuery('#'+primary).show(500);
		if(secondary!='')
		{
			jQuery('#'+secondary).hide(500);
		}
		if(trinary!='')
		{
			jQuery('#'+trinary).hide(500);
		}		
	}
	else 
	{
		jQuery('#'+primary).hide(500);
		if(secondary!='')
		{
			jQuery('#'+secondary).show(500);
		}
		if(trinary!='')
		{
			jQuery('#'+trinary).show(500);
		}
	}
	
}

function pm_add_repeat(obj)
{
	a= jQuery(obj).parent('a').parent('div.pm_repeat').clone();
	jQuery(a).children('input').val('');
	jQuery(obj).parent('a').parent('div.pm_repeat').parent('div.pm-field-input').append(a);
}

function pm_remove_repeat(obj)
{
	jQuery(obj).parent('a').parent('div.pm_repeat').remove();
}

function validate_phone_number2(number)
{
    var isnumber = jQuery.isNumeric(number);
    var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    var phone_num = number.replace(/[^\d]/g, '');
    if ( number != "")
    {
//        if(isnumber == false )
//        return false;
    
    if(phone_num.length <10 || phone_num.length > 13)
        return false;
    
//    if(!regex.test(number))
//        return false;
    
    return true;
    }else
    {
        return true;
    }
   

}

function validate_phone_number(number) {
    if(number!=""){
    var phone_num = number.replace(/[^\d]/g, '');
    var a = number;
       var phone_num = number.replace(/[^\d]/g, '');
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)&&(phone_num.length >=10 && phone_num.length <= 13)) {
        //console.log(phone_num);
        return true;
    }
    else {
        return false;
    }
    }else{
        return true;
    }
}

function validate_facebook_url(val)
{
    if (val != "") {
        if (/(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*?(\/)?([\w\-\.]*)/i.test(val))
        {
            return true;
        } else
        {
            return false;
        }
    } else {
        return true;
    }

}

function validate_twitter_url(val)
{
    if (val != '') {
        if (/(ftp|http|https):\/\/?((www|\w\w)\.)?twitter.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(val)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function validate_google_url(val)
{
    if (val != '') {
        if (/((http:\/\/(plus\.google\.com\/.*|www\.google\.com\/profiles\/.*|google\.com\/profiles\/.*))|(https:\/\/(plus\.google\.com\/.*)))/i.test(val)) {
            return true;
        } else {
            return false;
        }

    } else {
        return true;
    }
}

function validate_linked_in_url(val)
{
    if (val != '') {
        if (/(ftp|http|https):\/\/?((www|\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(val)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function validate_youtube_url(val)
{
    if (val != '') {
        if (/(ftp|http|https):\/\/?((www|\w\w)\.)?youtube.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(val)) {
            return true;
        } else {
            return false;
        }

    } else {
        return true;
    }
}

function validate_instagram_url(val)
{
    if (val != '') {
        var regex = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/;
        if (val.match(regex)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function profile_magic_frontend_validation(form)
{
	
	var email_val = "";
	var formid = form.id;
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	jQuery('.errortext').html('');
	jQuery('.errortext').hide();
	jQuery('.all_errors').html('');
	jQuery('.warning').removeClass('warning');

        jQuery('#'+formid+' .pm_email').each(function (index, element) {
		var email = jQuery(this).children('input').val();
		var isemail = regex.test(email);
		if (isemail == false && email != "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_email);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_number').each(function (index, element) {
		var number = jQuery(this).children('input').val();
		var isnumber = jQuery.isNumeric(number);
		if (isnumber == false && number != "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_number);
			jQuery(this).children('.errortext').show();
		}
	});
	
        	
	jQuery('#'+formid+' .pm_phone_number').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_phone_number(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_phone_number);
			jQuery(this).children('.errortext').show();
		}
	});
        
        jQuery('#'+formid+' .pm_mobile_number').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_phone_number(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_mobile_number);
			jQuery(this).children('.errortext').show();
		}
	});
        
        jQuery('#'+formid+' .pm_facebook_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_facebook_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_facebook_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
        jQuery('#'+formid+' .pm_twitter_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_twitter_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_twitter_url);
			jQuery(this).children('.errortext').show();
		}
	});

            
        jQuery('#'+formid+' .pm_google_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_google_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_google_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
                
        jQuery('#'+formid+' .pm_linked_in_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_linked_in_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_linked_in_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
                
        jQuery('#'+formid+' .pm_youtube_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_youtube_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_youtube_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
                
        jQuery('#'+formid+' .pm_instagram_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_instagram_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_instagram_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
	jQuery('#'+formid+' .pm_datepicker').each(function (index, element) {
		var date = jQuery(this).children('input').val();
		var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
                if (date != "" && !pattern.test(date)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_date);
			jQuery(this).children('.errortext').show();
		}
            
	});
	
	jQuery('#'+formid+' .pm_required').each(function (index, element) {
		var value = jQuery(this).children('input').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_select_required').each(function (index, element) {
		var value = jQuery(this).children('select').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('select').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_textarearequired').each(function (index, element) {
		var value = jQuery(this).children('textarea').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('textarea').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_checkboxrequired').each(function (index, element) {
		var checkboxlenght = jQuery(this).children('.pmradio').children('.pm-radio-option').children('input[type="checkbox"]:checked');
		var atLeastOneIsChecked = checkboxlenght.length > 0;
		if (atLeastOneIsChecked == true) {
		}else{
			//jQuery(this).children('textarea').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_radiorequired').each(function (index, element) {
		var checkboxlenght = jQuery(this).children('.pmradio').children('.pm-radio-option').children('input[type="radio"]:checked');
		var atLeastOneIsChecked = checkboxlenght.length > 0;
		if (atLeastOneIsChecked == true) {
		}else{
			//jQuery(this).children('textarea').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_fileinput .pm_repeat').each(function (index, element) {
		var val = jQuery(this).children('input').val().toLowerCase();
		var allowextensions = jQuery(this).children('input').attr('data-filter-placeholder');
		if(allowextensions=='')
		{
			allowextensions = pm_error_object.allow_file_ext;
		}
		
		allowextensions = allowextensions.toLowerCase();
		var regex = new RegExp("(.*?)\.(" + allowextensions + ")$");
		if(!(regex.test(val)) && val!="") {
		
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.file_type);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_repeat_required .pm_repeat').each(function (index, element) {
		var value = jQuery(this).children('input').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_user_pass').each(function (index, element) {
		var password = jQuery(this).children('input').val();
		var passwordlength = password.length;
		if(password !="")
		{
			if(passwordlength < 7)
			{
				jQuery(this).children('input').addClass('warning');
				jQuery(this).children('.errortext').html(pm_error_object.short_password);
				jQuery(this).children('.errortext').show();
			}
		}
	});
	
	jQuery('#'+formid+' .pm_confirm_pass').each(function (index, element) {
		var confirm_pass = jQuery(this).children('input').val();
		var password = password = jQuery('#'+formid+' .pm_user_pass').children('input').val();
		if(password != confirm_pass)
		{
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.pass_not_match);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_recaptcha').each(function (index, element) {
		var response = grecaptcha.getResponse();
				//recaptcha failed validation
		if (response.length == 0) {
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	var b = '';
	 jQuery('#'+formid+' .errortext').each(function () {
		var a = jQuery(this).html();
		b = a + b;
	});
	
	if (jQuery('#'+formid+' .usernameerror').length > 0) 
		{
			c = jQuery('.usernameerror').html();
			b = c + b;
		}
		
		if (jQuery('#'+formid+' .useremailerror').length > 0) 
		{
			d = jQuery('.useremailerror').html();
			b = d + b;
		}
	jQuery('#'+formid+' .all_errors').html(b);
	var error = jQuery('#'+formid+' .all_errors').html();
	if (error == '') {
		return true;
	} else {
		return false;
	}
}

function pm_frontend_check_username(formid)
{
	jQuery('.pm_user_name').each(function (index, element) {
			var field = this;
			var username = jQuery(this).children('input').val();
			var data = {
							'action': 'pm_check_user_exist',
							'type': 'validateUserName',
							'userdata' : username
						};
		// We can also pass the url value separately from ajaxurl for front end AJAX implementations
			jQuery.post(pm_ajax_object.ajax_url, data, function(response) {
				if(response=="true")
				{
					jQuery(field).children('input').addClass('warning');
					jQuery(field).children('.usernameerror').html(pm_error_object.user_exist);
					jQuery(field).children('.usernameerror').show();
				}
				else
				{
					jQuery(field).children('input').removeClass('warning');
					jQuery(field).children('.usernameerror').html('');
					jQuery(field).children('.usernameerror').hide();
				}
				
			});		
		});	
}

function pm_frontend_check_useremail(previous)
{
	jQuery('.pm_user_email').each(function (index, element) {
		var field = this;
		var username = jQuery(this).children('input').val();
		var data = {
						'action': 'pm_check_user_exist',
						'type': 'validateUserEmail',
						'userdata' : username,
                                                'previous_data':previous
					};
	// We can also pass the url value separately from ajaxurl for front end AJAX implementations
		jQuery.post(pm_ajax_object.ajax_url, data, function(response) {
			if(response=="true")
			{
				jQuery(field).children('input').addClass('warning');
				jQuery(field).children('.useremailerror').html(pm_error_object.email_exist);
				jQuery(field).children('.useremailerror').show();
			}
			else
			{
				jQuery(field).children('input').removeClass('warning');
				jQuery(field).children('.useremailerror').html('');
				jQuery(field).children('.useremailerror').hide();	
			}
		});		
	});
}

function pm_frontend_change_password(form)
{
	var pass1 = jQuery(form).children('.pmrow').children('.pm-col').children('.pm-field-input').children('#pass1').val();	
        var pass2 = jQuery(form).children('.pmrow').children('.pm-col').children('.pm-field-input').children('#pass2').val();	
	var userid = jQuery(form).children('#user_id').val();
        jQuery('#pm_reset_passerror').removeClass('pm_password_error');
        jQuery('#pm_reset_passerror').removeClass('pm_password_success');
	var data = {'action': 'pm_change_frontend_user_pass','pass1': pass1,'pass2' : pass2};
	// We can also pass the url value separately from ajaxurl for front end AJAX implementations
		jQuery.post(pm_ajax_object.ajax_url, data, function(response) {
			if(response==true)
			{
                            jQuery('#pm_reset_passerror').addClass('pm_password_success');
				jQuery('#pm_reset_passerror').html(pm_error_object.password_change_successfully);
				jQuery('#pm_reset_passerror').show();
                                window.location = pm_error_object.login_url;
                        }
                        else
                        {
                            
                            jQuery('#pm_reset_passerror').addClass('pm_password_error');
                            jQuery('#pm_reset_passerror').html(response);
			    jQuery('#pm_reset_passerror').show();
                        }
		});		
	return false;
}

var searchRequest = null; 
function pm_advance_user_search(pagenum)
{


    var form = jQuery("#pm-advance-search-form");
    jQuery("#pm_result_pane").html('<div class="pm-loader"></div>');
    var pmDomColor = jQuery(".pmagic").find("a").css('color');
    jQuery(".pm-loader").css('border-top-color', pmDomColor);
  


       
       
    if(pagenum!== '')
    {
            if(pagenum=='Reset')
            {
                form.trigger('reset');
                jQuery('#advance_search_pane').hide(200);
                jQuery('#pagenum').attr("value",1);
                jQuery('input[type=checkbox]').attr("checked",false);
                pm_change_search_field('');
            }
            else
            {
                jQuery('#pagenum').attr("value",pagenum);
            }
        
    }
    else
    {
         jQuery('#pagenum').attr("value",1);
    }
    var form_values = form.serializeArray();

    var data = {};

    //creating data in object format and array for multiple checkbox
    jQuery.each(form_values, function () {
        if (data[this.name] !== undefined) {
            if (!data[this.name].push) {
                data[this.name] = [data[this.name]];
            }
            data[this.name].push(this.value);
        } else {
            data[this.name] = this.value;
        }
    });
    //console.log(data);
   
    if(searchRequest != null)
        searchRequest.abort();
        //ajax call start
    searchRequest =    jQuery.post(pm_ajax_object.ajax_url, data, function (resp) 
        {
        
                if (resp)
                {   
                    jQuery("#pm_result_pane").html(resp);
                    
        var pmDomColor = jQuery(".pmagic").find("a").css('color');
        jQuery(".pm-color").css('color', pmDomColor);
        jQuery( ".page-numbers.current" ).css('background', pmDomColor); 
                } 
                else
                {
                    //console.log("err");
                }
            
         });
         //ajax call ends here
         
         


}

function profile_magic_send_email(userid)
{
    var data = {'action': 'pm_send_change_pass_email','userid': userid};
	// We can also pass the url value separately from ajaxurl for front end AJAX implementations
		jQuery.post(pm_ajax_object.ajax_url, data, function(response) {
                    
		});		
	return false;
}

function profile_magic_multistep_form_validation(form)
{
	
	var email_val = "";
	var formid = form.attr('id');
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	jQuery('.errortext').html('');
	jQuery('.errortext').hide();
	jQuery('.all_errors').html('');
	jQuery('.warning').removeClass('warning');
jQuery('#'+formid+' .pm_email').each(function (index, element) {
		var email = jQuery(this).children('input').val();
		var isemail = regex.test(email);
		if (isemail == false && email != "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_email);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_number').each(function (index, element) {
		var number = jQuery(this).children('input').val();
		var isnumber = jQuery.isNumeric(number);
		if (isnumber == false && number != "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_number);
			jQuery(this).children('.errortext').show();
		}
	});
	
        jQuery('#'+formid+' .pm_phone_number').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_phone_number(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_phone_number);
			jQuery(this).children('.errortext').show();
		}
	});
        
        jQuery('#'+formid+' .pm_mobile_number').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_phone_number(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_mobile_number);
			jQuery(this).children('.errortext').show();
		}
	});
        
        jQuery('#'+formid+' .pm_facebook_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_facebook_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_facebook_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
        jQuery('#'+formid+' .pm_twitter_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_twitter_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_twitter_url);
			jQuery(this).children('.errortext').show();
		}
	});

            
        jQuery('#'+formid+' .pm_google_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_google_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_google_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
                
        jQuery('#'+formid+' .pm_linked_in_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_linked_in_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_linked_in_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
                
        jQuery('#'+formid+' .pm_youtube_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_youtube_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_youtube_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
                
        jQuery('#'+formid+' .pm_instagram_url').each(function (index, element) {
		var number = jQuery(this).children('input').val();
                if (!validate_instagram_url(number)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_instagram_url);
			jQuery(this).children('.errortext').show();
		}
	});
        
	jQuery('#'+formid+' .pm_datepicker').each(function (index, element) {
		var date = jQuery(this).children('input').val();
		var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
    	if (date != "" && !pattern.test(date)) {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_date);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_required').each(function (index, element) {
		var value = jQuery(this).children('input').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_select_required').each(function (index, element) {
		var value = jQuery(this).children('select').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('select').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_textarearequired').each(function (index, element) {
		var value = jQuery(this).children('textarea').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('textarea').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_checkboxrequired').each(function (index, element) {
		var checkboxlenght = jQuery(this).children('.pmradio').children('.pm-radio-option').children('input[type="checkbox"]:checked');
		var atLeastOneIsChecked = checkboxlenght.length > 0;
		if (atLeastOneIsChecked == true) {
		}else{
			//jQuery(this).children('textarea').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_radiorequired').each(function (index, element) {
		var checkboxlenght = jQuery(this).children('.pmradio').children('.pm-radio-option').children('input[type="radio"]:checked');
		var atLeastOneIsChecked = checkboxlenght.length > 0;
		if (atLeastOneIsChecked == true) {
		}else{
			//jQuery(this).children('textarea').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_fileinput .pm_repeat').each(function (index, element) {
		var val = jQuery(this).children('input').val().toLowerCase();
		var allowextensions = jQuery(this).children('input').attr('data-filter-placeholder');
		if(allowextensions=='')
		{
			allowextensions = pm_error_object.allow_file_ext;
		}
		
		allowextensions = allowextensions.toLowerCase();
		var regex = new RegExp("(.*?)\.(" + allowextensions + ")$");
		if(!(regex.test(val)) && val!="") {
		
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.file_type);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_repeat_required .pm_repeat').each(function (index, element) {
		var value = jQuery(this).children('input').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_user_pass').each(function (index, element) {
		var password = jQuery(this).children('input').val();
		var passwordlength = password.length;
		if(password !="")
		{
			if(passwordlength < 7)
			{
				jQuery(this).children('input').addClass('warning');
				jQuery(this).children('.errortext').html(pm_error_object.short_password);
				jQuery(this).children('.errortext').show();
			}
		}
	});
	
	jQuery('#'+formid+' .pm_confirm_pass').each(function (index, element) {
		var confirm_pass = jQuery(this).children('input').val();
		var password = password = jQuery('#'+formid+' .pm_user_pass').children('input').val();
		if(password != confirm_pass)
		{
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.pass_not_match);
			jQuery(this).children('.errortext').show();
		}
	});
	
	jQuery('#'+formid+' .pm_recaptcha').each(function (index, element) {
		var response = grecaptcha.getResponse();
				//recaptcha failed validation
		if (response.length == 0) {
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
	
	var all_errors = '';
	jQuery('#'+formid+' .errortext').each(function () {
		var a = jQuery(this).html();
		all_errors = a + all_errors;
	});
		if (jQuery('#'+formid+' .usernameerror').length > 0) 
		{
			c = jQuery('.usernameerror').html();
			if(jQuery.trim(c)!='')
			jQuery('.pm_user_name').children('input').addClass('warning');
			all_errors = c + all_errors;
		}
		
		if (jQuery('#'+formid+' .useremailerror').length > 0) 
		{
			d = jQuery('.useremailerror').html();
			if(jQuery.trim(d)!='')
			jQuery('.pm_user_email').children('input').addClass('warning');
			all_errors = d + all_errors;
		}
	jQuery('#'+formid+' .all_errors').html(all_errors);
	var error = jQuery('#'+formid+' .all_errors').html();
	if (error == '') {
		return true;
	} else {
		return false;
	}
}

function openParentTab() 
{
	locationHash = location.hash.substring( 1 );
	//console.log(locationHash);
	// Check if we have an location Hash
	if (locationHash) {
		// Check if the location hash exsist.
		var hash = jQuery('#'+locationHash);
		if (hash.length) {
			 var t = hash;
                        jQuery('li.pm-profile-tab a').removeClass('active');         
                        jQuery(this).addClass('active');
                        jQuery('.pg-profile-tab-content').hide();
                        jQuery(t).find('.pm-section-content:first').show();
                        jQuery('li.hideshow ul').hide();
                        jQuery(t).fadeIn('slow');
                        return false;
		}
	}
}

function generateTabs(tabs) { 

	html = '';
	for (var i in tabs) { 
		tab = tabs[i];
		html = html + '<li class="multipage_tab"><a href="#" onclick="return jQuery(\'#multipage\').gotopage(' + tab.number + ');">' + tab.title + '</a></li>';				
	}
	jQuery('<ul class="multipage_tabs" id="multipage_tabs">'+html+'<div class="clearer"></div></ul>').insertBefore('#multipage');
}
function setActiveTab(selector,page) { 
	jQuery('#multipage_tabs li').each(function(index){ 
		if ((index+1)==page) { 
			jQuery(this).addClass('active');
		} else {
			jQuery(this).removeClass('active');
		}
	});			
}
		
function transition(from,to) {
	jQuery(from).fadeOut('fast',function(){jQuery(to).fadeIn('fast');});

}
function textpages(obj,page,pages) { 
	jQuery(obj).html(page + ' of ' + pages);
}

function pm_user_image_validation(a)
{
	var val = jQuery(a).children('.pm-user-image').val().toLowerCase();
	if(val=='')
	{
		jQuery(a).children('pm-user-image').addClass('warning');
		jQuery(a).children('.pm-popup-error').html(pm_error_object.required_field);
		jQuery(a).children('.pm-popup-error').show();
		return false;
	}
	
	var allowextensions = 'jpg|jpeg|png|gif';
	if(allowextensions=='')
	{
		allowextensions = pm_error_object.allow_file_ext;
	}
	allowextensions = allowextensions.toLowerCase();
	var regex = new RegExp("(.*?)\.(" + allowextensions + ")$");
	if(!(regex.test(val)) && val!="") {
		jQuery(a).children('pm-user-image').addClass('warning');
		jQuery(a).children('.pm-popup-error').html(pm_error_object.file_type);
		jQuery(a).children('.pm-popup-error').show();
		return false;
	}
	else
	{
		jQuery(a).children('.pm-popup-error').html('');
		jQuery(a).children('.pm-popup-error').hide();
		return true;
	}
}





//GUI Functions
function callPmPopup(dialog) {
    var pmId = dialog + "-dialog";
    jQuery(pmId).siblings('.pm-popup-mask').show();
    jQuery(pmId).show();
    jQuery('.pm-popup-container').css("animation", "pm-popup-in 0.3s ease-out 1");
}

function start_messenger()
{
      jQuery(function() {
        // Initializes and creates emoji set from sprite sheet
        window.emojiPicker = new EmojiPicker({
          emojiable_selector: '[data-emojiable=true]',
          assetsPath: pm_ajax_object.plugin_emoji_url,
          popupButtonClasses: 'fa fa-smile-o'
        });
         window.emojiPicker.discover();
      });
    
    var autocomplete_request = null;
    jQuery("#receipent_field").autocomplete({
         appendTo: "#pm-autocomplete",
        source: function (request, response) 
                {
                        if (autocomplete_request != null) 
                        {
                            autocomplete_request.abort();
                        }

                        var name = jQuery("#receipent_field").val();
                        if(name.charAt(0)=="@")
                        {
                            name = name.substr(1);
                            var data = {'action': 'pm_autocomplete_user_search', 'name': name};
                            autocomplete_request = jQuery.post(pm_ajax_object.ajax_url, data, function (resp) {
                                    if (resp) 
                                    {
                                        var x = jQuery.parseJSON(resp);
                                        response(x);
                                        jQuery("#pm-autocomplete ul li").attr("tabindex",'0');
                                    }
                                    else
                                    {
                                       // console.log("err in autocomplete field");
                                    }
                                });
                    }
                },
        minLength: 1,
        select: function (event, ui) 
                {
                    event.preventDefault();
                    jQuery("#receipent_field").attr("value", "@"+ui.item.label);
                    jQuery("#receipent_field_rid").val(ui.item.id);
                    activate_thread_with_uid(ui.item.id,0);
                    
                }
        
    });
    
    jQuery('#message_display_area').scroll(function() 
    {
        if(jQuery('#load_more_message').length)
        {
                if (jQuery('#message_display_area').offset().top - 100 <= jQuery('#load_more_message').offset().top)
                {
                        if(!jQuery('#load_more_message').attr('loaded'))
                        {
                            jQuery('#load_more_message').attr('loaded', true);
                            var pagenum= jQuery('#load_more_message').attr('pagenum');
                            pagenum=parseInt(pagenum)+1;
                            show_thread_messages(pagenum);
                        }
                }
        }
    });


jQuery(".emoji-wysiwyg-editor").focusin(function() {
        var tid = get_active_thread_id();
        var activity = 'typing';
        pm_get_messenger_notification('', activity);
    });

jQuery(".emoji-wysiwyg-editor").focusout(function() {
        var tid = get_active_thread_id();
        var activity = 'nottyping';
        pm_get_messenger_notification('', activity);
    });
    
   jQuery(document).ready(function(){
   
       var pmDomColor = jQuery(".pmagic").find("a").css('color');
        jQuery(".pm-loader").css('border-top-color', pmDomColor);
        jQuery(".pmagic .pm-blog-time").css('color', pmDomColor);
        jQuery(".pmagic .pm-user-conversations-counter").css('color', pmDomColor);
        jQuery(".pmagic #unread_thread_count").css('background-color', pmDomColor);
        jQuery(".pmagic #unread_notification_count").css('background-color', pmDomColor);
        jQuery(".pmagic .pm-blog-desc-wrap #chat_message_form input#receipent_field").css('color', pmDomColor);
        jQuery(".pmagic .pm-new-message-area button").css('color', pmDomColor);
        jQuery(".pmagic .pm-messenger-button svg").css('fill', pmDomColor);
        jQuery(".pmagic .pm-thread-active .pm-conversations-container .pm-thread-user").css('color', pmDomColor);
        jQuery(".pm-color").css('color', pmDomColor);
        jQuery("#pg-friends .pm-selected-image svg").css('fill', pmDomColor);
        jQuery( ".pmagic .page-numbers .page-numbers.current" ).addClass( "pm-bg" ).css('background', pmDomColor); 

    
        
     
        jQuery('.pmagic .pm-profile-tab-wrap .pm-profile-tab').hover(
               function() {
                   jQuery(this).css('border-bottom-color',pmDomColor);
               },
               
               function() {
                   jQuery(this).css('border-bottom-color','transparent');
                   jQuery('.pm-section-nav-horizental .pm-profile-tab.ui-state-active').css('border-bottom-color',pmDomColor); 
               }
                         
       );
     
   }); 

}

function create_new_message(){
        jQuery("#message_display_area").html("");
        jQuery("#receipent_field").attr('value',"");
        jQuery("#receipent_field_rid").attr('value','');
        jQuery("#receipent_field").prop("disabled",false);
        jQuery("#receipent_field").addClass("pm-recipent-enable");
        jQuery("#pm-msg-overlay").removeClass("pm-overlay-show");
        show_pg_section_right_panel();
            
        
}

function refresh_messenger()
{
    start_messenger();
    //console.log("refreshing messenger");
    pm_messenger_notification_extra_data(); 
    show_threads();
      setTimeout(function(){
              pm_get_messenger_notification('','nottyping');
            }, 1000);

}

function show_threads(tid) {
    if (tid == undefined){   
        tid = '';
        var show_left_panel = 1;
    //console.log("showing all threads");
    }else{
        show_left_panel = 0;
    //console.log("showing all thread with active tid :" + tid);
    }
    var data = {action: 'pm_messenger_show_threads', 'tid': tid};
    jQuery.post(pm_ajax_object.ajax_url, data, function (resp) {
        if (resp) {
            if(resp=="You have no conversations yet."){
                 jQuery("#receipent_field").attr('value',"");
                //jQuery("#pm-msg-overlay").addClass("pm-overlay-show");
            }else{
                 jQuery("#pm-msg-overlay").removeClass("pm-overlay-show");
            }
            jQuery("#thread_pane ul").html(resp);
            setTimeout(function(){
               var tid = get_active_thread_id();
               if(tid!='')
             show_message_pane(tid);
             if(show_left_panel==1)
             {
                    show_pg_section_left_panel();
             }
            }, 500);
            
        } else {
     //       console.log("err in showing threads");
        }
    });


}

function show_message_pane(tid) {
    
        //jQuery("#receipent_field").prop("disabled",true);
         //jQuery("#receipent_field").addClass("pm-recipent-disable");
        jQuery('#pm-username-error').html('');
        show_pg_section_right_panel();
        var mid = jQuery("#message_display_area div:last-child").attr("id");

    if(get_active_thread_id()!==tid)
    {
        mid=undefined;
    }
        jQuery("#threads_ul li").attr("active", "false");
        jQuery("#t_id_"+tid).attr("active", "true");
        jQuery("#t_id_"+tid+" #unread_msg_count").html(" ");
        var uid = jQuery("#t_id_"+tid).attr("uid");
        var data = {'action': 'pm_messenger_show_thread_user', 'tid': tid,'uid':uid};
        jQuery.post(pm_ajax_object.ajax_url, data, function (resp) {
            if (resp) {
                var obj = jQuery.parseJSON(resp);
                if(obj.name !== null && obj.uid !== null){
                jQuery("#receipent_field").attr('value',"@"+obj.name);
                jQuery("#receipent_field_rid").attr('value', obj.uid);
            }
            
             var unread_thread_count = jQuery("#unread_thread_count").text();
            pm_messenger_notification_extra_data(unread_thread_count); 
            } else {
                //console.log("err");
            }
        });
    
    //console.log("showing message pane of tid : "+tid+" and uid : "+uid);
    jQuery("#receipent_field_rid").attr('value', uid);
    jQuery("#thread_hidden_field").attr("value", tid);
    activate_thread_with_uid(uid,mid);

}
function get_active_thread_id() {
    var cur_thread = jQuery("#threads_ul [active='true']");
    var id = jQuery(cur_thread).attr("id");
    if (id === undefined){
        id='';
    }else{
    var tid = id.replace('t_id_', '');
    }
    return tid;

}
function activate_thread_with_uid(uid,mid) {
    //console.log("activating thread with uid :"+uid);
    jQuery("#threads_ul li").attr("active", "false");
    jQuery("#threads_ul li").removeClass('pm-thread-active');
    var thread = jQuery("#threads_ul [uid=" + uid + "]");
    if(thread.length>0){
            jQuery(thread).addClass('pm-thread-active');
            jQuery(thread).attr("active", "true");
    }else
    {
         jQuery("#message_display_area").html('');   
    }
        if (get_active_thread_id() !== undefined) {
        show_thread_messages(undefined,mid);
    } else {
       // jQuery("#message_display_area").html("No message to display");
    }
    
     var pmDomColor = jQuery(".pmagic").find("a").css('color');
        jQuery(".pmagic .pm-conversations-container .pm-thread-user").css('color', '');
        jQuery(".pmagic .pm-thread-active .pm-conversations-container .pm-thread-user").css('color', pmDomColor);
         jQuery(".pmagic .pm-conversations-container .pm-user-conversations-counter").css('color', pmDomColor);


        
         

}
function show_thread_messages(loadnum,mid) {
    //console.log("here mid is :"+mid);
    var cur_thread = jQuery("#threads_ul [active='true']");
    var t_status = jQuery(cur_thread).attr("t_status");
    var id = jQuery(cur_thread).attr("id");
    var tid = id.replace('t_id_', '');
    //console.log("showing thread  message of tid : "+tid);
   var offset = new Date().getTimezoneOffset();
   //console.log("offset is "+offset);
    var data = {'action': 'pm_messenger_show_messages', 'tid': tid, 't_status': t_status, 'loadnum': loadnum,'last_mid':mid,'timezone':offset};
  // console.log(data);
    jQuery.post(pm_ajax_object.ajax_url, data, function (resp) {
        if (resp) {
            //  jQuery("#message_display_area").empty();
            
             if (loadnum !== undefined){
            jQuery("#message_display_area").prepend(resp);
             jQuery("#message_display_area").scrollTop( jQuery("#load_more_message").offset().top+500);
            
        }else{
            if(mid===undefined){
           jQuery("#message_display_area").html(resp);
            }else{
                //console.log(mid);
            jQuery("#"+mid).remove();
           jQuery("#message_display_area").append(resp);
                
            }
        jQuery("#message_display_area").scrollTop( jQuery("#message_display_area")[0].scrollHeight);

        }
        //jQuery("#message_display_area").scrollTop( jQuery("#message_display_area")[0].scrollHeight);
        // jQuery("#message_display_area").animate({ scrollTop: jQuery('#message_display_area').prop("scrollHeight")}, 1000);
        } else {
            
            //console.log("err");
        }
    });

}
function update_thread() {

    //console.log("updating thread");
    var tid = get_active_thread_id();
    show_threads(tid);
}
function pm_messenger_send_chat_message(event) {
    event.preventDefault();
    if( jQuery("#messenger_textarea").val()===''){
        alert(pm_error_object.empty_chat_message);
        return false;
    }
    if(jQuery("#receipent_field_rid").val()===''){
        alert("Enter a valid receipent");
        return false;
    }
    var form = jQuery("#chat_message_form");
    var form_values = form.serializeArray();
    pm_messenger_send_message(form_values);
    jQuery(".emoji-wysiwyg-editor").html('');
     jQuery("#messenger_textarea").val('');
}
function pm_messenger_send_message(form_values) {
    //console.log("sending message ");
    var data = {};
    jQuery.each(form_values, function () {
        if (data[this.name] !== undefined) {
            if (!data[this.name].push) {
                data[this.name] = [data[this.name]];
            }
            data[this.name].push(this.value);
        } else {
            data[this.name] = this.value;
        }
    });
    jQuery.post(pm_ajax_object.ajax_url, data, function (resp) {
        if (resp) {
       jQuery("#message_display_area").append(resp);
         jQuery("#message_display_area").scrollTop( jQuery("#message_display_area")[0].scrollHeight);

            show_threads();
        } else {
            //console.log("err in sending new message");
        }
    });
}

var notification_request = null;

function pm_get_messenger_notification(timestamp, activity)
{
    if (activity === undefined)activity = '';
    var tid = get_active_thread_id();
    var data = {'action': 'pm_get_messenger_notification',
        'timestamp': timestamp,
        'activity': activity,
        'tid': tid
    };
    if(notification_request != null){
        notification_request.abort();

    }

    notification_request= jQuery.get(pm_ajax_object.ajax_url, data, function (response)
    {
        if (response)
        {
           
            var obj = jQuery.parseJSON(response);           
            if(jQuery.isEmptyObject(obj))
            {
                setTimeout(function(){pm_get_messenger_notification('')},4000);  
            }
            else
            {
                if (obj.activity == 'typing') {
                    jQuery("#typing_on .pm-typing-inner").show();
                }
                if (obj.activity == 'nottyping') {
                    jQuery("#typing_on .pm-typing-inner").hide();
                }
                if (obj.data_changed === true)
                {

                    update_thread();


                }
                setTimeout(function () {
                    pm_get_messenger_notification(obj.timestamp)
                }, 4000);


            }
            // call the function again, this time with the timestamp we just got from server.php

        }else{
       //console.log("error in notif");    
       }
    
    });


}

function pm_messenger_delete_thread(tid){
 
    if (tid == undefined){   
        return false;
    }else{
   // console.log("Deleting thread with  tid :" + tid);
    }
    var data = {action: 'pm_messenger_delete_threads', 'tid': tid};
    jQuery.post(pm_ajax_object.ajax_url, data, function (resp) {
     show_threads();
    });

}
function pm_messenger_notification_extra_data(x){
  //console.log(x);
    //console.log("extra data working");
    var data = {'action': 'pm_messenger_notification_extra_data'};

    jQuery.get(pm_ajax_object.ajax_url, data, function (response)
    {
        if (response)
        {
            
            var obj = jQuery.parseJSON(response);
            //console.log(obj.unread_threads);
            if (obj.unread_threads !== 0)
            {
                //console.log(obj.unread_threads);
                  if(x!==undefined || x==''){
           if(x<obj.unread_threads)
            jQuery("#msg_tone")[0].play();
             }
                jQuery("#unread_thread_count").addClass("thread-count-show"); 
                jQuery("#unread_thread_count").html(obj.unread_threads);   
                   
            }else{
                   jQuery("#unread_thread_count").html('');   
                    jQuery("#unread_thread_count").removeClass("thread-count-show"); 
            
                
            }
          
        }

    });
}
function profile_magic_blogpost_validation()
{
	jQuery('.errortext').html('');
	jQuery('.errortext').hide();
	jQuery('.all_errors').html('');
	jQuery('.warning').removeClass('warning');
        jQuery('#pm_add_blog_post .pm_required').each(function (index, element) {
		var value = jQuery(this).children('input').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
        
        jQuery('#pm_add_blog_post .pm_fileinput .pm_repeat').each(function (index, element) {
		var val = jQuery(this).children('input').val().toLowerCase();
		var allowextensions = 'jpg|jpeg|png|gif';
		if(allowextensions=='')
		{
			allowextensions = pm_error_object.allow_file_ext;
		}
		
		allowextensions = allowextensions.toLowerCase();
		var regex = new RegExp("(.*?)\.(" + allowextensions + ")$");
		if(!(regex.test(val)) && val!="") {
		
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.file_type);
			jQuery(this).children('.errortext').show();
		}
	});
        var all_errors = '';
	jQuery('#pm_add_blog_post .errortext').each(function () {
		var a = jQuery(this).html();
		all_errors = a + all_errors;
	});
        jQuery('#pm_add_blog_post .all_errors').html(all_errors);
	var error = jQuery('#pm_add_blog_post .all_errors').html();
	if (error == '') {
		return true;
	} else {
		return false;
	}
}

function load_more_pg_blogs(uid)
{
    jQuery('.pm-load-more-blogs').hide();
    jQuery('.pg-load-more-container .pm-loader').show();
    var page = parseInt(jQuery('#pg_next_blog_page').val());
    var nextpage = page +1;
    var data = {action: 'pm_load_pg_blogs', 'uid': uid,'page':page};
    jQuery.post(pm_ajax_object.ajax_url, data, function (response) {
        if(response)
        {
            jQuery('.pg-load-more-container .pm-loader').hide();
            jQuery('#pg_next_blog_page').val(nextpage);
            jQuery('#pg-blog-container').append(response);
        }
    });

}

function load_more_user_blogs_shortcode_posts(authors,posttypes)
{
    jQuery('.pm-load-more-blogs').hide();
    jQuery('.pg-load-more-container .pm-loader').show();
    var page = parseInt(jQuery('#pg_next_blog_page').val());
    var nextpage = page +1;
    var data = {action: 'pm_load_user_blogs_shortcode_posts',authors: authors, posttypes:posttypes, page:page};
    jQuery.post(pm_ajax_object.ajax_url, data, function (response) {
        if(response)
        {
            jQuery('.pg-load-more-container .pm-loader').hide();
            jQuery('#pg_next_blog_page').val(nextpage);
            jQuery('#pg-user-blog-container').append(response);
        }
    });

}

function pm_get_rid_by_uname(uname)
{
    if(uname.charAt(0)=="@")
    {
       uname = uname.substr(1);
    }
    else
    {
        uname = uname;
    }

    var data = {action: 'pm_get_rid_by_uname', 'uname': uname};
    jQuery.post(pm_ajax_object.ajax_url, data, function (response) {
        //alert(response);
        if(response)
        {
            
            jQuery('#receipent_field_rid').val(response);
            activate_thread_with_uid(response,0);
            jQuery('#pm-username-error').html('');
        }
        else
        { if(uname!== '')
            {
            jQuery('#pm-username-error').html(pm_error_object.user_not_exit);
            jQuery('#receipent_field').focus();
            }else
            {
             jQuery('#pm-username-error').html('');    
            }
            }
        
    });   
}

function pm_delete_account_setting(form)
{
        var formid = form.id;
        jQuery('#'+formid+' .errortext').html('');
	jQuery('#'+formid+' .errortext').hide();
	jQuery('#'+formid+' .all_errors').html('');
	jQuery('#'+formid+' .warning').removeClass('warning');
        jQuery('#'+formid+' .pm_required').each(function (index, element) {
		var value = jQuery(this).children('input').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
        var all_errors = '';
	jQuery('#'+formid+' .errortext').each(function () {
		var a = jQuery(this).html();
		all_errors = a + all_errors;
	});
        
        jQuery('#'+formid+' .all_errors').html(all_errors);
	var error = jQuery('#'+formid+' .all_errors').html();
	if (error == '') 
        {
		return true;
	} 
        else 
        {
		return false;
	}
        
}
function pm_save_account_setting(form)
{
    var email_val = "";
    var formid = form.id;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    jQuery('#'+formid+' .errortext').html('');
	jQuery('#'+formid+' .errortext').hide();
	jQuery('#'+formid+' .all_errors').html('');
	jQuery('#'+formid+' .warning').removeClass('warning');
        jQuery('#'+formid+' .pm_required').each(function (index, element) {
		var value = jQuery(this).children('input').val();
		var value = jQuery.trim(value);
		if (value == "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.required_field);
			jQuery(this).children('.errortext').show();
		}
	});
        
        jQuery('#'+formid+' .pm_email').each(function (index, element) {
		var email = jQuery(this).children('input').val();
		var isemail = regex.test(email);
		if (isemail == false && email != "") {
			jQuery(this).children('input').addClass('warning');
			jQuery(this).children('.errortext').html(pm_error_object.valid_email);
			jQuery(this).children('.errortext').show();
		}
	});
	
        var all_errors = '';
	jQuery('#'+formid+' .errortext').each(function () {
		var a = jQuery(this).html();
		all_errors = a + all_errors;
	});
        
        jQuery('#'+formid+' .all_errors').html(all_errors);
	var error = jQuery('#'+formid+' .all_errors').html();
	if (error == '') 
        {
		return true;
	} 
        else 
        {
		return false;
	}
        
}

(function PG_mobile_resposve ($) {
    var $window = $(window),
        $html = $('html'),
        $is_resize = 0;
        

    $window.resize(function resize() {
        if ($window.width() < 479) {
            if($is_resize==0)
            {
                show_pg_section_left_panel();
                $is_resize = 1;
            }
            
            return $html.addClass('pg-mobile-479');
        }
        else
        {
            $('.pm-section-left-panel').show();
            $('.pm-section-right-panel').show();
        }

        $html.removeClass('pg-mobile-479');
        
        if ($window.width() < 760) {
            return $html.addClass('pg-mobile-760');
            
        }
        
        $html.removeClass('pg-mobile-760');
        
        
         if ($window.width() < 979) {
            return $html.addClass('pg-mobile-979');
            
        }

        $html.removeClass('pg-mobile-979');
        
    }).trigger('resize');
})(jQuery);

function show_pg_section_right_panel()
{
    jQuery(".pg-mobile-479 .pm-section-right-panel").show();
    jQuery(".pg-mobile-479 .pm-section-left-panel").hide();
    jQuery(".pg-mobile-479 .pg-left-panel-icon").show();
}

function show_pg_section_left_panel()
{
    jQuery(".pg-mobile-479 .pm-section-right-panel").hide();
    jQuery(".pg-mobile-479 .pm-section-left-panel").show();
    jQuery(".pg-mobile-479 .pg-left-panel-icon").hide();
}

function pg_remove_user_group(uid,gid)
{
    var boxid = '#pg-user-group-box-'+gid;
    var data = {action:'pm_remove_user_group',uid:uid,gid:gid};
    jQuery('#pg_edit_group_html_container').html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');
     var pmDomColor = jQuery(".pmagic").find("a").css('color');
        jQuery(".pm-loader").css('border-top-color', pmDomColor);
    jQuery.post(pm_ajax_object.ajax_url, data, function (resp) 
    {
        window.location.reload(true);
       /*if(resp=='success')
       {
            
            jQuery(boxid).remove();
            jQuery('.pm-popup-mask, #pm-edit-group-popup, .pg-blog-dialog-mask').hide();
            

       }*/
    });

}

function pg_open_group_tab()
{
    var tabindex = jQuery('#pg-profile-groups-tab').index();
    jQuery( "#pg-profile-tabs" ).tabs({
  active: tabindex-1
});
}
