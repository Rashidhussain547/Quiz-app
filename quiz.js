function sub(){
    var a=0;
    var q1 = document.quiz.option1.value;
    var q2 = document.quiz.option2.value;
    var q3 = document.quiz.option3.value;
    var q4 = document.quiz.option4.value;
    var q5 = document.quiz.option5.value;
    var q6 = document.quiz.option6.value;
    var q7 = document.quiz.option7.value;
    var q8 = document.quiz.option7.value;
    var q9 = document.quiz.option9.value;
    var q10 = document.quiz.option10.value;
    var q11 = document.quiz.option11.value;
    var q12 = document.quiz.option12.value;
    var q13 = document.quiz.option13.value;
    var q14 = document.quiz.option14.value;
    var q15 = document.quiz.option15.value;
    var q16 = document.quiz.option16.value;
    var q17 = document.quiz.option17.value;
    var q18 = document.quiz.option18.value;
    var q19 = document.quiz.option19.value;
    var q20 = document.quiz.option20.value;

    if(q1 == "B") {a=a+5}       // 0 = 0+5
    if(q2 == "A") {a=a+5}       // 5 = 5+5
    if(q3 == "D") {a=a+5}       //10 = 10+5
    if(q4 == "C") {a=a+5}       //15 = 15+5
    if(q5 == "A") {a=a+5}       //20 = 20+5
    if(q6 == "D") {a=a+5}       //25 = 25+5
    if(q7 == "B") {a=a+5}       //30 = 30+5
    if(q8 == "D") {a=a+5}       //35 = 35+5 
    if(q9 == "C") {a=a+5}       //40 = 40+5
    if(q10 == "B") {a=a+5}      //45 = 45+5
    if(q11 == "B") {a=a+5}      //50 = 50+5
    if(q12 == "A") {a=a+5}      //55 = 55+5
    if(q13 == "C") {a=a+5}      //60 = 60+5
    if(q14 == "C") {a=a+5}      //65 = 65+5
    if(q15 == "B") {a=a+5}      //70 = 70+5
    if(q16 == "D") {a=a+5}      //75 = 75+5 
    if(q17 == "B") {a=a+5}      //80 = 80+5 
    if(q18 == "C") {a=a+5}      //85 = 85+5
    if(q19 == "A") {a=a+5}      //90 = 90+5
    if(q20 == "A") {a=a+5}      //95 = 95+5
    document.write("<table border=5px>");
        document.write("<th>")
            if(a<=40){
                document.write("<h2>You are failed and your marks is:</h2> " +"<h3>"+a+"</h3>")
            }
            else{
                document.write("<h2>Wow! AWESOME You are pass and your marks is:</h2>" +"<h3>"+a+"</h3>")
            }
            if(a==5){
                document.write("<h3>Only 1 answer is correct</h3>")
            }
            if(a==10){
                document.write("<h3> 2 answers are correct</h3>")
            }
            if(a==15){
                document.write("<h3> 3 answers are correct</h3>")
            }
            if(a==20){
                document.write("<h3> 4 answers are correct</h3>")
            }
            if(a==25){
                document.write("<h3> 5 answers are correct</h3>")
            }
            if(a==30){
                document.write("<h3> 6 answers are correct</h3>")
            }
            if(a==35){
                document.write("<h3> 7 answers are correct</h3>")
            }
            if(a==40){
                document.write("<h3> 8 answers are correct</h3>")
            }
            if(a==45){
                document.write("<h3> 9 answers are correct</h3>")
            }
            if(a==50){
                document.write("<h3> 10 answers are correct</h3>")
            }
            if(a==55){
                document.write("<h3> 11 answers are correct</h3>")
            }
            if(a==60){
                document.write("<h3> 12 answers are correct</h3>")
            }
            if(a==65){
                document.write("<h3> 13 answers are correct</h3>")
            }
            if(a==70){
                document.write("<h3> 14 answers are correct</h3>")
            }
            if(a==75){
                document.write("<h3> 15 answers are correct</h3>")
            }
            if(a==80){
                document.write("<h3> 16 answers are correct</h3>")
            }
            if(a==85){
                document.write("<h3> 17 answers are correct</h3>")
            }
            if(a==90){
                document.write("<h3> 18 answers are correct</h3>")
            }
            if(a==95){
                document.write("<h3> 19 answers are correct</h3>")
            }
            if(a==100){
                document.write("<h3> 20 answers are correct</h3>")
            } 
        document.write("</th>")      
    document.write("</table>")    
        
}
