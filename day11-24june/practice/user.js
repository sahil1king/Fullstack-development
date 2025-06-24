document.getElementById('newuser').addEventListener('click', function() {
    axios.get('https://randomuser.me/api/')
        .then(function(response) {
            const user = response.data.results[0];
            const userInfo = `
                <img src="${user.picture.large}" alt="User Picture">
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
            `;
            document.getElementById('find').innerHTML = userInfo;
            
            localStorage.setItem('userInfo', userInfo);
        })
        .catch(function(error) {
            console.error('Error fetching user:', error);
        });
});


document.addEventListener('DOMContentLoaded', function() {
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
        document.getElementById('find').innerHTML = savedUserInfo;
    }
});
