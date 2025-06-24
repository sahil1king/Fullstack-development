document.getElementById('fetchUser').addEventListener('click', function() {
            axios.get('https://randomuser.me/api/')
                .then(function(response) {
                    const user = response.data.results[0];
                    const userInfo = `
                        <p>Name: ${user.name.first} ${user.name.last}</p>
                        <p>Email: ${user.email}</p>
                        <img src="${user.picture.large}" alt="User Picture">
                    `;
                    document.getElementById('userInfo').innerHTML = userInfo;
                })
                .catch(function(error) {
                    console.error('Error fetching user:', error);
                });
        });