var VName = prompt ("enter your name pleas.");
var gender = prompt("enter your Gender pleas. (M or F)");
alert ('Please note that the Font color for  \n  Males :Blue with MR  \n   Females: Pink with MS ')
var HederSize = prompt ("Enter Heder size ((from 1 to 6)) or will be 1");
if (gender == 'm' ||gender == 'M')
     {if(HederSize=='2'||HederSize=='3'||HederSize=='4'||HederSize=='5'||HederSize=='6')
     {
    var wellcomeM = '<h'+HederSize+' style="color: blue; text-align: center;" >Welcome to our page <b> Mr. ' + VName +'</b></h'+HederSize+'>'
    document.write(wellcomeM);
    }
    else
    {
        var wellcomeM = '<h1 style="color: blue; text-align: center;"> Welcome to our page <b> Mr. ' + VName +'</b></h1>'
        document.write(wellcomeM);
    }}
else
     {if(HederSize=='2'||HederSize=='3'||HederSize=='4'||HederSize=='5'||HederSize=='6'){
            var wellcomeM = '<h'+HederSize+ ' style="color: #F70030; text-align: center;">Welcome to our page <b> Ms. ' + VName +'</b></h'+HederSize+'>'
            document.write(wellcomeM);}
        else{
                var wellcomeM = '<h1 style="color: #F70030 ;text-align: center;"> Welcome to our page <b>Ms. ' + VName +'</b></h1>'
                document.write(wellcomeM);

          }

}
