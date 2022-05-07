
const role_description = [
    {
      id: 1,
      student: "name 1",
      unikey: "unikey",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 2,
      name: "name 2",
      unikey: "unikey",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 3,
      name: "name 3",
      unikey: "unikey",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 4,
      name: "name 4",
      unikey: "unikey",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    }
  ];
  
  const img = document.getElementById("person-img");
  const student= document.getElementById("student");
  const unikey= document.getElementById("unikey");
  const roles_info = document.getElementById("roles_info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = role_description[currentItem];
    img.src = item.img;
    student.textContent = item.name;
    unikey.textContent = item.job;
    roles_info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = role_description[person];
    img.src = item.img;
    student.textContent = item.name;
    unikey.textContent = item.job;
    roles_info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > role_description.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = role_description.length - 1;
    }
    showPerson(currentItem);
  });
  
  