let rol_def_tests = 
//Array de arrays
Array(
    //Esquema de arrays para definicion de tests...

    //id_rol --> EDIT
   Array('rol','id_rol','input',1,'Validar min_size de id_rol en EDIT (min 1)','EDIT','id_rol_min_size_KO','Id de rol vacio, introduzca un id en EDIT'),
   Array('rol','id_rol','input',2,'Validar max_size de id_rol en EDIT (max 11)','EDIT','id_rol_max_size_KO','Id de rol demasiado es largo, introduzca maximo 11 digitos en EDIT'),
   Array('rol','id_rol','input',3,'Validar el format de id_role en ADD','EDIT','id_rol_format_KO','Id de rol debe ser numerico en EDIT'),
   Array('rol','id_rol','input',4,'Validar id rol corrcto en EDIT','EDIT',true,'Id de rol correcto en EDIT'),
   //id_rol --> ADD
   Array('rol','id_rol','input',5,'Validar min_size de id_rol en ADD (min 1)','ADD','id_rol_min_size_KO','Id de rol vacio, introduzca un id enADDT'),
   Array('rol','id_rol','input',6,'Validar max_size de id_rol en ADD (max 11)','ADD','id_rol_max_size_KO','Id de rol demasiado es largo, introduzca maximo 11 digitos en ADD'),
   Array('rol','id_rol','input',7,'Validar el format de id_role en ADD','ADD','id_rol_format_KO','Id de rol debe ser numerico en ADD'),
   Array('rol','id_rol','input',8,'Validar id rol corrcto en ADD','ADD',true,'Id de rol correcto en ADD'),
   //id_rol --> SEARCH
   Array('rol','id_rol','input',9,'Validar min_size de id_rol en SEARCH (min 1)','SEARCH','id_rol_min_size_KO','Id de rol vacio, introduzca un id en SEARCH'),
   Array('rol','id_rol','input',10,'Validar max_size de id_rol en SEARCH (max 11)','SEARCH','id_rol_max_size_KO','Id de rol demasiado es largo, introduzca maximo 11 digitos en SEARCH'),
   Array('rol','id_rol','input',11,'Validar el format de id_role en SEARCH','SEARCH','id_rol_format_KO','Id de rol debe ser numerico en SEARCH'),
   Array('rol','id_rol','input',12,'Validar id rol corrcto en SEARCH','SEARCH',true,'Id de rol correcto en SEARCH'),
   
   //rol-name -->ADD
   Array('rol','rol_name','input',13,'Validar min_size de rol_name en ADD (min 5)','ADD','rol_name_min_size_KO','Nombre de rol demasiado corto, minimo 5 caracteres en ADD'),
   Array('rol','rol_name','input',14,'Validar max_size de rol_name en ADD (max 48)','ADD','rol_name_max_size_KO','Nombre de rol demasiado largo, maximo 48 caracteres en ADD'),
   Array('rol','rol_name','input',15,'Validar format de rol_name en ADD','ADD','rol_name_format_KO','Nombre de rol solo admite letras en ADD'),
   Array('rol','rol_name','input',16,'Validar rol_name correcto en ADD','ADD',true ,'Nombre de rol correcto en ADD'),
   //rol-name --> EDIT
   Array('rol','rol_name','input',17,'Validar min_size de rol_name en EDIT (min 5)','EDIT','rol_name_min_size_KO','Nombre de rol demasiado corto, minimo 5 caracteres en EDIT'),
   Array('rol','rol_name','input',18,'Validar max_size de rol_name en EDIT (max 48)','EDIT','rol_name_max_size_KO','Nombre de rol demasiado largo, maximo 48 caracteres en EDIT'),
   Array('rol','rol_name','input',19,'Validar format de rol_name en EDIT','EDIT','rol_name_format_KO','Nombre de rol solo admite letras en EDIT'),
   Array('rol','rol_name','input',20,'Validar rol_name correcto en EDIT','EDIT',true ,'Nombre de rol correcto en EDIT'),
   //rol_name --> SEARCH
   Array('rol','rol_name','input',21,'Validar min_size de rol_name en SEARCH (min 5)','SEARCH','rol_name_min_size_KO','Nombre de rol demasiado corto, minimo 5 caracteres en SEARCH'),
   Array('rol','rol_name','input',22,'Validar max_size de rol_name en SEARCH (max 48)','SEARCH','rol_name_max_size_KO','Nombre de rol demasiado largo, maximo 48 caracteres en SEARCH'),
   Array('rol','rol_name','input',23,'Validar format de rol_name en SEARCH','SEARCH','rol_name_format_KO','Nombre de rol solo admite letras en SEARCH'),
   Array('rol','rol_name','input',24,'Validar rol_name correcto en SEARCH','SEARCH',true,'Nombre de rol correcto en SEARCH'),


   //rol_description --> ADD
   Array('rol','rol_description','input',25,'Validar min_size de rol_description en ADD (min 5)','ADD','rol_description_min_size_KO','Descripcion demasiado corta, minimo 5 caracteres'),
   Array('rol','rol_description','input',26,'Validar max_size de rol_description en ADD (max 200)','ADD','rol_description_max_size_KO','Descripcion demasiado larga, maximo 200 caracteres'),
   Array('rol','rol_description','input',27,'Validar format de rol_description en ADD','ADD','rol_description_format_KO','no puedes escribir caracteres en la description'),
   Array('rol','rol_description','input',28,'Validar rol_description correcto en ADD','ADD',true,'Descripcion del rol es correcto'),
   //rol_description --> EDIT
   Array('rol','rol_description','input',29,'Validar min_size de rol_description en EDIT (min 5)','EDIT','rol_description_min_size_KO','Descripcion demasiado corta, minimo 5 caracteres'),
   Array('rol','rol_description','input',30,'Validar max_size de rol_description en EDIT (max 200)','EDIT','rol_description_max_size_KO','Descripcion demasiado larga, maximo 200 caracteres'),
   Array('rol','rol_description','input',31,'Validar format de rol_description en EDIT','EDIT','rol_description_format_KO','no puedes escribir caracteres en la description'),
   Array('rol','rol_description','input',32,'Validar rol_description correcto en EDIT','EDIT',true,'Descripcion del rol es correcto'),
   //rol_description --> SEARCH
   Array('rol','rol_description','input',33,'Validar min_size de rol_description en SEARCH (min 5)','SEARCH','rol_description_min_size_KO','Descripcion demasiado corta, minimo 5 caracteres'),
   Array('rol','rol_description','input',34,'Validar max_size de rol_description en SEARCH (max 200)','SEARCH','rol_description_max_size_KO','Descripcion demasiado larga, maximo 200 caracteres en SEARCH'),
   Array('rol','rol_description','input',35,'Validar format de rol_description en SEARCH','SEARCH','rol_description_format_KO','no puedes escribir caracteres en la description en SEARCH'),
   Array('rol','rol_description','input',36,'Validar rol_description correcto en SEARCH','SEARCH',true,'Descripcion del rol es correcto'),



);

