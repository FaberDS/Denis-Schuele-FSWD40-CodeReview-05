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
    	//create box the container of each profile
        var box = document.createElement("div");
        box.className = "element";
        document.getElementById("content").appendChild(box);
        //Create img and Container and append to box
        var imgContainer = document.createElement("div");
        imgContainer.className = "images";
        var img = document.createElement("img");
        img.src = "img/image"+[i]+".jpeg";
        imgContainer.appendChild(img);
		box.appendChild(imgContainer);	

        //create deC Description Container which include all contact details
        var deC = document.createElement("div");
        deC.className = "descriptionContainer";

        //nam holds the values of the Name and add to Description Container
        var nam = document.createElement("h1");
        nam.innerHTML += Persons[i].name;
        nam.innerHTML += " " + Persons[i].surname;
        nam.className = "description";
        deC.appendChild(nam);

        //Create ag hold the Age
        var ag = document.createElement("h3");
        ag.className = "description";
        ag.innerHTML += "<p class='descriptionTitle'>Age: </p>" + Persons[i].age;
        deC.appendChild(ag);

        //Create fav hold the Favorite Performer split them with white space and ,
        var fav = document.createElement("h3");
        fav.className = "description";
        fav.innerHTML += "<p class='descriptionTitle'>Favorite Persons: </p>" + Persons[i].favoritePerformers[0] + ", " + Persons[i].favoritePerformers[1]+ ", " +Persons[i].favoritePerformers[2];
        deC.appendChild(fav);

        //Create civ hold the Civil Status         
        var civ = document.createElement("h3");
        civ.className = "description";
        civ.innerHTML += "<p class='descriptionTitle'>Civil Status: </p>" + Persons[i].civilStatus;
        deC.appendChild(civ);

        //Create the Like Button   
        var btn = document.createElement("div");
        btn.className = "btnLike";
        btn.innerHTML +=  "like";
        deC.appendChild(btn);

        //Create lik hold the likes         
        var lik = document.createElement("h1");
        lik.className = "likesDisplay";
        lik.innerHTML +=  "<i class='far fa-heart'></i>"+Persons[i].likes;
        deC.appendChild(lik);

        box.appendChild(deC);
        
        
        console.log("hallo");
    }




    //Full heart after getting a like--------------------------------------------- 
    //<i class="fas fa-heart"></i>

    // <i class="fab fa-apple"></i>
    // <i class="fab fa-windows"></i>


    // Like Function ----------------------------------------------------------------------------
    // $(document).ready(function() {



    //     $('.btnLike').on('click', function() {
    //         console.log("buton");
    //         var a = $(this);
    //         console.log(a);
    //         // $(this).find($(".fa")).toggleClass('fa-plus fa-minus');
    //         // console.log("hallo");


    //     })
    // });