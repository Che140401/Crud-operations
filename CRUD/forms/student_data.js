
// listItem.push({
//     Roll_No:document.getElementById('id_output').value,
//     name_1:document.getElementById('name_output').innerHTML,
//     english:document.getElementById('english_output').innerHTML,
//     maths:document.getElementById('maths_output').innerHTML,
//     science:document.getElementById('science_output').innerHTML
// })
let result_status;var temp=0;
var listItem = [
    { Roll_No: 1, name_1: 'chetan', english: 44, maths: 44, science: 44 },
    { Roll_No: 2, name_1: 'sunil', english: 44, maths: 44, science: 44 }
]

// function add_show()
// {
    // $('#update_btn').hide();
    // $('#submit_btn').show();
    // $("#exampleModal").modal('show');
    // $('#rollno_input').val("");
    // $('#name_input').val("");
    // $('#eng_mark_input').val("");
    // $('#math_mark_input').val("");
    // $('#science_mark_input').val("");
// }


function submit_form() 
{
    $('#submit_btn').show();
    // document.getElementById("add_data").innerHTML.style.display='block';
    // document.getElementById("update_btn").innerHTML.style.display="none";
    var roll_no_value, name_1_value, english_value, maths_value, science_value;
    roll_no_value = document.getElementById('rollno_input').value;
    console.log(roll_no_value);
    name_1_value = document.getElementById('name_input').value;
    english_value = document.getElementById('eng_mark_input').value;
    maths_value = document.getElementById('math_mark_input').value;
    science_value = document.getElementById('science_mark_input').value;
    var tempItem = { Roll_No: roll_no_value, name_1: name_1_value, english: english_value, maths: maths_value, science: science_value };
    if (english_value > 100 || maths_value > 100 ||  science_value > 100) {
        alert("You have enterd wrong marks above 100");
    }
    else
    {   
        listItem.push(tempItem);
    }
    list();
    $("#exampleModal").modal('hide');

}

function deleteButton(id) 
{
    for(i=0; i < listItem.length; i++)
    {
        if(listItem[i].Roll_No==id)
        {
            listItem.splice(i,1);
            console.log(listItem);
            list();
        }
    }
}

// function editbutton(id)
// {    
//     temp=id;
//     $("#exampleModal").modal('show');
//     $('#submit_btn').hide();
//     $('#update_btn').show();
//     // document.getElementById("submit_btn").innerHTML.style.display="none";
//    for(i=0;i<listItem.length;i++)
//    {
//     if(listItem[i].Roll_No==id)
//     {
//         $('#rollno_input').val(listItem[i].Roll_No);
//         $('#name_input').val(listItem[i].name_1);
//         $('#eng_mark_input').val(listItem[i].english);
//         $('#math_mark_input').val(listItem[i].maths);
//         $('#science_mark_input').val(listItem[i].science);
//     }
//    }
// }


function update_form()
{
    for(i=0;i<listItem.length;i++)
    {
        if(temp==listItem[i].Roll_No)
        {
            listItem[i].Roll_No=document.getElementById("rollno_input").value;
            listItem[i].name_1=document.getElementById("name_input").value;
            listItem[i].english=document.getElementById("eng_mark_input").value;
            listItem[i].maths=document.getElementById("math_mark_input").value;
            listItem[i].science=document.getElementById("science_mark_input").value;
            // listItem[i].Roll_No=$("#rollno_input").val()
            // listItem[i].name_1=$("#name_input").val()
            // listItem[i].english=$("#eng_mark_input").val()
            // listItem[i].maths=$("#math_mark_input").val()
            // listItem[i].science=$("#science_mark_input").val()
            // tempItem={ Roll_No: listItem[i].Roll_No, name_1: listItem[i].name_1, english: listItem[i].english, maths: listItem[i].maths, science: listItem[i].science };
            if (listItem[i].english > 100 || listItem[i].maths > 100 ||  listItem[i].science > 100) {
                alert("You have enterd wrong marks above 100");
            }
            else
            {
                list();
                $("#exampleModal").modal('hide');
                console.log(listItem);
            }
        }  
    }
}


function save(id)
{
    temp=id
    alert("SAVE CALLED");
    for(i=0;i<listItem.length;i++)
    {
        if(listItem[i].Roll_No==temp)
        {
            console.log(temp)
            $("#exampleModal").modal('show');
            $('#submit_btn').hide();
            $('#update_btn').show();
            $('#rollno_input').val(listItem[i].Roll_No);
            $('#name_input').val(listItem[i].name_1);
            $('#eng_mark_input').val(listItem[i].english);
            $('#math_mark_input').val(listItem[i].maths);
            $('#science_mark_input').val(listItem[i].science);
        }
        else if(temp===undefined)
        {
            console.log("temp not called")
            $('#update_btn').hide();
            $('#submit_btn').show();
            $("#exampleModal").modal('show');
            $('#rollno_input').val("");
            $('#name_input').val("");
            $('#eng_mark_input').val("");
            $('#math_mark_input').val("");
            $('#science_mark_input').val("");
            // $('#submit_btn').show();
            // // document.getElementById("add_data").innerHTML.style.display='block';
            // // document.getElementById("update_btn").innerHTML.style.display="none";
            // var roll_no_value, name_1_value, english_value, maths_value, science_value;
            // roll_no_value = document.getElementById('rollno_input').value;
            // name_1_value = document.getElementById('name_input').value;
            // english_value = document.getElementById('eng_mark_input').value;
            // maths_value = document.getElementById('math_mark_input').value;
            // science_value = document.getElementById('science_mark_input').value;
            // var tempItem = { Roll_No: roll_no_value, name_1: name_1_value, english: english_value, maths: maths_value, science: science_value };
            // if (english_value > 100 || maths_value > 100 ||  science_value > 100) 
            // {
            //     alert("You have enterd wrong marks above 100");
            // }
            // else
            // {   
            //     listItem.push(tempItem);
            // }
            // list();
            // $("#exampleModal").modal('hide');
         }
    }
}


function list() {
    $('#tbody').empty();
    let strlist = "";
    for (var i = 0; i < listItem.length; i++) 
    {
            let total = (parseInt(listItem[i].english) + parseInt(listItem[i].maths) + parseInt(listItem[i].science));
            let percentage = (parseInt(listItem[i].english) + parseInt(listItem[i].maths) + parseInt(listItem[i].science)) / 300 * 100;
            if(listItem[i].english < 34 || listItem[i].maths_marks < 34 || listItem[i].science < 34)
            {
                result_status="Fail";
            }
            else
            {
                result_status="pass";
            }
            strlist += "<tr id='table_data'>" +
                "<td id='id_output'>" + listItem[i].Roll_No + "</td>" +
                "<td id='name_output'>" + listItem[i].name_1 + "</td>" +
                "<td id='english_output'>" + listItem[i].english + "</td>" +
                "<td id='maths_output'>" + listItem[i].maths + "</td>" +
                "<td id='science_output'>" + listItem[i].science + "</td>" +
                "<td id='result_output'>" + result_status + "</td>" +
                "<td id='percentage_output'>" + percentage + "</td>" +
                "<td id='total_output'>" + total + "</td>" +
                "<td id='actions'><button type='button' class='btn btn-primary mx-2' id='edit_btn' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='save("+(listItem[i].Roll_No)+")'>Edit</button><button type='button' class='btn btn-primary' onClick='deleteButton("+(listItem[i].Roll_No)+")'>Delete</button></td>" +
                "</tr>"
    }
    $("#tbody").append(strlist);
}


// $('document').ready(function () {
//     // alert("asdf");
// })

list()