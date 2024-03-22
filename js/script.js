/*  Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team */

//our array
const ourTeam = [
    {
        fullName: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        fullName: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        fullName: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        fullName: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        fullName: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        fullName: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];

//stamp values of every member
/* for (let i = 0; i < ourTeam.length; i++) {  
    const ourMember = ourTeam[i];
    for (const key in ourMember) {
        const value = ourMember[key];
        console.log(value);
    }
} */

createTeam(ourTeam);

function createTeam(arrayOfObject) {
    const teamSection = document.querySelector('main section:first-child');
    teamSection.innerHTML = ''; //reset section
    for (let i = 0; i < arrayOfObject.length; i++) {  
        const ourMember = arrayOfObject[i];
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4';
        const cardTemplate = `
            <div class="card">
                <img src="img/${ourMember.photo}" class="card-img-top" alt="${ourMember.fullName}">
                <div class="card-body text-center">
                    <h5 class="card-title">${ourMember.fullName}</h5>
                    <p class="card-text">${ourMember.role}</p>
                </div>
            </div>
        `;
        card.innerHTML = cardTemplate;
        teamSection.appendChild(card);
    }
}