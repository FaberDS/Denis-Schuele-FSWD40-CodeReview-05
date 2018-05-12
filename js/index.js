        $(document).ready(function() {
            //Hide the Navbar the Special Information Menue of the images and the Chatbox -----------------------
            $('#navbar').hide();
            $('.profileMenu').hide();
            $('#chatBox').hide();

            //navbar Button pulls the Navbar down--------------------------------------------------
            $('#navBarLogo').on('click', function() {
                var navbar = $('#navbar');
                navbar.toggle()

            });
            //Change the top value of the Chatbox -----------------------------------------------------
           
            //trash Button  delete this Element--------------------------------------------------
            $('.btnTrash').on('click', function() {
                //parentsUntil goes back until the property in the paranthese
                $(this).parentsUntil("#content").remove();

            });

        });