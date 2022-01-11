import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(form);

    const family_Id = formData.get('family-id');
    const name = formData.get('bunny-name');

    await createBunny({
        name: name,
        family_id: family_Id
    });

    form.reset();
});

window.addEventListener('load', async() => {
    const select = document.querySelector('select');
    const families = await getFamilies();

    for (let family of families) {
        const option = document.createElement('option');
        option.value = family.id;
        option.textContent = family.name;
        
        select.append(option);
    }
});


checkAuth();

logoutButton.addEventListener('click', async() => {
    await logout();
});
