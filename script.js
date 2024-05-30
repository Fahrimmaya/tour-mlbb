document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registration-form");
    const slotsAvailable = document.getElementById("slots-available");
    const registeredTeams = document.getElementById("registered-teams");

    let availableSlots = 12;

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (availableSlots > 0) {
            const teamName = document.getElementById("team-name").value;
            const leaderName = document.getElementById("leader-name").value;
            const member1Name = document.getElementById("member1-name").value;
            const member2Name = document.getElementById("member2-name").value;
            const member3Name = document.getElementById("member3-name").value;
            const member4Name = document.getElementById("member4-name").value;
            const reserveName = document.getElementById("reserve-name").value;
            const contact = document.getElementById("contact").value;

            // Format pesan untuk WhatsApp
            const message = `Pendaftaran Tim MLBB:\n\n` +
                            `Nama Tim: ${teamName}\n` +
                            `Nama Ketua: ${leaderName}\n` +
                            `Anggota 1: ${member1Name}\n` +
                            `Anggota 2: ${member2Name}\n` +
                            `Anggota 3: ${member3Name}\n` +
                            `Anggota 4: ${member4Name}\n` +
                            `Cadangan: ${reserveName}\n` +
                            `Kontak: ${contact}\n`;

            // Encode pesan untuk URL
            const encodedMessage = encodeURIComponent(message);

            // Buat URL WhatsApp
            const waURL = `https://wa.me/082125906295?text=${encodedMessage}`;


            // Arahkan pengguna ke WhatsApp dengan pesan
            window.open(waURL, "_blank");

            // Tambahkan tim ke daftar yang terdaftar
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>Nama Tim:</strong> ${teamName}<br>
                <strong>Nama Ketua:</strong> ${leaderName}<br>
                <strong>Anggota:</strong> ${member1Name}, ${member2Name}, ${member3Name}, ${member4Name}<br>
                <strong>Cadangan:</strong> ${reserveName}<br>
                <strong>Kontak:</strong> ${contact}
            `;

            registeredTeams.appendChild(listItem);

            availableSlots--;
            slotsAvailable.textContent = availableSlots;

            if (availableSlots <= 0) {
                registrationForm.reset();
                disableForm();
            }
        } else {
            alert("Slot pendaftaran sudah penuh!");
        }
    });

    function disableForm() {
        const formElements = registrationForm.elements;
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].disabled = true;
        }
    }
});
