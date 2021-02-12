const show = document.querySelector('.show-hide')
const qaContainer = document.getElementById('qaJS')

show.addEventListener('click', convertFun)

document.addEventListener('DOMContentLoaded', () => {

qaContainer.innerHTML=  `
<p>Who are the verified experts <span><button class="show-hide btn btn-light"><span></span> <i class="fas fa-eye"></i></button></span></p>
<div class="hide-content container mx-5">
         
</div>
<p>How does the question and answer work <span><button class="show-hide btn btn-light"><span></span> <i class="fas fa-eye"></i></button></span></p>
<div class="hide-content container mx-5">

</div>
`

});

function convertFun(){
    var hideContent= document.querySelector('.hide-content')
    if (hideContent.style.display === "none"){
      hideContent.style.display = 'block'
    } else {
      hideContent.style.display = "none"
      hideContent.innerHTML = 
      `<p class = 'p-4'>Verified experts have completed comprehensive training based on CollegeVine’s proprietary data and research in the field of college admissions.
      Their names might look familiar because many of them host our free livestreams.</p>
       `
    }
}
