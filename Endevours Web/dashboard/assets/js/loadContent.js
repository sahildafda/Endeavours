
        // Add event listener to sidebar links
        var sidebarLinks = document.querySelectorAll('.sidebar-wrapper ul.nav li.link a');
        var container = document.getElementById('content');
        let duration = 2000;

        
        $(document).ready(function() {
            $('.sidebar-wrapper li').click(function() {
                // Remove active class from all li elements
                $('.sidebar-wrapper li').removeClass('active');
                
                // Add active class to the clicked li element
                $(this).addClass('active');
            });
        
            sidebarLinks.forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default link behavior
                    
                    var fileUrl = link.getAttribute('href'); // Get the URL of the file
                    
                    displayLoader();
                    // Fetch the file content
                    fetch(fileUrl)
                    .then(function(response) {
                        if (!response.ok) {
                        throw new Error('EVx000404');
                        }
                        return response.text();
                    })
                    .then(function(data) {
                        // Wait for a few seconds (e.g., 3 seconds) before updating the content
                        setTimeout(function() {
                        container.innerHTML = "";
                        container.innerHTML = data;
                        // console.log('file Loaded'+fileUrl);
                        // if (fileUrl == './dashboard.html')
                            executeScriptTags(container);
                        }, duration); // Adjust the delay as needed
                    })
                    .catch(function(error) {
                        setTimeout(function() {
                            // Display the custom error message in the "container" div
                            container.innerHTML = `<div style='justify-content:center; align-items:center; text-align:center; width:100%; height:50%; margin-top:15%;'>
                                                                        <p>
                                                                            <span class='tim-icons  icon-alert-circle-exc'></span>
                                                                            &nbsp; 
                                                                            It seems the resource you requested is currently unavailable. 
                                                                            <br> Error Code : <span style='color:#00ac53;'>${error.message}</span>
                                                                            <br><br>
                                                                            Kindly Refresh the Page.
                                                                        <p>
                                                                    </div>`;
                            console.log(error);
                        }, duration);
                    });
                });

                if(link.getAttribute('href') == './dashboard.html'){
                    displayLoader();
                    // Fetch the file content
                    fetch(link.getAttribute('href'))
                    .then(function(response) {
                        if (!response.ok) {
                        throw new Error('EVx000404');
                        }
                        return response.text();
                    })
                    .then(function(data) {
                        // Wait for a few seconds (e.g., 3 seconds) before updating the content
                        setTimeout(function() {
                        container.innerHTML = "";
                        container.innerHTML = data;
                        // console.log('file Loaded'+fileUrl);
                        if (link.getAttribute('href') == './dashboard.html')
                            executeScriptTags(container);
                        }, duration); // Adjust the delay as needed
                    })
                    .catch(function(error) {
                        setTimeout(function() {
                            // Display the custom error message in the "container" div
                            container.innerHTML = `<div style='justify-content:center; align-items:center; text-align:center; width:100%; height:50%; margin-top:15%;'>
                                                                        <p>
                                                                            <span class='tim-icons  icon-alert-circle-exc'></span>
                                                                            &nbsp; 
                                                                            It seems the resource you requested is currently unavailable. 
                                                                            <br> Error Code : <span style='color:#00ac53;'>${error.message}</span>
                                                                            <br><br>
                                                                            Kindly Refresh the Page.
                                                                        <p>
                                                                    </div>`;
                            console.log(error);
                        }, duration);
                    });
                }
            });
        });
    
        function displayLoader(){
            // Display the loader
            var loader = document.createElement('div');
            loader.className = 'loader';
            loader.innerHTML = `
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
            `;
    
            container.innerHTML = "";
            container.appendChild(loader);
        }
    
        function executeScriptTags(element) {
        var scripts = element.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            eval(scripts[i].text);
            // console.log(scripts[i].text);
        }
        }
    
