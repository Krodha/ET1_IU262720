let persona_def_tests = 
//Array de arrays
Array(
    //dni --> ADD
    Array('persona','dni','input',1,'cumple tamaño minimo','min_size','ADD','dni_min_size_ko','Tamaño muy corto. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',2,'cumple tamaño maximo','max_size','ADD','dni_max_size_ko','Tamaño muy grande. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',3,'cumple formato','format','ADD','nombre_persona_format_ko','Formato inválido. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',4,'es correcto','valid','ADD',true,'DNI persona correcto'),
    //dni --> EDIT <-- se puede permitir editar la PK????
    //Array('persona','dni','input',5,'cumple tamaño minimo','max_size','EDIT','dni_min_size_ko','Tamaño muy corto. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    //Array('persona','dni','input',6,'cumple tamaño maximo','max_size','EDIT','dni_max_size_ko','Tamaño muy grande. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    //Array('persona','dni','input',7,'cumple formato','format','EDIT','dni_format_ko','Formato inválido. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    //Array('persona','dni','input',8,'es correcto','valid','EDIT',true,'DNI persona correcto'),


    //nombre_persona --> ADD
    Array('persona','nombre_persona','input',9,'cumple tamaño minimo','min_size','ADD','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',10,'cumple tamaño maximo','max_size','ADD','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',11,'cumple formato','format','ADD','nombre_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','nombre_persona','input',12,'es correcto','valid','ADD',true,'Nombre persona correcto'),
    //nombre_persona --> EDIT
    Array('persona','nombre_persona','input',13,'cumple tamaño minimo','min_size','EDIT','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',14,'cumple tamaño maximo','max_size','EDIT','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',15,'cumple formato','format','EDIT','nombre_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','nombre_persona','input',16,'es correcto','valid','EDIT',true,'Nombre persona correcto'),
    

    //apellidos_persona --> ADD
    Array('persona','apellidos_persona','input',17,'cumple tamaño minimo','min_size','ADD','apellidos_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',18,'cumple tamaño maximo','max_size','ADD','apellidos_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',19,'cumple formato','format','ADD','apellidos_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','apellidos_persona','input',20,'es correcto','valid','ADD',true,'Apellidos persona correcto'),
    //apellidos_persona --> EDIT
    Array('persona','apellidos_persona','input',21,'cumple tamaño minimo','min_size','EDIT','apellidos_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',22,'cumple tamaño maximo','max_size','EDIT','apellidos_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',23,'cumple formato','format','EDIT','apellidos_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','apellidos_persona','input',24,'es correcto','valid','EDIT',true,'Apellidos persona correcto'),


    //fechaNacimiento_persona --> ADD
    Array('persona','fechaNacimiento_persona','input',25,'cumple tamaño minimo','min_size','ADD','fechaNacimiento_min_size_ko','Tamaño muy corto. Debe tener 8 números y dos barras (Formato dd/mm/aaaa)'),
    Array('persona','fechaNacimiento_persona','input',26,'cumple tamaño maximo','max_size','ADD','fechaNacimiento_max_size_ko','Tamaño muy grande. Debe tener 8 números y dos barras (Formato dd/mm/aaaa)'),
    Array('persona','fechaNacimiento_persona','input',27,'cumple formato','format','ADD','fechaNacimiento_format_ko','Formato inválido. Debe tener 8 números y dos barras (Formato dd/mm/aaaa)'),
    Array('persona','fechaNacimiento_persona','input',28,'es correcto','valid','ADD',true,'Fecha nacimiento persona correcta'),
    //fechaNacimiento --> EDIT
    Array('persona','fechaNacimiento_persona','input',29,'cumple tamaño minimo','min_size','EDIT','fechaNacimiento_min_size_ko','Tamaño muy corto. Debe tener 8 números y dos barras (Formato dd/mm/aaaa)'),
    Array('persona','fechaNacimiento_persona','input',30,'cumple tamaño maximo','max_size','EDIT','fechaNacimiento_max_size_ko','Tamaño muy grande. Debe tener 8 números y dos barras (Formato dd/mm/aaaa)'),
    Array('persona','fechaNacimiento_persona','input',31,'cumple formato','format','EDIT','fechaNacimiento_format_ko','Formato inválido. Debe tener 8 números y dos barras (Formato dd/mm/aaaa)'),
    Array('persona','fechaNacimiento_persona','input',32,'es correcto','valid','EDIT',true,'Fecha Nacimiento persona correcta'), 


    //direccion_persona --> ADD
    Array('persona','direccion_persona','input',33,'cumple tamaño minimo','min_size','ADD','direccion_min_size_ko','Tamaño muy corto. Debe estar entre 10 y 200 caracteres'),
    Array('persona','direccion_persona','input',34,'cumple tamaño maximo','max_size','ADD','direccion_max_size_ko','Tamaño muy grande. Debe estar entre 10 y 200 caracteres'),
    Array('persona','direccion_persona','input',35,'cumple formato','format','ADD','direccion_format_ko','Formato inválido. Debe contener caracteres alfanuméricos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.), punto y coma (;), barra (/) y guión (-)'),
    Array('persona','direccion_persona','input',36,'es correcto','valid','ADD',true,'Direccion persona correcta'),
    //direccion_persona --> EDIT
    Array('persona','direccion_persona','input',37,'cumple tamaño minimo','min_size','EDIT','direccion_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',38,'cumple tamaño maximo','max_size','EDIT','direccion_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',39,'cumple formato','format','EDIT','direccion_format_ko','Formato inválido. Debe contener caracteres alfanuméricos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.), punto y coma (;), barra (/) y guión (-)'),
    Array('persona','direccion_persona','input',40,'es correcto','valid','EDIT',true,'Direccion persona correcta'),


    //telefono_persona --> ADD
    Array('persona','telefono_persona','input',41,'cumple tamaño minimo','min_size','ADD','telefono_min_size_ko','Tamaño muy corto. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',42,'cumple tamaño maximo','max_size','ADD','telefono_max_size_ko','Tamaño muy grande. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',43,'cumple formato','format','ADD','telefono_format_ko','Formato inválido. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',44,'es correcto','valid','ADD',true,'telefono persona correcto'),
    //telefono --> EDIT
    Array('persona','telefono_persona','input',45,'cumple tamaño minimo','min_size','EDIT','telefono_min_size_ko','Tamaño muy corto. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',46,'cumple tamaño maximo','max_size','EDIT','telefono_max_size_ko','Tamaño muy grande. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',47,'cumple formato','format','EDIT','telefono_format_ko','Formato inválido. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',48,'es correcto','valid','EDIT',true,'telefono persona correcto'), 


    //email_persona --> ADD
    Array('persona','email_persona','input',49,'cumple tamaño maximo','max_size','ADD','email_max_size_ko','Tamaño muy grande. Debe tener menos de 45 caracteres'),
    Array('persona','email_persona','input',50,'cumple formato','format','ADD','email_format_ko','Formato inválido. Debe ser usuario67@dominio.tld'),
    Array('persona','email_persona','input',51,'es correcto','valid','ADD',true,'email persona correcto'),
    //email --> EDIT
    Array('persona','email_persona','input',52,'cumple tamaño maximo','max_size','EDIT','email_max_size_ko','Tamaño muy grande. Debe tener menos de 45 caracteres'),
    Array('persona','email_persona','input',53,'cumple formato','format','EDIT','email_format_ko','Formato inválido. Debe ser usuario67@dominio.tld'),
    Array('persona','email_persona','input',54,'es correcto','valid','EDIT',true,'email persona correcto'), 

    //foto_persona --> ADD
    Array('persona','foto_persona','file',55,'cumple tamaño minimo','min_size','ADD','foto_persona_min_size_ko','Nombre demasiado corto. Debe ser mayor de 3 caracteres.'),
    Array('persona','foto_persona','file',56,'cumple tamaño maximo','max_size','ADD','foto_persona_max_ko','Nombre demaisado largo. debe ser menor de 15 caracteres.'),
    Array('persona','foto_persona','file',57,'existe fichero en foto_persona','exist_file','ADD','foto_persona_exist_file_ko','No existe foto. Debe subir una foto en .jpg'),
    Array('persona','foto_persona','file',58,'foto persona formato incorrecto','format_name_file','ADD','foto_persona_format_name_file_ko','nombre de foto incorrecto. Se deben usar letras son acentos y solo se permiten puntos (.)'),
    Array('persona','foto_persona','file',59,'foto persona tamaño excesivo','max_size_file','ADD','foto_persona_max_size_file_ko','Tamaño fichero foto excesivo. Deben ser menor de 2000 bytes (2MB)'),
    //foto_persona --> EDIT
    Array('persona','foto_persona','file',60,'cumple tamaño minimo','min_size','EDIT','foto_persona_min_size_ko','Nombre demasiado corto. Debe ser mayor de 3 caracteres.'),
    Array('persona','foto_persona','file',61,'cumple tamaño maximo','max_size','EDIT','foto_persona_max_ko','Nombre demaisado largo. debe ser menor de 15 caracteres.'),
    Array('persona','foto_persona','file',62,'existe fichero en foto_persona','exist_file','EDIT','foto_persona_exist_file_ko','No existe foto. Debe subir una foto en .jpg'),
    Array('persona','foto_persona','file',63,'foto persona formato incorrecto','format_name_file','EDIT','foto_persona_format_name_file_ko','nombre de foto incorrecto. Se deben usar letras son acentos y solo se permiten puntos (.)'),
    Array('persona','foto_persona','file',64,'foto persona tamaño excesivo','max_size_file','EDIT','foto_persona_max_size_file_ko','Tamaño fichero foto excesivo. Deben ser menor de 2000 bytes (2MB)'),
    
);