//Definicion de pruebas que usen los tests creados anteriormente
let rol_pruebas = 
Array(
    //Esquema de arrays para la definicion de pruebas...

    //id_rol --> EDIT
    Array('rol','id_rol',1,1,'EDIT',{id_rol:''},'id_rol_min_size_KO'),
    Array('rol','id_rol',1,2,'EDIT',{id_rol:'1'},true),
    Array('rol','id_rol',2,3,'EDIT',{id_rol:'123456789012'},'id_rol_max_size_KO'),
    Array('rol','id_rol',2,4,'EDIT',{id_rol:'12345678901'},true),
    Array('rol','id_rol',3,5,'EDIT',{id_rol:'12a'},'id_rol_format_KO'),
    Array('rol','id_rol',3,6,'EDIT',{id_rol:'-5'},'id_rol_format_KO'),
    Array('rol','id_rol',3,7,'EDIT',{id_rol:'1.5'},'id_rol_format_KO'),
    Array('rol','id_rol',4,8,'EDIT',{id_rol:'1'},true),
    Array('rol','id_rol',4,9,'EDIT',{id_rol:'123'},true),
    //id_rol --> ADD
    Array('rol','id_rol',5,10,'ADD',{id_rol:''},'id_rol_min_size_KO'),
    Array('rol','id_rol',5,11,'ADD',{id_rol:'1'},true),
    Array('rol','id_rol',6,12,'ADD',{id_rol:'123456789012'},'id_rol_max_size_KO'),
    Array('rol','id_rol',6,13,'ADD',{id_rol:'12345678901'},true),
    Array('rol','id_rol',7,14,'ADD',{id_rol:'12a'},'id_rol_format_KO'),
    Array('rol','id_rol',7,15,'ADD',{id_rol:'-5'},'id_rol_format_KO'),
    Array('rol','id_rol',7,16,'ADD',{id_rol:'1.5'},'id_rol_format_KO'),
    Array('rol','id_rol',8,17,'ADD',{id_rol:'1'},true),
    Array('rol','id_rol',8,18,'ADD',{id_rol:'123'},true),
    //id_rol --> SEARCH
    Array('rol','id_rol',9,19,'SEARCH',{id_rol:''},'id_rol_min_size_KO'),
    Array('rol','id_rol',9,20,'SEARCH',{id_rol:'1'},true),
    Array('rol','id_rol',10,21,'SEARCH',{id_rol:'123456789012'},'id_rol_max_size_KO'),
    Array('rol','id_rol',10,22,'SEARCH',{id_rol:'12345678901'},true),
    Array('rol','id_rol',11,23,'SEARCH',{id_rol:'12a'},'id_rol_format_KO'),
    Array('rol','id_rol',11,24,'SEARCH',{id_rol:'-5'},'id_rol_format_KO'),
    Array('rol','id_rol',11,25,'SEARCH',{id_rol:'1.5'},'id_rol_format_KO'),
    Array('rol','id_rol',12,26,'SEARCH',{id_rol:'1'},true),
    Array('rol','id_rol',12,27,'SEARCH',{id_rol:'123'},true),

    //rol_name --> ADD
    array('rol','rol_name',13,28,'ADD',{rol_name:''},'rol_name_min_size_KO'),
    array('rol','rol_name',13,29,'ADD',{rol_name:'abcd'},'rol_name_min_size_KO'),
    array('rol','rol_name',13,30,'ADD',{rol_name:'abcde'},true),
    array('rol','rol_name',14,31,'ADD',{rol_name:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},'rol_name_max_size_KO'),
    array('rol','rol_name',14,32,'ADD',{rol_name:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},true),
    array('rol','rol_name',15,33,'ADD',{rol_name:'admin67'},'rol_name_format_KO'),
    array('rol','rol_name',15,34,'ADD',{rol_name:'rol@amdin'},'rol_name_format_KO'),
    array('rol','rol_name',15,35,'ADD',{rol_name:'rol_amdin'},'rol_name_format_KO'),
    array('rol','rol_name',16,36,'ADD',{rol_name:'admin'},true),
    array('rol','rol_name',16,37,'ADD',{rol_name:'alumno'},true),
    array('rol','rol_name',16,38,'ADD',{rol_name:'profesor'},true),
    //rol_name --> EDIT
    array('rol','rol_name',17,39,'EDIT',{rol_name:'abcd'},'rol_name_min_size_KO'),
    array('rol','rol_name',17,40,'EDIT',{rol_name:''},'rol_name_min_size_KO'),
    array('rol','rol_name',17,41,'EDIT',{rol_name:'abcde'},true),
    array('rol','rol_name',18,42,'EDIT',{rol_name:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},'rol_name_max_size_KO'),
    array('rol','rol_name',18,43,'EDIT',{rol_name:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},true),
    array('rol','rol_name',19,44,'EDIT',{rol_name:'admin67'},'rol_name_format_KO'),
    array('rol','rol_name',19,45,'EDIT',{rol_name:'rol@amdin'},'rol_name_format_KO'),
    array('rol','rol_name',19,46,'EDIT',{rol_name:'rol_amdin'},'rol_name_format_KO'),
    array('rol','rol_name',20,47,'EDIT',{rol_name:'admin'},true),
    array('rol','rol_name',20,48,'EDIT',{rol_name:'alumno'},true),
    array('rol','rol_name',20,49,'EDIT',{rol_name:'profesor'},true),
    //rol_name --> SEARCH
    array('rol','rol_name',21,50,'SEARCH',{rol_name:'abcd'},'rol_name_min_size_KO'),
    array('rol','rol_name',21,51,'SEARCH',{rol_name:''},'rol_name_min_size_KO'),
    array('rol','rol_name',21,52,'SEARCH',{rol_name:'abcde'},true),
    array('rol','rol_name',22,53,'SEARCH',{rol_name:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},'rol_name_max_size_KO'),
    array('rol','rol_name',22,54,'SEARCH',{rol_name:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},true),
    array('rol','rol_name',23,55,'SEARCH',{rol_name:'admin67'},'rol_name_format_KO'),
    array('rol','rol_name',23,56,'SEARCH',{rol_name:'rol@amdin'},'rol_name_format_KO'),
    array('rol','rol_name',23,57,'SEARCH',{rol_name:'rol_amdin'},'rol_name_format_KO'),
    array('rol','rol_name',24,58,'SEARCH',{rol_name:'admin'},true),
    array('rol','rol_name',24,59,'SEARCH',{rol_name:'alumno'},true),
    array('rol','rol_name',24,60,'SEARCH',{rol_name:'profesor'},true),


    //rol_description --> ADD
    array('rol','rol_description',25,61,'ADD',{rol_name:''},'rol_name_min_size_KO'),
    array('rol','rol_description',25,62,'ADD',{rol_name:'abcd'},'rol_name_min_size_KO'),
    array('rol','rol_description',25,63,'ADD',{rol_name:'abcde'},true),
    Array('rol','rol_description',26,64,'ADD',{rol_description:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},'rol_description_max_size_KO'),
    Array('rol','rol_description',26,65,'ADD',{rol_description:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},true),
    Array('rol','rol_description',27,66,'ADD',{rol_description:'Descripcion @ 123'},'rol_description_format_KO'),
    Array('rol','rol_description',27,67,'ADD',{rol_description:'Descripcion#123'},'rol_description_format_KO'),
    Array('rol','rol_description',28,68,'ADD',{rol_description:'Descripcion-123 España'},true),
    //rol_description --> EDIT
    array('rol','rol_description',29,69,'EDIT',{rol_name:''},'rol_name_min_size_KO'),
    array('rol','rol_description',29,70,'EDIT',{rol_name:'abcd'},'rol_name_min_size_KO'),
    array('rol','rol_description',29,71,'EDIT',{rol_name:'abcde'},true),
    Array('rol','rol_description',30,72,'EDIT',{rol_description:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},'rol_description_max_size_KO'),
    Array('rol','rol_description',30,73,'EDIT',{rol_description:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},true),
    Array('rol','rol_description',31,74,'EDIT',{rol_description:'Descripcion @ 123'},'rol_description_format_KO'),
    Array('rol','rol_description',31,75,'EDIT',{rol_description:'Descripcion#123'},'rol_description_format_KO'),
    Array('rol','rol_description',32,76,'EDIT',{rol_description:'Descripcion-123 España'},true),
     //rol_description --> SEARCH
    array('rol','rol_description',33,77,'SEARCH',{rol_name:''},'rol_name_min_size_KO'),
    array('rol','rol_description',33,70,'SEARCH',{rol_name:'abcd'},'rol_name_min_size_KO'),
    array('rol','rol_description',33,79,'SEARCH',{rol_name:'abcde'},true),
    Array('rol','rol_description',34,80,'SEARCH',{rol_description:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},'rol_description_max_size_KO'),
    Array('rol','rol_description',34,81,'SEARCH',{rol_description:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},true),
    Array('rol','rol_description',35,82,'SEARCH',{rol_description:'Descripcion @ 123'},'rol_description_format_KO'),
    Array('rol','rol_description',35,83,'SEARCH',{rol_description:'Descripcion#123'},'rol_description_format_KO'),
    Array('rol','rol_description',36,84,'SEARCH',{rol_description:'Descripcion-123 España'},true),

);
