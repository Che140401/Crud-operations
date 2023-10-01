

let listItem = [
    { Roll_No: 1, name_1: "Mustaqeem", english: 10, maths: 20, science: 20 },
    { Roll_No: 1, name_1: "Mustaqeem", english: 101, maths: 101, science: 101 },
    { Roll_No: 1, name_1: "Mustaqeem", english: 101, maths: 101, science: 101 },
]




list();



function list() {
    let strlist = "";
    //for listitem
    for (i = 0; i < listItem.length; i++) {
        // if ((isNaN(listItem[i].english) && isNaN(listItem[i].maths) && isNaN(listItem[i].science)) || (listItem[i].english > 100 || listItem[i].maths > 100 || listItem[i].science > 100) || (listItem[i].name_1 === "") || (listItem[i].Roll_No === "") || (listItem[i].english === "" || listItem[i].maths === "" || listItem[i].science === "")) {
        //    // alert("Wrong Entry");
        //    // document.getElementById('user_msg').style.display = "block";
        // }
        // else 
        // {
        //     if (listItem[i].english < 34 || listItem[i].maths_marks < 34 || listItem[i].science < 34) {
        //        document.getElementById('fail').style.display = "block";
        //     }
        //     else if ((listItem[i].english >= 34 && listItem[i].english <= 50) || (listItem[i].maths_marks >= 34 && listItem[i].maths_marks <= 50) || (listItem[i].science >= 34 && listItem[i].science <= 50)) {
        //        document.getElementById('form').style.display = "block";
        //        document.getElementById('pass').style.display = "block"
        //        grade = 'C';
        //        document.getElementById('grade_result').innerHTML = grade;
        //     }
        //     else if ((listItem[i].english > 50 && listItem[i].english <= 60) || (listItem[i].science > 50 && listItem[i].science <= 60) || (listItem[i].maths_marks > 50 && listItem[i].maths_marks <= 60)) {
        //        document.getElementById('form').style.display = "block";
        //        document.getElementById('pass').style.display = "block";
        //        grade = 'B';listItem[i].
        //        document.getElementById('grade_result').innerHTML = grade;
        //     }
        //     else if ((listItem[i].english > 60 && listItem[i].english <= 100) || (listItem[i].science > 60 && listItem[i].science <= 100) || (listItem[i].maths_marks > 60 && listItem[i].maths_marks <= 100)) {
        //        document.getElementById('form').style.display = "block";
        //        document.getElementById('pass').style.display = "block";
        //        grade = 'A';
        //        document.getElementById('grade_result').innerHTML = grade;
        //     }
        //  }
        let total = listItem[i].english + listItem[i].maths + listItem[i].science;
        let percentage = (listItem[i].english + listItem[i].maths + listItem[i].science)/300*100;
        strlist += "<tr>" +
            "<td id='id_output'>" + listItem[i].Roll_No + "</td>" +
            "<td id='name_output'>" + listItem[i].name_1 + "</td>" +
            "<td id='english_output'>" + listItem[i].english + "</td>" +
            "<td id='maths_output'>" + listItem[i].maths + "</td>" +
            "<td id='science_output'>" + listItem[i].science + "</td>" +
            "<td id='result_output'>" + listItem[0] + "</td>" +
            "<td id='percentage_output'>" + percentage + "</td>" +
            "<td id='total_output'>" + total + "</td>" +
            "<td id='actions'><button>Edit</button><button>Delete</button></td>" +
            "</tr>"

    }

    $("#student-list tbody").append(strlist)

    //var tr append     
    // td data append
    //document.getElementById = var call


    // console.log(strlist)
    // alert("hello world")
}

$('document').ready(function () {
    // alert("asdf")
})