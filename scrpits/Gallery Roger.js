x= new Array("../images/Roger 2.jpg","../images/Roger 3.jpg","../images/Roger 4.jpg","../images/Roger gallery1.jpg","../images/Roger gallery2.jpg","../images/Roger gallery3.jpg","../images/Roger gallery4.jpg","../images/Roger gallery5.jpg","../images/Roger gallery6.jpg","../images/Roger 1.jpg");
i=0;

function next(){
    i++;
    if(i==x.length){
        i=0;
    }
    document.getElementById("idGallery").src=x[i];
}

function back(){
    if(i==0){
        i=x.length;
    }
    i--;
    document.getElementById("idGallery").src=x[i];
}