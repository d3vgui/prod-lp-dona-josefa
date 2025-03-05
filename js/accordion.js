document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.maxHeight;

        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.maxHeight = null;
            item.style.paddingTop = '0';
            item.style.paddingBottom = '0';
        });
        document.querySelectorAll('.accordion-header').forEach(item => {
            item.classList.remove('active');
        });

        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.paddingTop = '10px';
            content.style.paddingBottom = '10px';
            header.classList.add('active');
        }
    });
});