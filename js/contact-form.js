document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formProps = Object.fromEntries(formData);
    
    const message = `¡Hola! Me gustaría obtener más información:

Nombre: ${formProps.name}
Teléfono: ${formProps.phone}

Mensaje:
${formProps.message}`;
    
    const whatsappURL = `https://api.whatsapp.com/send?phone=525527163905&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
});