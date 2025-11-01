let currentPage = 1;
const itemsPerPage = 4;

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function toggleForm() {
  document.getElementById("loginContainer").classList.toggle("hidden");
  document.getElementById("registerContainer").classList.toggle("hidden");
}

function register() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  if (!username || !password) return alert("Fill all fields!");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.username === username)) return alert("Username exists!");

  users.push({ username, password });
  saveToStorage("users", users);
  alert("Registered successfully!");
  toggleForm();
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (username === "admin" && password === "admin123") showAdminPanel();
  else {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) showUserDashboard();
    else alert("Invalid credentials!");
  }
}

function showAdminPanel() {
  document.getElementById("loginContainer").classList.add("hidden");
  document.getElementById("registerContainer").classList.add("hidden");
  document.getElementById("adminPanel").classList.remove("hidden");
  loadNotices();
}

function showUserDashboard() {
  document.getElementById("loginContainer").classList.add("hidden");
  document.getElementById("registerContainer").classList.add("hidden");
  alert("User dashboard not required in this version.");
}

function postNotice() {
  const text = document.getElementById("noticeText").value.trim();
  if (!text) return alert("Enter a notice!");

  let notices = JSON.parse(localStorage.getItem("notices")) || [];
  notices.unshift({ id: Date.now(), text, date: new Date().toLocaleString() });
  saveToStorage("notices", notices);
  document.getElementById("noticeText").value = "";
  loadNotices();
}

function loadNotices(page = currentPage) {
  const list = document.getElementById("noticeList");
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  list.innerHTML = "";

  const totalPages = Math.ceil(notices.length / itemsPerPage);
  currentPage = Math.min(page, totalPages);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleNotices = notices.slice(start, end);

  visibleNotices.forEach(n => {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${n.text}</p>
      <small>${n.date}</small><br>
      <button class="edit-btn" onclick="editNotice(${n.id})">Edit</button>
      <button class="delete-btn" onclick="deleteNotice(${n.id})">Delete</button>
    `;
    list.appendChild(li);
  });

  const pagination = document.getElementById("noticePagination");
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => loadNotices(i);
    pagination.appendChild(btn);
  }
}

function deleteNotice(id) {
  if (!confirm("Delete this notice?")) return;
  let notices = JSON.parse(localStorage.getItem("notices")) || [];
  notices = notices.filter(n => n.id !== id);
  saveToStorage("notices", notices);
  loadNotices();
}

function editNotice(id) {
  let notices = JSON.parse(localStorage.getItem("notices")) || [];
  const notice = notices.find(n => n.id === id);
  const newText = prompt("Edit notice:", notice.text);
  if (newText) {
    notice.text = newText;
    saveToStorage("notices", notices);
    loadNotices();
  }
}

function searchNotices() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  const filtered = notices.filter(n => n.text.toLowerCase().includes(query));
  const list = document.getElementById("noticeList");
  list.innerHTML = filtered.map(n => `<li><p>${n.text}</p><small>${n.date}</small></li>`).join("");
}

function logout() {
  location.reload();
}
