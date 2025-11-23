const users = [
  {
    name: "Amisha Rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌙 | not for everyone"
  },
  {
    name: "Kiara Mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "Main Character energy ☕ | coffee > everything ✨"
  },
  {
    name: "Isha Oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 🌫️ | late night thinker"
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 🔥 | filter free soul"
  },
  {
    name: "Rohan Malhotra",
    pic: "https://plus.unsplash.com/premium_photo-1760440042178-8863252c9bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    bio: "building the future, one line of code at a time 💻"
  },
  {
    name: "Isha Oberoi",
    pic: "https://images.unsplash.com/photo-1762810602195-599ea70234f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    bio: "walking through dreams in doc martens 🌫️ | late night thinker"
  },
];

// Show all users initially
function showUsers(arr) {
  const flex = document.querySelector(".flex");
  // Clear existing cards before appending new ones
  flex.innerHTML = "";
  
  arr.forEach(function(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(para);
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);
    flex.appendChild(card);
  });
}

showUsers(users);

const input = document.querySelector(".Search");
input.addEventListener("input", function() {
  const query = input.value.toLowerCase();
  const newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(query);
  });

  showUsers(newUsers);

  const h4 = document.querySelector("h4");
  if (h4) {
    if (newUsers.length === 0 && query !== "") {
      h4.innerText = "user not found";
      h4.style.display = "block"; // Ensure it's visible
    } else {
      h4.innerText = "";
      h4.style.display = "none"; // Hide when not needed
    }
  }
});