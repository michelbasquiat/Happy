const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    //inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: "-25.4316429", 
    //     lng: "-49.2642723",
    //     name: "Lar dos Meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "985441234",
    //     images: [
    //         "https://images.unsplash.com/photo-1601247230313-2f751b679438?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

    //         "https://images.unsplash.com/photo-1601729077519-67abf41f9ea4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 8h as 18h",
    //     open_on_weekends: "0"
    // });
    
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // //consultar somente 1 orfanato pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    // console.log(orphanage)

    // //deletar dado da tabela
    // await db.run("DELETE FROM orphanages WHERE id= '4'")
})