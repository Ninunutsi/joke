const input = document.getElementById('input')
const btn = document.getElementById('btn')
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const pleaseWait = document.getElementById('please-wait')
const loader = document.getElementById('loader')

btn.addEventListener('click', () => {
    if(input.value==''){
        modal.style.display = "none";
        console.log('jo')
    }else{
        modal.style.display = "block";
        setTimeout(() => {
            pleaseWait.textContent = `You are thinking about ${input.value}`
            loader.style.display = 'none'
        }, 5000)
        console.log('efhweiu')
    }
})

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
    modal.style.display = "none";
    pleaseWait.textContent = ``
    loader.style.display = 'block'
    input.value=''
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        pleaseWait.textContent = ``
        loader.style.display = 'block'
        input.value=''
      }
})