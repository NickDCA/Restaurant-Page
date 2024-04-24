export default function buildContact() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const contact = document.createElement('section');
    contact.classList.add('contact__container');
    content.appendChild(contact);

    contact.innerHTML = `
        <p class="contact__phone"><i class="bi bi-telephone contact__phone-icon"></i> (555) 123-4567</p>
        <p class="contact__address"><i class="bi bi-geo-alt contact__address-icon"></i> 789 Oak Avenue, Springfield, USA</p>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe 
                    id="gmap_canvas" src="https://maps.google.com/maps?q=789%20Oak%20Avenue,%20Springfield&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe><br>
                <style>.mapouter{position:relative;}</style>
                <a href="https://www.embedgooglemap.net"></a>
                <style>.gmap_canvas {overflow:hidden;background:none!important;}</style>
            </div>
        </div>
    `;
}
