// Get the login and register buttons
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

// Get the login and register forms
const loginForm = document.getElementById('login-container');
const registerForm = document.getElementById('register-container');

// Add click event listeners to the buttons
loginButton.addEventListener('click', function() {
    // Remove the active class from the register button
    registerButton.classList.remove('active');
    // Add the active class to the login button
    loginButton.classList.add('active');

    // Show the login form
    loginForm.classList.add('active');
    // Hide the register form
    registerForm.classList.remove('active');
});


registerButton.addEventListener('click', function() {
    // Remove the active class from the login button
    loginButton.classList.remove('active');
    // Add the active class to the register button
    registerButton.classList.add('active');

    // Show the register form
    registerForm.classList.add('active');
    // Hide the login form
    loginForm.classList.remove('active');
});   

function forgotPassword() {
    return Swal.fire({
      title: 'Forgot Password',
      allowOutsideClick: false,
      animation:true,
      background:'#222',
      showCancelButton: true,
      confirmButtonText: 'Verify',
      confirmButtonColor:'#00ac50',
      cancelButtonColor:'#333',
      showLoaderOnConfirm: true,
      focusConfirm: false,
      input: 'text',
      inputAttributes: {
        id:"email",
        autocapitalize: 'off',
        placeholder:"Enter your Email",
        customClass: 'swal-forgot',
        style:"width:90%;padding:20px;margin-top:5%;outline:none!important;",
      },
      preConfirm: (login) =>  {
        return $('#email').val().then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response;
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      }
    }).then(function(result) {
        
        if (result.isConfirmed)
              {
            var email = $('#email').val();
            //alert(username);
              if (email == "1"){
                  Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:#00ac50;'>Error</h5>",
                    html: "<p style='color:#fff;font-size:14px;'>Invalid Username</p>",
                    allowOutsideClick: false,
                    animation:true,
                    background:'#222',
                    confirmButtonColor:'#00ac50',
                    focusCancel: false,
                  });
              }
              else {
              //alert("verification of username success"+username);
               $.ajax({
                      type: 'post',
                      url: '',
                      data: { username: username },
                      success: function(response) 
                      {
                        var val_otp = response.trim();
                        
                        //alert(val_otp);
                        if (val_otp.length == 6) 
                        {
                          // Show a message indicating that the OTP was validated
                          Swal.fire({
                            icon: 'success',
                            title: 'Verification Successful',
                            text: 'A verification code has been sent to your email. Please enter the code below to reset your password.',
                            input: 'text',
                                inputAttributes: {
                                    id:"OTP",
                                  autocapitalize: 'off',
                                  placeholder:"Enter OTP",
                                },
                                allowOutsideClick: false,
                                animation:true,
                                background:'#222',
                                confirmButtonColor:'#00ac50',
                                confirmButtonText: 'Verify',
                                showCancelButton: true,
                                cancelButtonColor:'#333',
                                showLoaderOnConfirm: true,
                                focusConfirm: false,
                                preConfirm: function() {
                                  return $('#OTP').val();
                                }
                          }).then(function(result) {
                              
                              if (result.isConfirmed)
                                        {
                                  var otp = $('#OTP').val();
                                
                                  //alert(otp + " " + val_otp);
                                
                                if (otp == val_otp){
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Authentication Successful',
                                        text: 'Please reset your password.',
                                        input: 'password',
                                            inputAttributes: {
                                                id:"newPass",
                                              autocapitalize: 'off',
                                              placeholder:"Enter new password",
                                            },
                                          //html : "<button id='togglePassword' name='togglePassword' type='button' class='btn btn-primary'>View</button>",
                                        showCancelButton: true,
                                          confirmButtonText: 'Update',
                                          showLoaderOnConfirm: true,
                                          focusConfirm: false,
                                          preConfirm: function() {
                                              return $('#newPass').val();
                                          }
                                      }).then(function(result) {
                                          
                                          if (result.isConfirmed)
                                                    {
                                              var newpass = $('#newPass').val();
                                                //alert(newpass);
                                                
                                                if (newpass == "")
                                                        {
                                              
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Can\'t be Empty.',
                                                        text: 'Password can not be empty, Please Try Again !!'
                                                      });
                                                    
                                                        } else {
                                                            
                                                              //alert(username + " " + newpass);
                                                    
                                                    $.ajax({
                                                          type: 'post',
                                                          url: '../update-password.jsp',
                                                          data: { username: username,
                                                                  newpass: newpass
                                                              },
                                                          success: function(response) 
                                                          {
                                                            var pass_status = response.trim();
                                                            
                                                            //alert(pass_status);
                                                            
                                                            if (pass_status == "updated")
                                                            {
                                                                Swal.fire({
                                                                    icon: 'success',
                                                                    title: 'Success',
                                                                    text: 'Your account password has been updated successfully.',
                                                                    showCancelButton: true,
                                                                      confirmButtonText: 'Login',
                                                                      cancelButtonText: 'Ok',
                                                                      showLoaderOnConfirm: true,
                                                                      focusConfirm: false,
                                                                      
                                                                }).then(function(result) {
                                                                      
                                                                      if (result.isConfirmed)
                                                                                {
                                                                                    location.href='login.jsp';
                                                                                }
                                                                        });
                                                                  
                                                            } else 
                                                            {
                                                                Swal.fire({
                                                                    icon: 'error',
                                                                    title: 'Failed.',
                                                                    text: 'Can\'t Update Password, Please Try Again !!'
                                                                  });
                                                            }
                                                            
                                                           } //end of success
                                                         }); // end of Ajax - update password
                                                            
                                                            }
                                                      }
                                          }); // end of OTP swalFire
                                      
                                    } else {
                                        //alert("Invalid");
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Authentication Failed.',
                                            text: 'Invalid OTP, Please Try Again !!'
                                          });
                                    }
                                    
                                    $("#togglePassword").on("click", function() {
                                        var input = $("#newPass");
                                        var attr = input.attr("type");
                                        if (attr == "password") {
                                          input.attr("type", "text");
                                        } else {
                                          input.attr("type", "password");
                                        }
                                      });
                                            } // end of isConfirm
                                
                          });
                          
                          $("#OTP").on("keypress", function(e) {
                              var charCode = (e.which) ? e.which : e.keyCode;
                              if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                                return false;
                              }
                              if (this.value.length >= 6) {
                                return false;
                              }
                              return true;
                            });
                        }
                        else {
                            //alert(response.toString());
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: 'Invalid Username, Try Again !!'
                              });
                        }
                    }
               });

          }
              }
    });
  }

