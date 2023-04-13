"use strict";

setPos(10,300);
faceRight();
setLineWidth(1);

let queuelorior = "NNEESOOESEENNEEOOSEOSEEENNESENSSENNEESSOOEEENNEEOOSEOSEEENEENOOEESOOSEEEEEEENONSESENNSSENNEESSOOEEENNSSEENNSSEEENOONEEOOSEESEEEENNEESSOOEEENNEESOOEESENNESENSSEEENOONEEOOSEESEEEENNSSEEENNEESOOEESEEEENNEEOOSEOSEEENNEESSOOEEENNEESOOESEENNEEOOSEOSEEEENNOEEOSSEEEEENNEESOOEESOOEEENNEESOOESEENNSSEENNSSENNESNESSENNEEOOSEOSEEENNSSEENNSSEEENOONEEOOSEESENNEEOOSEOSEEEEEENNEESSOOEEENNEEOOSEOSEEENNESNESSENNEESOOEESENNSSENNESENSS"

function trace(x){
    let dess = x.split('')
    for(let i=0;i<dess.length;i++){
        if(dess[i]=="N"){
            faceUp();
            forward(10);
        }else if(dess[i]=="E"){
            faceRight();
            forward(10);
        }else if(dess[i]=="S"){
            faceDown();
            forward(10);
        }else{
            faceLeft();
            forward(10);
        }
    }
}

trace(queuelorior);



