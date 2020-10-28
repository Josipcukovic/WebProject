x= new Array("../images/john 2.jpg","../images/john 3.jpg","../images/john 4.jpg","../images/John gallery1.jpg","../images/John gallery2.jpg","../images/John gallery3.jpg","../images/John gallery4.jpg","../images/John gallery5.jpg","../images/John gallery6.jpg","../images/John Deacon 1.jpeg");
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