//Definicion de pruebas que usen los tests creados anteriormente
let persona_pruebas = 
Array(
    //dni --> ADD
    Array('persona','dni',1,1,'ADD',{dni:'1234567A'},'dni_min_size_ko'),
    Array('persona','dni',2,2,'ADD',{dni:'123456789A'},'dni_max_size_ko'),
    Array('persona','dni',3,3,'ADD',{dni:'1234O6789'},'dni_format_ko'),
    Array('persona','dni',3,4,'ADD',{dni:'1234O678A'},'dni_format_ko'),
    Array('persona','dni',4,5,'ADD',{dni:'12345678Z'},true),
    //nombre_persona --> EDIT <-- Lo mismo... se pueden editar las PK??
    //Array('persona','dni',5,6,'EDIT',{dni:'1234567A'},'dni_min_size_ko'),
    //Array('persona','dni',6,7,'EDIT',{dni:'123456789A'},'dni_max_size_ko'),
    //Array('persona','dni',7,8,'EDIT',{dni:'E234O67AA'},'dni_format_ko'),
    //Array('persona','dni',3,9,'EDIT',{dni:'12345678A'},dni_format_ko),
    //Array('persona','dni',8,10,'EDIT',{dni:'12345678Z'},true),


    //nombre_persona --> ADD
    Array('persona','nombre_persona',9,11,'ADD',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',10,12,'ADD',{nombre_persona:'a'.repeat(46)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',11,13,'ADD',{nombre_persona:'E:5g'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',12,14,'ADD',{nombre_persona:'javi'},true),
    //nombre_persona --> EDIT
    Array('persona','nombre_persona',13,15,'EDIT',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',14,16,'EDIT',{nombre_persona:'a'.repeat(46)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',15,17,'EDIT',{nombre_persona:'E:5g'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',16,18,'EDIT',{nombre_persona:'javi'},true),


    //apellidos_persona --> ADD
    Array('persona','apellidos_persona',17,19,'ADD',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',18,20,'ADD',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',19,21,'ADD',{apellidos_persona:'E:5g'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',20,22,'ADD',{apellidos_persona:'javi'},true),
    //apellidos_persona --> EDIT
    Array('persona','apellidos_persona',21,23,'EDIT',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',22,24,'EDIT',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',23,25,'EDIT',{apellidos_persona:'E:5g'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',24,26,'EDIT',{apellidos_persona:'javi'},true),


    //fechaNacimiento_persona --> ADD
    Array('persona','fechaNacimiento_persona',25,27,'ADD',{fechaNacimiento_persona:'1/11/1111'},'fechaNacimiento_persona_min_size_ko'),
    Array('persona','fechaNacimiento_persona',26,28,'ADD',{fechaNacimiento_persona:'111/11/1111'},'fechaNacimiento_persona_max_size_ko'),
    Array('persona','fechaNacimiento_persona',27,29,'ADD',{fechaNacimiento_persona:'1111/11/11'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',28,30,'ADD',{fechaNacimiento_persona:'11/11/1111'},true),
    //fechaNacimiento_persona --> EDIT
    Array('persona','fechaNacimiento_persona',29,31,'EDIT',{fechaNacimiento_persona:'1/11/1111'},'fechaNacimiento_persona_min_size_ko'),
    Array('persona','fechaNacimiento_persona',30,32,'EDIT',{fechaNacimiento_persona:'111/11/1111'},'fechaNacimiento_persona_max_size_ko'),
    Array('persona','fechaNacimiento_persona',31,33,'EDIT',{fechaNacimiento_persona:'1111/11/11'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',32,34,'EDIT',{fechaNacimiento_persona:'11/11/1111'},true),


    //direccion_persona --> ADD
    Array('persona','direccion_persona',33,35,'ADD',{direccion_persona:'a2b4c6d8'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',34,36,'ADD',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',35,37,'ADD',{direccion_persona:'C:67 _l'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',36,38,'ADD',{direccion_persona:'C/Solaina 67'},true),
    //direccion_persona --> EDIT
    Array('persona','direccion_persona',37,39,'EDIT',{direccion_persona:'a2b4c6d8'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',38,40,'EDIT',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',39,41,'EDIT',{direccion_persona:'C:67 _l'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',40,42,'EDIT',{direccion_persona:'C/Solaina 67'},true),


    //telefono_persona --> ADD
    Array('persona','telefono_persona',41,43,'ADD',{telefono_persona:'1234'},'telefono_persona_min_size_ko'),
    Array('persona','telefono_persona',42,44,'ADD',{telefono_persona:'9'.repeat(10)},'telefono_persona_max_size_ko'),
    Array('persona','telefono_persona',43,45,'ADD',{telefono_persona:'123-56-89'},'telefono_persona_format_ko'),
    Array('persona','direccion_persona',44,46,'ADD',{telefono_persona:'123456789'},true),
    //telefono_persona --> EDIT
    Array('persona','telefono_persona',45,47,'EDIT',{telefono_persona:'1234'},'telefono_persona_min_size_ko'),
    Array('persona','telefono_persona',46,48,'EDIT',{telefono_persona:'9'.repeat(201)},'telefono_persona_max_size_ko'),
    Array('persona','telefono_persona',47,49,'EDIT',{telefono_persona:'123-56-89'},'telefono_persona_format_ko'),
    Array('persona','telefono_persona',48,50,'EDIT',{telefono_persona:'123456789'},true),


    //email_persona --> ADD
    Array('persona','email_persona',50,52,'ADD',{email_persona:'a'.repeat(46)},'email_persona_max_size_ko'),
    Array('persona','email_persona',51,53,'ADD',{email_persona:'usuariogmailes.'},'email_persona_format_ko'),
    Array('persona','emailn_persona',52,54,'ADD',{email_persona:'usuario67@gmail.com'},true),
    //email_persona --> EDIT
    Array('persona','email_persona',54,56,'EDIT',{email_persona:'a'.repeat(46)},'email_persona_max_size_ko'),
    Array('persona','email_persona',55,57,'EDIT',{email_persona:'usuariogmailes.'},'email_persona_format_ko'),
    Array('persona','email_persona',56,58,'EDIT',{email_persona:'usuario67@gmail.com'},true),


    //foto_persona --> ADD
    Array('persona','foto_persona',57,59,'ADD',{foto_persona:'aa'},'foto_persona_min_size_file_ko'),
    Array('persona','foto_persona',58,60,'ADD',{foto_persona:'a'.repeat(15)},'foto_persona_max_size_file_ko'),
    Array('persona','foto_persona',59,61,'ADD',{},'foto_persona_not_exist_file_ko'),
    Array('persona','foto_persona',60,62,'ADD',{foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'foto_persona_format_name_file_ko'),
    Array('persona','foto_persona',61,63,'ADD',{foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'foto_persona_max_size_file_ko'),
    //foto_persona --> EDIT
    Array('persona','foto_persona',62,64,'EDIT',{foto_persona:'aa'},'foto_persona_min_size_file_ko'),
    Array('persona','foto_persona',63,65,'EDIT',{foto_persona:'a'.repeat(15)},'foto_persona_max_size_file_ko'),
    Array('persona','foto_persona',64,66,'EDIT',{},'foto_persona_not_exist_file_ko'),
    Array('persona','foto_persona',65,67,'EDIT',{foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'foto_persona_format_name_file_ko'),
    Array('persona','foto_persona',66,68,'EDIT',{foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'foto_persona_max_size_file_ko'),
);
