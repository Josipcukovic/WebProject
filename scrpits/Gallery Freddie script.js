x= new Array("../images/freddie-mercury-1.jpg","../images/freddie-mercury-2.jpg","../images/freddie-mercury-3.jpg","../images/Freddie gallery1.jpg","../images/Freddie gallery2.jpg","../images/Freddie gallery3.jpg","../images/Freddie gallery4.jpg","../images/Freddie gallery5.jpg","../images/Freddie gallery6.jpg","../images/freddie-mercury-4.jpeg");
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