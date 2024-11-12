        
        
        
        // INPUT Script Start
        let username = document.getElementById('usernameInput');
        const startGame = document.getElementById('startGame');

        startGame.onclick = function () {
            let usernameSaved = username.value.trim();

            if (usernameSaved === "") {
                alert('Isi username kamu dulu ya!');
            } else {

            alert('Username Kamu adalah ' + usernameSaved);
            localStorage.setItem('username', usernameSaved);
            window.location.href = "pesos-banten.html";
            }
        };
        // INPUT Script End

        // Username Integration Start

    



        // Username Integration End