const btn=document.querySelector('.btn');
const nameInput=document.querySelector('#name')
btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    console.log(nameInput.value)
  });

btn.addEventListener('mouseover', e => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    console.log(nameInput.value)
  });

btn.addEventListener('mouseout', e => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    console.log(nameInput.value)
  });