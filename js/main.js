    //Index Page Slide Show---------------------------------------------------------------------------------

    // for (var i = 0; i < members.length; i++) {
    //     var mem = members[i];
    //     var likes = mem.likes;
    //     card += "<div class='card'>" +
    //         "<div class='profilePic'><img src='" + mem.myPhoto + "'></div>" +
    //         "<div class='memberData'>" +
    //         "<b>" + mem.name + " " + mem.surname + "</b><br>" +
    //         mem.code + "<br>" +
    //         "<div class='like'><button>LIKE</button> <span class='num'>" + likes + "</span></div><br>" +
    //         mem.name  +
    //         "</div>" +
    //         "</div>";
    // }

    // //Output on page
    // $("#memOut").html(card);

    //Display Profiles -------------------------------------------------
    for (var i = 0; i < Persons.length; i++) {
        var b = Persons[i].likes;

        //create box the container of each profile
        var box = document.createElement("div");
        box.className = "element";
        document.getElementById("content").appendChild(box);
        //Create img and Container and append to box
        var imgContainer = document.createElement("div");
        imgContainer.className = "images";
        var img = document.createElement("img");
        img.src = "img/image" + [i] + ".jpeg";
        var profileMenu = document.createElement("div");
        profileMenu.className = "profileMenu";
        var linkPMenu = document.createElement("a");
        profileMenu.innerHTML = "see more!"
        imgContainer.appendChild(img);

        imgContainer.appendChild(profileMenu);
        box.appendChild(imgContainer);

        //create descriptionContainer Description Container which include all contact details
        var descriptionContainer = document.createElement("div");
        descriptionContainer.className = "descriptionContainer";

        //nam holds the values of the Name and add to Description Container
        var nam = document.createElement("h1");
        nam.innerHTML += Persons[i].name;
        nam.innerHTML += " " + Persons[i].surname;
        nam.className = "description nam";
        descriptionContainer.appendChild(nam);

        //Create ag hold the Age
        var age = document.createElement("h3");
        age.className = "description";
        age.innerHTML += "<p class='descriptionTitle'>Age: </p>" + Persons[i].age;
        descriptionContainer.appendChild(age);

        //Create fav hold the Favorite Performer split them with white space and ,
        var fav = document.createElement("h3");
        fav.className = "description";
        fav.innerHTML += "<p class='descriptionTitle'>Favorite Persons: </p>" + Persons[i].favoritePerformers[0] + ", " + Persons[i].favoritePerformers[1] + ", " + Persons[i].favoritePerformers[2];
        descriptionContainer.appendChild(fav);

        //Create civ hold the Civil Status         
        var civ = document.createElement("h3");
        civ.className = "description";
        civ.innerHTML += "<p class='descriptionTitle'>Civil Status: </p>" + Persons[i].civilStatus;
        descriptionContainer.appendChild(civ);

        //Create the Messega Button   
        var messageBtn = document.createElement("div");
        messageBtn.className = "btnMessage";
        messageBtn.innerHTML += "<i class='far fa-comment'></i>";
        descriptionContainer.appendChild(messageBtn);

        //Create the Trash Button   
        var trashBtn = document.createElement("div");
        trashBtn.className = "btnTrash";
        trashBtn.innerHTML += "<i class='fas fa-trash'></i>";
        descriptionContainer.appendChild(trashBtn);

        //Create the Like Button   
        var likeBtn = document.createElement("div");
        likeBtn.className = "btnLike";
        likeBtn.innerHTML += "<i class='fas fa-thumbs-up'></i>";
        descriptionContainer.appendChild(likeBtn);

        //Create like hold the likes         
        var like = document.createElement("div");
        like.className = "likesDisplay";
        like.innerHTML += Persons[i].likes;
        descriptionContainer.appendChild(like);

        box.appendChild(descriptionContainer);



    };
    // Like Function ----------------------------------------------------------------------------
    $(document).ready(function() {
        //Hide the Navbar the Special Information Menue of the images and the Chatbox -----------------------
        // $('#navbar').hide();
        // $('.profileMenu').hide();
        // $('#chatBox').hide();


        $('.btnLike').on('click', function() {
            //select the html element after the Button this represent the like value of the Persons Object
            var likeNote = $(this).next();
            //takes the value and parse it into an Intger
            var likesValue = parseInt(likeNote.text());
            likesValue++;
            likeNote.text(likesValue);
            //When the heart icon get font-weight bold it gets filled so it looks a bit more attractive but just after one like
            likeNote.css("font-weight", "bold");

        });

        var trashParent = $("#content");
        // Sort based on likes 
        $('#sortBtn').on('click', function() {
            console.log("Btn");
            var sorted = $(".element").sort(function(a, b) {
                // var first = parseInt($(a).find(".likesDisplay").text());
                // var second = parseInt($(b).find(".likesDisplay").text());
                // return  first < second;
                return Number($(a).find(".likesDisplay").text()) < Number($(b).find(".likesDisplay").text());
            });
            sorted.detach().appendTo('#content');
            // $("#content").html(sorted);
            //change the parent of Element for the trash button


        });



        //message Button  open Message field--------------------------------------------------
        $('.btnMessage').on('click', function() {
            // var chatBox = '';
            var contactDetail = $(this).parentsUntil("#content");
            var nm = contactDetail.find(".nam").text();
            // var chatBoxVariable = $("#chatbox");
            $("#chatBoxContent").html("Hy my name is <br><em>" + nm + "!</em>" +
                "<br>Good choice that you want to ");

            $("#content").fadeTo(1000, 0.2);
            $("#chatBox").show();

        });


        //Exit Button  get out of the Message Box--------------------------------------------------
        $('#chatExitBtn').on('click', function() {
            console.log("hallo");
            //parentsUntil goes back until the property in the paranthese
            $("#content").css("opacity", "1");
            $("#chatBox").hide();


        });
        // Mouseover Effect on the Images to show more information ----------------------------------
        $('.images').mouseover(function() {
            $(this).children('.profileMenu').fadeIn(1000);
            console.log("over");
        });
        $('.images').mouseleave(function() {
            $(this).children('.profileMenu').fadeOut(1000);
            console.log("over");
        });

        //Submit from Contactbox -----------------------------------------------------------------
        $("#chatSubBtn").click(function() {
            var nm = $("input:text").val();
            var txt = $("textarea").val()
             // alert("Thank you " + nm + " ! I will answer your message early as possible");
             //        $("#content").css("opacity", "1");
             //        $("#chatBox").hide();
            checkInput(nm,txt);

        });

        function checkInput(a,b) {
            if (a.length >= 2 && a.length <= 30) {
                console.log("if1");
                if (b.length >= 2 ) {
                    alert("Thank you " + a + " ! I will answer your message early as possible");
                    $("#content").css("opacity", "1");
                    $("#chatBox").hide();
                    $("input:text").val("");
                    $("textarea").val("");
                    console.log("if2");

                } else {
                    alert("Please enter your Message");
                    console.log("else2");

                }
            } else {
                alert("Please enter your name");
                console.log("else1");

            }
        };



    });