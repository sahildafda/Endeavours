<html>

<head>
    <title>Login & Register</title>
    <link rel="stylesheet" type="text/css" href="./style/index.css">
    <link rel="stylesheet" type="text/css" href="./style/particles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
	<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
   	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.all.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body>
    
    <!-- <div id="particles-js" class="star_container"></div> -->
    <div id="particles-js" class="particles-js" style="display: none; opacity: 0;"></div>
    <div id="container" class="container">
        <div class="bg-dark">
            <div class="head">Endeavours</div>
            <div class="switch">
                <button class="active" id="login-button">Login</button>
                <button id="register-button">Register</button>
            </div>
        </div>
        
        <div class="form-container active" id="login-container">
            <h1>Login</h1>
            <form id="login-form" method="post">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required>
                </div>
                <div class="form-group remember">
                    <label for="rememberMe" class="form-control rememberControl">
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        Remember Me
                    </label>
                    <button id="forgotPasswordControl" href="" onclick="return forgotPassword();" class="form-control forgotPasswordControl rememberControl">
                        <span class="icon"><ion-icon name="build-outline"></ion-icon></span>
                        Forgot Password
                    </button>
                </div>

                <!-- <div class="form-group forgotPassword remember">
                    <a href="" class="form-control forgotPasswordControl rememberControl">
                        <span class="icon"><ion-icon name="build-outline"></ion-icon></span>
                        Forgot Password
                    </a>
                </div> -->
                <!-- <div class="form_container align-horizontal">              
                    <div class="form-group">
                        <button type="submit" onclick="return event.preventDefault();">Login</button>
                    </div>
                    <div class="form-group">
                        <button type="button" id="home-button">Home</button>
                    </div>      
                </div> -->

                <div class="btns_wrap">
                    <div class="common_btns login_form_btns" style="display:flex;">
                        <button type="button" class="btn_home" onclick="window.location.replace('../index.html');">
                            <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                            Home
                        </button>
                        <button type="submit" class="btn_login" name="login-btn">Login &nbsp;
                            <span class="icon"><ion-icon name="log-in-outline"></ion-icon></span>
                        </button>
                        <!-- <button type="submit">Register</button> -->
                    </div>
                </div>

            </form>
        </div>
        <div class="form-container" id="register-container">
            <form id="register-form">
                <h1>Register</h1>
                <div class="wrapper">          
                    <div class="header">
                        <ul>
                            <li class="active form_1_progressbar">
                                <div>
                                    <p>1</p>
                                </div>
                            </li>
                            <li class="form_2_progressbar">
                                <div>
                                    <p>2</p>
                                </div>
                            </li>
                            <li class="form_3_progressbar">
                                <div>
                                    <p>3</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="form_wrap">
                        <div class="form_1 data_info">
                            <h2>Profile Information</h2>
                            <div class="form_container">
                                <div class="field-container align-horizontal">
                                    <div class="form-group input_wrap">
                                        <label for="FirstName">First Name</label>
                                        <input type="text" id="FirstName" placeholder="Enter your first name" required>
                                    </div>
                                    <div class="form-group input_wrap">
                                        <label for="LastName">Last Name</label>
                                        <input type="text" id="LastName" placeholder="Enter your last name" required>
                                    </div><br>
                                </div>
                                <div class="field-container align-horizontal">
                                    <div class="form-group input_wrap">
                                        <label for="PhoneNo">Phone No.</label>
                                        <input type="text" id="PhoneNo" placeholder="Enter your phone number" maxlength="10" required>
                                    </div>
                                    <div class="form-group input_wrap">
                                        <label for="dateOfBirth">Date of Birth</label>
                                        <input type="date" id="dateOfBirth" placeholder="" required>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form_2 data_info" style="display:none;">
                            <h2>Sign-in Information</h2>
                            <div class="form_container">
                                <div class="field-container align-horizontal">
                                    <div class="form-group input_wrap">
                                        <label for="UserName">Username</label>
                                        <input type="text" id="UserName" placeholder="Enter your username" required>
                                    </div>
                                    <div class="form-group input_wrap">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" placeholder="Enter your email">
                                    </div><br>
                                </div>
                                <div class="field-container align-horizontal">
                                    <div class="form-group input_wrap">
                                        <label for="password">Password</label>
                                        <input type="password" id="password" placeholder="Enter your password" required>
                                    </div>
                                    <div class="form-group input_wrap">
                                        <label for="confirmPassword">Confirm Password</label>
                                        <input type="password" id="confirmPassword" placeholder="Re-Enter your password" required>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form_3 data_info" style="display:none;">
                            <h2>Professional Information</h2>
                            <div class="form_container">
                                <div class="field-container align-horizontal">
                                    <div class="form-group input_wrap">
                                        <label for="Profession">Profession</label>
                                        <input type="text" id="Profession" placeholder="Enter your Profession" required>
                                    </div>
                                    <div class="form-group input_wrap">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" placeholder="Enter your email" required>
                                    </div><br>
                                </div>
                                <div class="field-container align-horizontal">
                                    <div class="form-group input_wrap">
                                        <label for="Address">Address</label>
                                        <!-- <input type="text" id="Address" placeholder="Enter your address"> -->
                                        <textarea name="Address" id="Address" cols="30" rows="3" placeholder="Enter your address" required></textarea>
                                    </div>
                                    <div class="form-group input_wrap">
                                        <label for="City">City</label>
                                        <input type="text" id="City" placeholder="Enter your city">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="btns_wrap">
                        <div class="common_btns form_1_btns">
                            <button type="button" class="btn_next">Next
                                <span class="icon"><ion-icon name="caret-forward-outline"></ion-icon></span>
                            </button>
                        </div>
                        <div class="common_btns form_2_btns" style="display:none;">
                            <button type="button" class="btn_back">
                                <span class="icon"><ion-icon name="caret-back-outline"></ion-icon></span>
                                Back
                            </button>
                            <button type="button" class="btn_next">Next
                                <span class="icon"><ion-icon name="caret-forward-outline"></ion-icon></span>
                            </button>
                        </div>
                        <div class="common_btns form_3_btns" style="display:none;">
                            <button type="button" class="btn_back">
                                <span class="icon"><ion-icon name="caret-back-outline"></ion-icon></span>
                                Back
                            </button>
                            <button type="submit" class="btn_done">Register &nbsp;
                                <span class="icon"><ion-icon name="checkmark-outline"></ion-icon></span>
                            </button>
                            <!-- <button type="submit">Register</button> -->
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>


    <?php 
        if(isset($_POST["login-btn"]))
        {
            echo "
                button clicked
            ";
        }
    
    ?>

    <div class="modal_wrapper">
        <div class="shadow"></div>
        <div class="success_wrap">
            <span class="modal_icon"><ion-icon name="checkmark-sharp"></ion-icon></span>
            <p>Account created successfully.</p>
        </div>
    </div>

    <div class="toggle-button-cover">
        <div class="button-cover">
            <div class="button r" id="button-3">
                <input type="checkbox" class="checkbox" id="animation-Button" checked/>
                <div class="knobs"></div>
                <div class="layer"></div>
            </div>
        </div>
    </div>
    
    <script src="./script/index.js"></script>
    <script src="./script/particles.min.js"></script>
    <script src="./script/customParticles.js"></script>
    <script src="./script/multi-steps.js"></script>
    
</body>

</html>