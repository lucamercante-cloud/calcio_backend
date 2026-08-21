"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const club_model_js_1 = require("./src/api/Club/club.model.js");
const category_model_js_1 = require("./src/api/Category/category.model.js");
const players_model_js_1 = require("./src/api/Players/players.model.js");
const notizie_model_js_1 = require("./src/api/Notizie/notizie.model.js");
const sponsor_model_js_1 = require("./src/api/Sponsor/sponsor.model.js");
const organigramma_model_js_1 = require("./src/api/Organigramma/organigramma.model.js");
// Modifica questa stringa con il nome corretto del tuo database locale
const MONGO_URI = 'mongodb://localhost:27017/calcio_backend';
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 1. Connessione al Database
            yield mongoose_1.default.connect(MONGO_URI);
            console.log('🌱 Connesso al database per il seeding manuale...');
            // 2. Pulizia totale delle vecchie collezioni
            yield club_model_js_1.ClubsModel.deleteMany({});
            yield category_model_js_1.CategoryModel.deleteMany({});
            yield players_model_js_1.PlayersModel.deleteMany({});
            yield sponsor_model_js_1.SponsorModel.deleteMany({});
            yield notizie_model_js_1.NewsModel.deleteMany({});
            yield organigramma_model_js_1.OrganigrammaModel.deleteMany({});
            console.log('🧹 Vecchi dati eliminati con successo.');
            // 3. CREAZIONE DELLE 3 CATEGORIE
            console.log('🗂️ Creazione categorie...');
            const primaSquadra = yield category_model_js_1.CategoryModel.create({
                nome: 'Prima Squadra',
                annata: '2025/2026',
                campionato: 'Eccellenza'
            });
            const juniores = yield category_model_js_1.CategoryModel.create({
                nome: 'Juniores U19',
                annata: '2007/2008',
                campionato: 'Regionale A'
            });
            const allievi = yield category_model_js_1.CategoryModel.create({
                nome: 'Allievi U17',
                annata: '2009/2010',
                campionato: 'Provinciale'
            });
            // 4. CREAZIONE DI 16 GIOCATORI REALI (Divisi tra le categorie)
            console.log('🏃 Inserimento dei 16 giocatori...');
            yield players_model_js_1.PlayersModel.create([
                // --- PRIMA SQUADRA (6 Giocatori) ---
                {
                    nome: 'Marco',
                    cognome: 'Rossi',
                    dataNascita: new Date('1998-04-12'),
                    nazionalità: 'Italiana',
                    ruolo: 'Portiere',
                    foto: 'https://c8.alamy.com/compit/cmkanp/marco-rossi-genova-16-agosto-2012-calcio-pre-season-amichevole-tra-carrarese-0-2-genova-presso-lo-stadio-di-marmi-di-carrara-italia-foto-di-maurizio-borsari-aflo-cmkanp.jpg', // Avatar placeholder prestante
                    categoria: primaSquadra._id
                },
                {
                    nome: 'Luca',
                    cognome: 'Bianchi',
                    dataNascita: new Date('1995-09-20'),
                    nazionalità: 'Italiana',
                    ruolo: 'Difensore',
                    foto: 'https://www.gazzettaregionale.it/upload/images/image_files/000/071/705/post_inside/10959376_1037261712955935_6190332624672534067_n.jpg?1475257653',
                    categoria: primaSquadra._id
                },
                {
                    nome: 'Stefan',
                    cognome: 'Radu',
                    dataNascita: new Date('1996-01-15'),
                    nazionalità: 'Rumena',
                    ruolo: 'Difensore',
                    foto: 'https://mediaverse.sslazio.hiway.media/VMFS1/FILES/public/upload/6534ebb9/3-4-radu-laz-cre-png.png',
                    categoria: primaSquadra._id
                },
                {
                    nome: 'Matteo',
                    cognome: 'Ferrari',
                    dataNascita: new Date('2000-11-02'),
                    nazionalità: 'Italiana',
                    ruolo: 'Centrocampista',
                    foto: 'https://www.storiedipremier.it/wp-content/uploads/2020/10/Matteo-Ferrari-e1603537514308.jpg',
                    categoria: primaSquadra._id
                },
                {
                    nome: 'Lorenzo',
                    cognome: 'Pellegrini',
                    dataNascita: new Date('1999-07-25'),
                    nazionalità: 'Italiana',
                    ruolo: 'Centrocampista',
                    foto: 'https://hips.hearstapps.com/hmg-prod/images/lorenzo-pellegrini-of-as-roma-celebrates-the-victory-after-news-photo-1758559285.pjpeg?crop=0.66667xw:1xh;center,top&resize=640:*',
                    categoria: primaSquadra._id
                },
                {
                    nome: 'Diego',
                    cognome: 'Milito',
                    dataNascita: new Date('1994-06-12'),
                    nazionalità: 'Argentina',
                    ruolo: 'Attaccante',
                    foto: 'https://www.inter.it/img/170227.jpg',
                    categoria: primaSquadra._id
                },
                // --- JUNIORES U19 (5 Giocatori) ---
                {
                    nome: 'Christian',
                    cognome: 'Vieri',
                    dataNascita: new Date('2007-03-30'),
                    nazionalità: 'Italiana',
                    ruolo: 'Attaccante',
                    foto: 'https://img.a.transfermarkt.technology/portrait/big/5797-1455611888.jpg?lm=1',
                    categoria: juniores._id
                },
                {
                    nome: 'Filippo',
                    cognome: 'Inzaghi',
                    dataNascita: new Date('2007-08-14'),
                    nazionalità: 'Italiana',
                    ruolo: 'Attaccante',
                    foto: 'https://upload.wikimedia.org/wikipedia/it/thumb/7/7a/Champions_League_1997-98_-_Juventus_vs_Feyenoord_-_Filippo_Inzaghi.jpg/250px-Champions_League_1997-98_-_Juventus_vs_Feyenoord_-_Filippo_Inzaghi.jpg',
                    categoria: juniores._id
                },
                {
                    nome: 'Thomas',
                    cognome: 'Müller',
                    dataNascita: new Date('2008-01-10'),
                    nazionalità: 'Tedesca',
                    ruolo: 'Centrocampista',
                    foto: 'https://img.fcbayern.com/image/upload/f_auto/q_auto/t_cms-6x9-seo/v1629460334/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/thomas_mueller.png',
                    categoria: juniores._id
                },
                {
                    nome: 'Andrea',
                    cognome: 'Pirlo',
                    dataNascita: new Date('2007-05-19'),
                    nazionalità: 'Italiana',
                    ruolo: 'Centrocampista',
                    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhNDmxVn5UGaGJBacKtgaLdhihNaZbSNXNVUz45D8v4FaWD6Q24cggvQY&s=10',
                    categoria: juniores._id
                },
                {
                    nome: 'Alessandro',
                    cognome: 'Nesta',
                    dataNascita: new Date('2007-10-05'),
                    nazionalità: 'Italiana',
                    ruolo: 'Difensore',
                    foto: 'https://media.gettyimages.com/id/50943381/it/foto/la-coruna-spain-portrait-of-alessandro-nesta-of-ac-milan-during-the-uefa-champions-league-match.jpg?s=612x612&w=gi&k=20&c=mK0QlEJe1vQeK53qcdJMyPKQvSXRJcU877MP4IysUck=',
                    categoria: juniores._id
                },
                // --- ALLIEVI U17 (5 Giocatori) ---
                {
                    nome: 'Gianluigi',
                    cognome: 'Buffon',
                    dataNascita: new Date('2009-01-28'),
                    nazionalità: 'Italiana',
                    ruolo: 'Portiere',
                    foto: 'https://m.media-amazon.com/images/M/MV5BZGU0M2U5NmItZWQ0MS00YzJiLWIwZDctNTYzMjY1NjJiYmRlXkEyXkFqcGc@._V1_.jpg',
                    categoria: allievi._id
                },
                {
                    nome: 'Leonardo',
                    cognome: 'Bonucci',
                    dataNascita: new Date('2009-05-01'),
                    nazionalità: 'Italiana',
                    ruolo: 'Difensore',
                    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs75fRmNcgEsDlePwbyqFOIKynETwvY0XLej75bx_7AAQX_CXNSD-OJFnI&s=10',
                    categoria: allievi._id
                },
                {
                    nome: 'Giorgio',
                    cognome: 'Chiellini',
                    dataNascita: new Date('2009-08-14'),
                    nazionalità: 'Italiana',
                    ruolo: 'Difensore',
                    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueQCkkdY368Pa5pX5xLxyzZcMYm87WYONu4azsfOxox1b7uiVIrf37HGf&s=10',
                    categoria: allievi._id
                },
                {
                    nome: 'Kevin',
                    cognome: 'De Bruyne',
                    dataNascita: new Date('2010-02-18'),
                    nazionalità: 'Belga',
                    ruolo: 'Centrocampista',
                    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3yTyHHaOhq1FKzmgCWpewgUeCd6SfYvefG26EDdXXw&s=10',
                    categoria: allievi._id
                },
                {
                    nome: 'Zlatan',
                    cognome: 'Ibrahimovic',
                    dataNascita: new Date('2009-10-03'),
                    nazionalità: 'Svedese',
                    ruolo: 'Attaccante',
                    foto: 'https://thumbs.dreamstime.com/b/presentazione-di-zlatan-ibrahimovic-10319385.jpg',
                    categoria: allievi._id
                }
            ]);
            console.log('🏃 16 Giocatori inseriti correttamente nelle rispettive rose.');
            // 5. CREAZIONE SPONSOR
            console.log('🤝 Inserimento sponsor...');
            yield sponsor_model_js_1.SponsorModel.create([
                { nome: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
                { nome: 'Coca Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
                { nome: 'Generali', logo: 'https://www.magnolia-cms.com/dam/jcr:49ef5c5c-92cc-4264-ae17-47dafc63e7cd/generali-logo.2024-10-21-15-52-59.png' },
                { nome: 'DBSbank', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b1/DBS_Bank_Logo_%28alternative%29.svg' },
                { nome: 'Levis', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/3840px-Levi%27s_logo.svg.png' },
                { nome: 'Prix', logo: 'https://prixquality.com/wp-content/themes/prix/assets/img/logo/prix-logo%20footer.png' },
                { nome: 'CynarSpritz', logo: 'https://www.cynar.com/wdf-common/age-gate-otp/cynar.com/img/ag-logo.webp' },
                { nome: 'TreniItalia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Trenitalia_logo.svg/1280px-Trenitalia_logo.svg.png' },
            ]);
            console.log('🤝 Sponsor inseriti correttamente.');
            // 6. CREAZIONE NEWS
            console.log('📰 Inserimento notizie...');
            yield notizie_model_js_1.NewsModel.create([
                {
                    titolo: 'Vittoria della Prima Squadra',
                    desc: 'Grande prestazione ieri sera dei nostri ragazzi che portano a casa 3 punti fondamentali.',
                    img: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhbGNpb3xlbnwwfHwwfHx8MA%3D%3D',
                    date: new Date('2026-06-29T21:30:00') // Ieri sera
                },
                {
                    titolo: 'Nuovo progetto giovanile',
                    desc: 'Partono ufficialmente le iscrizioni per la scuola calcio della prossima stagione. Posti limitati!',
                    img: 'https://images.unsplash.com/photo-1430232324554-8f4aebd06683?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNhbGNpb3xlbnwwfHwwfHx8MA%3D%3D',
                    date: new Date('2026-06-28T10:00:00')
                },
                {
                    titolo: 'Risultato torneo estivo',
                    desc: 'I nostri ragazzi della Juniores vincono il torneo estivo dopo una finale batticuore ai calci di rigore.',
                    img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600',
                    date: new Date('2026-06-26T18:00:00')
                },
                {
                    titolo: 'Open Day Scuola Calcio',
                    desc: 'Sabato pomeriggio cancelli aperti per tutti i bambini che vogliono provare a giocare con noi. Vi aspettiamo!',
                    img: 'https://images.unsplash.com/photo-1622659097972-68f1d8c1829f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY2lvJTIwYmFtYmluaXxlbnwwfHwwfHx8MA%3D%3D',
                    date: new Date('2026-06-24T15:00:00')
                },
                {
                    titolo: 'Nuovo Sponsor Tecnico',
                    desc: 'Ufficializzato l\'accordo con il nuovo partner che vestirà tutte le nostre formazioni per i primi tre anni.',
                    img: 'https://images.unsplash.com/photo-1674227643130-019fdae1ba9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNwb25zb3J8ZW58MHx8MHx8fDA%3D',
                    date: new Date('2026-06-22T11:30:00')
                },
                {
                    titolo: 'Lavori di rinnovo allo stadio',
                    desc: 'Iniziati i lavori per il rifacimento del manto erboso e il potenziamento dei riflettori del campo principale.',
                    img: 'https://images.unsplash.com/photo-1434648957308-5e6a859697e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhbHRpJTIwY2FsY2lvfGVufDB8fDB8fHww',
                    date: new Date('2026-06-19T09:00:00')
                },
                {
                    titolo: 'Intervista al Mister',
                    desc: '"Gruppo unito e tanta voglia di lavorare": ecco le parole dell\'allenatore in vista del prossimo match.',
                    img: 'https://images.unsplash.com/photo-1574772135913-d519461c3996?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxsZW5hdG9yZSUyMGNhbGNpb3xlbnwwfHwwfHx8MA%3D%3D',
                    date: new Date('2026-06-16T14:15:00')
                },
                {
                    titolo: 'Convocazione in Rappresentativa',
                    desc: 'Grande orgoglio per il nostro settore giovanile: due nostri tesserati sono stati convocati in nazionale dilettanti.',
                    img: 'https://images.unsplash.com/photo-1528036788076-c031f7707270?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFsbGVuYXRvcmUlMjBjYWxjaW98ZW58MHx8MHx8fDA%3D',
                    date: new Date('2026-06-12T16:00:00')
                },
                {
                    titolo: 'Cena sociale di fine stagione',
                    desc: 'Aperte le prenotazioni per la cena di chiusura dell\'anno sportivo. Un momento per festeggiare tutti insieme.',
                    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600',
                    date: new Date('2026-06-08T19:30:00')
                }
            ]);
            console.log('📰 Notizie inserite correttamente.');
            // 7. CREAZIONE DEL CLUB CON LOGO INTEGRATO
            console.log('🏢 Creazione del Club con i dati societari...');
            // Per inserire il logo, assicurati di aver aggiunto il campo "logo: String" nella tua ClubEntity e nel ClubsSchema se non c'era!
            yield club_model_js_1.ClubsModel.create({
                nome: 'A.C. Calcio Provincia',
                indirizzoSede: 'Via dello Sport 1, 00010 Provincia Calcio (VI)',
                telefono: '+39 0123 456789',
                mailInfo: 'info@squadraclub.it',
                mailSegreteria: 'segreteria@squadraclub.it',
                annoFondazione: '1975',
                pIva: 'IT01234567890',
                logo: 'https://png.pngtree.com/png-clipart/20250104/original/pngtree-simple-football-club-logo-mascot-with-a-modern-feel-png-image_19088316.png',
                categorie: [primaSquadra._id, juniores._id, allievi._id]
            });
            console.log('🏢 Dati del Club salvati.');
            // 8. CREAZIONE ORGANIGRAMMA SOCIETARIO
            console.log('👔 Inserimento organigramma societario...');
            yield organigramma_model_js_1.OrganigrammaModel.create([
                {
                    nome: 'Giuseppe',
                    cognome: 'Colombo',
                    ruoloSocieta: 'Presidente',
                    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60'
                },
                {
                    nome: 'Antonio',
                    cognome: 'Marchetti',
                    ruoloSocieta: 'Vicepresidente',
                    foto: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&auto=format&fit=crop&q=60'
                },
                {
                    nome: 'Roberto',
                    cognome: 'Fontana',
                    ruoloSocieta: 'Direttore Generale',
                    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60'
                },
                {
                    nome: 'Davide',
                    cognome: 'Ricci',
                    ruoloSocieta: 'Direttore Sportivo',
                    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60'
                },
                {
                    nome: 'Simone',
                    cognome: 'Barbieri',
                    ruoloSocieta: 'Responsabile Settore Giovanile',
                    foto: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60'
                },
                {
                    nome: 'Francesca',
                    cognome: 'Longo',
                    ruoloSocieta: 'Segretaria',
                    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60'
                },
                {
                    nome: 'Marco',
                    cognome: 'Tomasi',
                    ruoloSocieta: 'Team Manager',
                    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60'
                },
                {
                    nome: 'Elena',
                    cognome: 'Ferraro',
                    ruoloSocieta: 'Responsabile Comunicazione',
                    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60'
                }
            ]);
            console.log('👔 Organigramma inserito correttamente.');
            console.log('\n🔥 SEEDING COMPLETATO CON SUCCESSO! Il tuo database è pronto. 🌱');
        }
        catch (error) {
            console.error('❌ Errore durante il seeding manuale dei dati:', error);
        }
        finally {
            // Chiudiamo la connessione a MongoDB per evitare che il terminale rimanga appeso
            yield mongoose_1.default.disconnect();
            console.log('🔌 Disconnesso dal database.');
        }
    });
}
// Avvio dello script
seedDatabase();
