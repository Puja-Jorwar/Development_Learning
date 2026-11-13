// Select container
const container = document.querySelector("#user-container");

// Loading state
container.innerHTML =
  "<p class='text-center mt-10 text-white'>Loading users...</p>";

// Fetch users
fetch("https://randomuser.me/api/?results=10")
  .then((res) => res.json())
  .then((data) => {
    renderUsers(data.results);
  })
  .catch((err) => {
    console.error(err);
    container.innerHTML =
      "<p class='text-center text-red-400'>Failed to load users</p>";
  });

// Render function
function renderUsers(users) {
  let usersHTML = "";

  users.forEach((user) => {
    usersHTML += `
      <div class="bg-gray-900 text-white shadow-lg rounded-2xl p-5 w-72 text-center hover:shadow-2xl transition border border-gray-700">
        
        <img 
          class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700"
          src="${user.picture.large}" 
          alt="user"
        />

        <h2 class="text-lg font-semibold">
          ${user.name.first} ${user.name.last}
        </h2>

        <p class="text-gray-400 text-sm">${user.email}</p>
        <p class="text-gray-500 text-sm mb-3">${user.location.country}</p>

        <button class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
          Follow
        </button>

      </div>
    `;
  });

  container.innerHTML = `
    <div class="bg-black min-h-screen flex flex-wrap justify-center gap-6 p-6">
      ${usersHTML}
    </div>
  `;
}
