    //Display Profiles -------------------------------------------------
    // for (var i = 0; i < Persons.length; i++) {
    //     document.write("<div class='element' id='price" + i + "'>" +
    //         "<div class='images'><img src='img/image" + i + ".jpeg'></div>" +
    //         "<div class='descriptionContainer'><h1 class='nameProduct' id='namePro" + i + "'>" + Persons[i].name + " " + Persons[i].surname + "</h1>" +
    //         "<h3 class='description'>Favorite Persons: <br>" + Persons[i].favoritePerformers + "</h3>" +
    //         "<h3 class='description'>Age: </u>" + Persons[i].age + "</h3>" +
    //         "<h3 class='description'>Civil Status: " + Persons[i].civilStatus + "</h3>" +
    //         "<h3 class='description'>System: " + Persons[i].system + "</h3>" +
    //         "<div class='btnLike'>LIKE</div><h1 class='likesDisplay'><i class='far fa-heart'></i>" + Persons[i].likes + "</h1></div></div>");
    // }
    // for (var i = 0; i < Persons.length; i++) {
    //     var
    // }



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
        nam.className = "description";
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
        like.innerHTML += b;
        descriptionContainer.appendChild(like);

        box.appendChild(descriptionContainer);



    }




    //Full heart after getting a like--------------------------------------------- 
    //<i class="fas fa-heart"></i>

    // <i class="fab fa-apple"></i>
    // <i class="fab fa-windows"></i>


    // Like Function ----------------------------------------------------------------------------
    $(document).ready(function() {
        $('#navbar').hide();
        $('.profileMenu').hide();


        $('.btnLike').on('click', function() {
            //select the html element after the Button this represent the like value of the Persons Object
            var likeNote = $(this).next();
            //takes the value and parse it into an Intger
            var likesValue = parseInt(likeNote.text());
            likesValue++;
            likeNote.text(likesValue);
            //When the heart icon get font-weight bold it gets filled so it looks a bit more attractive but just after one like
            likeNote.css("font-weight", "bold");

        })

    var trashParent = $("#content");
    // Sort based on likes 
    $('#sortBtn').on('click', function () {
        var sorted = $(".element").sort(function (a, b) {
            return $(a).find(".likesDisplay").text() < $(b).find(".likesDisplay").text();
        });
        trashParent = $("#sortedOutput");
        $("#sortedOutput").html(sorted);
    });
   
        //navbar Button pulls the Navbar down--------------------------------------------------
        $('#navBarLogo').on('click', function() {
            $('#navbar').toggle();
        })
        //trash Button  delete this Element--------------------------------------------------
        $('.btnTrash').on('click', function() {
            //parentsUntil goes back until the property in the paranthese
            $(this).parentsUntil(trashParent).remove();

        })


        $('.images').mouseover(function() {
            $(this).children('.profileMenu').fadeIn(1000);
            console.log("over");
        })
        $('.images').mouseleave(function() {
            $(this).children('.profileMenu').fadeOut(1000);
            console.log("over");
        })


        // Sort Ansatz
            // var list = [];
            // list = document.getElementsByClassName("element");
            // for (var i = 0; i < list.length; i++) {
            // 	var a = list[i].children(".likeDisplay");
            //     var b = parseInt(a.val());
            //     console.log(b);
            // }



    });