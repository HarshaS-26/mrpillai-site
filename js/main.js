// LOAD NAVBAR

fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {

        document.getElementById('navbar').innerHTML = data;

        // ACTIVE NAV LINK
        const currentPage =
            window.location.pathname.split("/").pop();

        document.querySelectorAll('.nav-link')
            .forEach(link => {

                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }

            });

    });

// LOAD FOOTER

fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {

        document.getElementById('footer').innerHTML = data;

    });