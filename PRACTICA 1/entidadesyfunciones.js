//OBJETO DEFINIDO POR LA ENTIDAD "IDIOMA"
const idioma = [
    { id: 1, descripcion:'Ingles'},
    { id: 2, descripcion:'Español'},
    { id: 3, descripcion:'Aleman'},
    { id: 4, descripcion:'Frances'},
    { id: 5, descripcion:'Italiano'},  
  ];
//OBJETO DEFINIDO POR LA ENTIDAD "PALABRA"
  const palabra = [
    { id: 1, palabra:'Good bye',deletreo:'7'},
    { id: 2, palabra:'Procesador',deletreo:'10'},
    { id: 3, palabra:'Guten Morgen',deletreo:'11'},
    { id: 4, palabra:'Antibactérien',deletreo:'13'},
    { id: 5, palabra:'Arrivederci',deletreo:'11'},
  ];
//OBJETO DEFINIDO POR LA ENTIDAD "REGISTRO"
  const registro = [
    {id:1,idIdioma:1,idPalabra:1,Deletreo:'7',Silabas:'2',Fonetica:'gud baɪ'},
    {id:2,idIdioma:2,idPalabra:2,Deletreo:'10',Silabas:'4',Fonetica:'procesador'},
    {id:3,idIdioma:3,idPalabra:3,Deletreo:'11',Silabas:'4',Fonetica:'guten moorgen'},
    {id:4,idIdioma:4,idPalabra:4,Deletreo:'13',Silabas:'5',Fonetica:'antibactérien'},
    {id:5,idIdioma:5,idPalabra:5,Deletreo:'11',Silabas:'5',Fonetica:' arrivederchi'},
  ];

// SE CREA LA FUNCIÓN QUE VSE A USAR PARA EXPORTAR Y MOSTRAR DENTRO DE NUESTRO INDEX
  function mostrarRegistrodepalabras(palabra, registro) {
    console.log('\nRegistro de palabras:\n');
    //SE USA EL CICLO FOR OF 
    for (const registros of registro ) {
        const palabras = palabra.find(sig => sig.id === registros.idPalabra);
        console.log(`   • Id: ${palabras.id}
        Palabra: ${palabras.palabra}
        Deletreo: ${palabras.deletreo}
        Silabas: ${registros.Silabas} 
        Fonetica: ${registros.Fonetica} `);
    
    }
}
//CREAMOS LA FUNCIÓN QUE VAMOS A USAR PARA EXPORTAR Y MOSTRAR DENTRO DE NUESTRO INDEX
function mostrarDescripcion(registro,idioma,palabra) {
    console.log('\nIdioma y Palabra:\n');
    //SE USA UN CICLO FOR 
    for (let i = 0; i < registro.length; i++) {
        const  registros= registro[i];
        const idiomas = idioma.find(emp => emp.id === registros.idIdioma);
        const palabras = palabra.find(sig => sig.id === registros.idPalabra);
        console.log(`   • ID:${registros.id} Nombres: ${idiomas.descripcion} 
        Descripcion: ${palabras.palabra} 
         Deletreo: ${palabras.deletreo} 
        `);
    }
}
//CREAMOS LA FUNCIÓN QUE VAMOS A USAR PARA EXPORTAR Y MOSTRAR DENTRO DE NUESTRO INDEX
function mostraridiomayregistro(idioma, registro, palabra) {
    console.log('\n Idioma y Registros Realizados: \n');
    //SE USA UN CICLO FOR EAC
    registro.forEach((registros) => {
      const idiomas = idioma.find(pac => pac.id === registros.idPalabra);
      const palabras = palabra.find(sig => sig.id === registros.idIdioma);
      console.log(`   • Idioma: ${idiomas.descripcion} 
          iD: ${idiomas.Id}
          Descripcion: ${palabras.Silabas} `);
    });
  }

module.exports = {
    mostrarRegistrodepalabras,
    mostrarDescripcion,
    mostraridiomayregistro,
    palabra,
    registro,
    idioma,
    };