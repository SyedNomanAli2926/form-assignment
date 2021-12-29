function collectData(){

    //first input of user
    var year = document.getElementById("abc");
    
    var a = year.value;

    var show = document.getElementById("para")

    show.innerHTML = "Annual year -"+a;

    
    //second input
    var name = document.getElementById("name");
    
    var b = name.value;

    var namePera = document.getElementById("paraone")

    namePera.innerHTML = "Candinate name ="+b;


   // third input

   var fatherName = document.getElementById("fathername");
    
   var c = fatherName.value;

   var fatherPera = document.getElementById("paratwo")

   fatherPera.innerHTML = "Candinate father name ="+c;


   //fourth input date of birth

   var dateOfBirth = document.getElementById("date");
    
   var d = dateOfBirth.value;

   var showDate = document.getElementById("showdate")

   showDate.innerHTML = "DOB="+d;

   //five input nationality

   var nationality = document.getElementById("nation");
    
   var e = nationality.value;

   var showNation = document.getElementById("showNation")

   showNation.innerHTML = "Nationality="+e;

   //gender input

   var gender = document.getElementById("gender");
    
   var f = gender.value;

   var showGender = document.getElementById("showgender")

   showGender.innerHTML = "Gender="+f;

    //religion

    var religion = document.getElementById("religion");
    
   var g = religion.value;

   var showReligion = document.getElementById("showreligion")

   showReligion.innerHTML = "Religion="+g;

   //address input
   var address = document.getElementById("address");
    
   var h = address.value;

   var showAddress = document.getElementById("showaddress")

   showAddress.innerHTML = "Address="+h;


   //Cnic input
   var cnicNum = document.getElementById("cnic");
    
   var i = cnicNum.value;

   var showCnic = document.getElementById("showcnic")

   showCnic.innerHTML = "Cnic="+i;


   // contact input

   var contactNum = document.getElementById("number");
    
   var j = contactNum.value;

   var showNumber = document.getElementById("shownumber")

   showNumber.innerHTML = "Contact#="+j;


   //identification input

   var identification = document.getElementById("mark");
    
   var k = identification.value;

   var showMark = document.getElementById("showmark")

   showMark.innerHTML = "Identification="+k;

   //post code input
   var postCode = document.getElementById("postcode");
    
   var k = postCode.value;

   var showPostCode = document.getElementById("showpostcode")

   showPostCode.innerHTML = "Post Code ="+k;

   var userData = document.getElementById("alldata");
   userData.innerHTML = "Data Collected by user inputs"
   

   //upload file  input
   var uploadFile = document.getElementById("uploadfile");
    
   var z = uploadFile.value;

   var showUploadFile = document.getElementById("showuploadfile")

   showUploadFile.innerHTML = "image ="+z;

   var userData = document.getElementById("alldata");
   userData.innerHTML = "Data Collected by user inputs"
   
   }
