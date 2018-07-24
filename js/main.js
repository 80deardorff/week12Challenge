var resName = document.getElementById("resName");
var resSite = document.getElementById("resSite");
var resOpen = document.getElementById("resOpen");
var writeUp = document.getElementById("writeUp");
var preview = document.getElementById("preview").children[0];

resName.value = "SPQR";
resSite.value = "http://spqrsf.com/";
resOpen.value = "https://www.opentable.com/r/spqr-san-francisco";
writeUp.value = "SPQR is a great choice in SF's posh Fillmore District for those who appreciate quality Italian fare, including hand-made fresh pasta to impress! Book a table now.";

$('#previewBtn').click(function(){
        preview.innerHTML = writeUp.value.split("Book a table now").join("<a href='" + resOpen.value + "' alt='Open Table link.' target='_blank'>Book a table now</a>").split(resName.value).join("<a href='" + resSite.value + "' alt='" + resName.value + " link.' target='_blank'>" + resName.value + "</a>");
})
