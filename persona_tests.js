let persona_def_tests = 
//Array de arrays
Array(

    //dni --> ADD
    Array('persona','dni','input',1,'cumple tamaño minimo','min_size','ADD','dni_persona_min_size_ko','Tamaño muy corto. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',2,'cumple tamaño maximo','max_size','ADD','dni_persona_max_size_ko','Tamaño muy grande. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',3,'cumple formato','format','ADD','dni_persona_format_ko','Formato inválido. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',4,'letra dni valida','personalized','ADD','dni_persona_letra_incorrecta','La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('persona','dni','input',5,'es correcto','valid','ADD',true,'DNI persona correcto'),
    //dni --> EDIT
    Array('persona','dni','input',6,'cumple tamaño minimo','max_size','EDIT','dni_persona_min_size_let persona_def_tests = 
//Array de arrays
Array(

    //dni --> ADD
    Array('persona','dni','input',1,'cumple tamaño minimo','min_size','ADD','dni_min_size_ko','Tamaño muy corto. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',2,'cumple tamaño maximo','max_size','ADD','dni_max_size_ko','Tamaño muy grande. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',3,'cumple formato','format','ADD','dni_format_ko','Formato inválido. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',4,'letra dni valida','personalized','ADD','dni_letra_incorrecta','La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('persona','dni','input',5,'es correcto','valid','ADD',true,'DNI persona correcto'),
    //dni --> EDIT
    Array('persona','dni','input',6,'cumple tamaño minimo','max_size','EDIT','dni_min_size_ko','Tamaño muy corto. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',7,'cumple tamaño maximo','max_size','EDIT','dni_max_size_ko','Tamaño muy grande. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',8,'cumple formato','format','EDIT','dni_format_ko','Formato inválido. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',9,'letra dni valida','personalized','EDIT','dni_letra_incorrecta','La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('persona','dni','input',10,'es correcto','valid','EDIT',true,'DNI persona correcto'),
    //dni --> SEARCH
    Array('persona','dni','input',11,'cumple tamaño minimo','max_size','SEARCH','dni_min_size_ko','Tamaño muy corto. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',12,'cumple tamaño maximo','max_size','SEARCH','dni_max_size_ko','Tamaño muy grande. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',13,'cumple formato','format','SEARCH','dni_format_ko','Formato inválido. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',14,'letra dni valida','personalized','SEARCH','dni_letra_incorrecta','La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('persona','dni','input',15,'es correcto','valid','SEARCH',true,'DNI persona correcto'),


    //nombre_persona --> ADD
    Array('persona','nombre_persona','input',16,'cumple tamaño minimo','min_size','ADD','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',17,'cumple tamaño maximo','max_size','ADD','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',18,'cumple formato','format','ADD','nombre_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','nombre_persona','input',19,'es correcto','valid','ADD',true,'Nombre persona correcto'),
    //nombre_persona --> EDIT
    Array('persona','nombre_persona','input',20,'cumple tamaño minimo','min_size','EDIT','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',21,'cumple tamaño maximo','max_size','EDIT','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',22,'cumple formato','format','EDIT','nombre_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','nombre_persona','input',23,'es correcto','valid','EDIT',true,'Nombre persona correcto'),
    //nombre_persona --> SEARCH
    Array('persona','nombre_persona','input',24,'cumple tamaño minimo','min_size','SEARCH','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',25,'cumple tamaño maximo','max_size','SEARCH','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',26,'cumple formato','format','SEARCH','nombre_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','nombre_persona','input',27,'es correcto','valid','SEARCH',true,'Nombre persona correcto'),
    

    //apellidos_persona --> ADD
    Array('persona','apellidos_persona','input',28,'cumple tamaño minimo','min_size','ADD','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',29,'cumple tamaño maximo','max_size','ADD','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',30,'cumple formato','format','ADD','apellidos_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','apellidos_persona','input',31,'es correcto','valid','ADD',true,'Apellidos persona correcto'),
    //apellidos_persona --> EDIT
    Array('persona','apellidos_persona','input',32,'cumple tamaño minimo','min_size','EDIT','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',33,'cumple tamaño maximo','max_size','EDIT','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',34,'cumple formato','format','EDIT','apellidos_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','apellidos_persona','input',35,'es correcto','valid','EDIT',true,'Apellidos persona correcto'),
    //apellidos_persona --> SEARCH
    Array('persona','apellidos_persona','input',36,'cumple tamaño minimo','min_size','SEARCH','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',37,'cumple tamaño maximo','max_size','SEARCH','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',38,'cumple formato','format','SEARCH','apellidos_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','apellidos_persona','input',39,'es correcto','valid','SEARCH',true,'Apellidos persona correcto'),


    //fechaNacimiento_persona --> ADD
    Array('persona','fechaNacimiento_persona','input',42,'cumple formato','format','ADD','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato Formato dd/mm/aaaa'),
    Array('persona','fechaNacimiento_persona','input',44,'cumple día válido','personalized','ADD','fechaNacimiento_persona_dia_incorrecto','Fecha inválida. El día no puede ser 0 ni mayor que 28,29,30 o 31 (dependiendo del mes y año)'),
    Array('persona','fechaNacimiento_persona','input',45,'cumple mes válido','personalized','ADD','fechaNacimiento_persona_mes_incorrectos','Fecha inválida. El mes no puede ser 0 ni mayor que 12'),
    Array('persona','fechaNacimiento_persona','input',43,'cumple fecha no futura','personalized','ADD','fechaNacimiento_persona_persona_futura','Fecha inválida. No debe ser una fecha futura'),
    Array('persona','fechaNacimiento_persona','input',46,'es correcta','valid','ADD',true,'Fecha nacimiento persona correcta'),
    //fechaNacimiento --> EDIT
    Array('persona','fechaNacimiento_persona','input',49,'cumple formato','format','EDIT','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato Formato dd/mm/aaaa'),
    Array('persona','fechaNacimiento_persona','input',51,'cumple día válido','personalized','EDIT','fechaNacimiento_persona_dia_incorrecto','Fecha inválida. El día no puede ser 0 ni mayor que 28,29,30 o 31 (dependiendo del mes y año)'),
    Array('persona','fechaNacimiento_persona','input',52,'cumple mes válido','personalized','EDIT','fechaNacimiento_persona_mes_incorrectos','Fecha inválida. El mes no puede ser 0 ni mayor que 12'),
    Array('persona','fechaNacimiento_persona','input',50,'cumple fecha no futura','personalized','EDIT','fechaNacimiento_persona_futura','Fecha inválida. No debe ser una fecha futura'),
    Array('persona','fechaNacimiento_persona','input',53,'es correcta','valid','EDIT',true,'Fecha Nacimiento persona correcta'), 
    //fechaNacimiento --> SEARCH
    Array('persona','fechaNacimiento_persona','input',56,'cumple formato','format','SEARCH','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato Formato dd/mm/aaaa'),
    Array('persona','fechaNacimiento_persona','input',58,'cumple día válido','personalized','SEARCH','fechaNacimiento_persona_dia_incorrecto','Fecha inválida. El día no puede ser 0 ni mayor que 28,29,30 o 31 (dependiendo del mes y año)'),
    Array('persona','fechaNacimiento_persona','input',59,'cumple mes válido','personalized','SEARCH','fechaNacimiento_persona_mes_incorrectos','Fecha inválida. El mes no puede ser 0 ni mayor que 12'),
    Array('persona','fechaNacimiento_persona','input',57,'cumple fecha no futura','personalized','SEARCH','fechaNacimiento_persona_futura','Fecha inválida. No debe ser una fecha futura'),
    Array('persona','fechaNacimiento_persona','input',60,'es correcta','valid','SEARCH',true,'Fecha Nacimiento persona correcta'), 


    //direccion_persona --> ADD
    Array('persona','direccion_persona','input',61,'cumple tamaño minimo','min_size','ADD','direccion_persona_min_size_ko','Tamaño muy corto. Debe estar entre 10 y 200 caracteres'),
    Array('persona','direccion_persona','input',62,'cumple tamaño maximo','max_size','ADD','direccion_persona_max_size_ko','Tamaño muy grande. Debe estar entre 10 y 200 caracteres'),
    Array('persona','direccion_persona','input',63,'cumple formato','format','ADD','direccion_persona_format_ko','Formato inválido. Debe contener caracteres alfanuméricos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.), punto y coma (;), barra (/) y guión (-)'),
    Array('persona','direccion_persona','input',64,'es correcto','valid','ADD',true,'Direccion persona correcta'),
    //direccion_persona --> EDIT
    Array('persona','direccion_persona','input',65,'cumple tamaño minimo','min_size','EDIT','direccion_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',66,'cumple tamaño maximo','max_size','EDIT','direccion_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',67,'cumple formato','format','EDIT','direccion_persona_format_ko','Formato inválido. Debe contener caracteres alfanuméricos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.), punto y coma (;), barra (/) y guión (-)'),
    Array('persona','direccion_persona','input',68,'es correcto','valid','EDIT',true,'Direccion persona correcta'),
    //direccion_persona --> SEARCH
    Array('persona','direccion_persona','input',69,'cumple tamaño minimo','min_size','SEARCH','direccion_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',70,'cumple tamaño maximo','max_size','SEARCH','direccion_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',71,'cumple formato','format','SEARCH','direccion_persona_format_ko','Formato inválido. Debe contener caracteres alfanuméricos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.), punto y coma (;), barra (/) y guión (-)'),
    Array('persona','direccion_persona','input',72,'es correcto','valid','SEARCH',true,'Direccion persona correcta'),


    //telefono_persona --> ADD
    Array('persona','telefono_persona','input',73,'cumple tamaño minimo','min_size','ADD','telefono_persona_min_size_ko','Tamaño muy corto. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',74,'cumple tamaño maximo','max_size','ADD','telefono_persona_max_size_ko','Tamaño muy grande. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',75,'cumple formato','format','ADD','telefono_persona_format_ko','Formato inválido. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',76,'es correcto','valid','ADD',true,'telefono persona correcto'),
    //telefono --> EDIT
    Array('persona','telefono_persona','input',77,'cumple tamaño minimo','min_size','EDIT','telefono_persona_min_size_ko','Tamaño muy corto. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',78,'cumple tamaño maximo','max_size','EDIT','telefono_persona_max_size_ko','Tamaño muy grande. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',79,'cumple formato','format','EDIT','telefono_persona_format_ko','Formato inválido. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',80,'es correcto','valid','EDIT',true,'telefono persona correcto'), 
    //telefono --> SEARCH
    Array('persona','telefono_persona','input',81,'cumple tamaño minimo','min_size','SEARCH','telefono_persona_min_size_ko','Tamaño muy corto. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',82,'cumple tamaño maximo','max_size','SEARCH','telefono_persona_max_size_ko','Tamaño muy grande. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',83,'cumple formato','format','SEARCH','telefono_persona_format_ko','Formato inválido. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',84,'es correcto','valid','SEARCH',true,'telefono persona correcto'),


    //email_persona --> ADD
    Array('persona','email_persona','input',85,'cumple tamaño maximo','max_size','ADD','email_persona_max_size_ko','Tamaño muy grande. Debe tener menos de 45 caracteres'),
    Array('persona','email_persona','input',86,'cumple formato','format','ADD','email_persona_format_ko','Formato inválido. Debe ser usuario67@dominio.tld'),
    Array('persona','email_persona','input',87,'es correcto','valid','ADD',true,'email persona correcto'),
    //email --> EDIT
    Array('persona','email_persona','input',88,'cumple tamaño maximo','max_size','EDIT','email_persona_max_size_ko','Tamaño muy grande. Debe tener menos de 45 caracteres'),
    Array('persona','email_persona','input',89,'cumple formato','format','EDIT','email_persona_format_ko','Formato inválido. Debe ser usuario67@dominio.tld'),
    Array('persona','email_persona','input',90,'es correcto','valid','EDIT',true,'email persona correcto'), 
    //email --> SEARCH
    Array('persona','email_persona','input',91,'cumple tamaño maximo','max_size','SEARCH','email_persona_max_size_ko','Tamaño muy grande. Debe tener menos de 45 caracteres'),
    Array('persona','email_persona','input',92,'cumple formato','format','SEARCH','email_persona_format_ko','Formato inválido. Debe ser usuario67@dominio.tld'),
    Array('persona','email_persona','input',93,'es correcto','valid','SEARCH',true,'email persona correcto'), 


    //foto_persona --> SEARCH
    Array('persona','foto_persona','file',100,'cumple tamaño minimo','min_size','SEARCH','foto_persona_min_size_ko','Nombre demasiado corto. Debe ser mayor de 3 caracteres.'),
    Array('persona','foto_persona','file',101,'cumple tamaño maximo','max_size','SEARCH','foto_persona_max_ko','Nombre demaisado largo. debe ser menor de 15 caracteres.'),
    Array('persona','foto_persona','file',102,'formato','format','SEARCH','foto_persona_format_ko','Formato incorrecto. Solo se admiten letras y punto (.)'),


    //nuevo_foto_persona --> ADD
    Array('persona','foto_persona','file',103,'existe fichero en foto_persona','exist_file','ADD','foto_persona_exist_file_ko','No existe foto. Debe subir una foto en .jpg'),
    Array('persona','foto_persona','file',104,'foto persona formato incorrecto','format_name_file','ADD','foto_persona_format_name_file_ko','nombre de foto incorrecto. Se deben usar letras son acentos y solo se permiten puntos (.)'),
    Array('persona','foto_persona','file',105,'foto persona tamaño excesivo','max_size_file','ADD','foto_persona_max_size_file_ko','Tamaño fichero foto excesivo. Deben ser menor de 2000 bytes (2MB)'),
    //nuevo_foto_persona --> EDIT
    Array('persona','foto_persona','file',106,'existe fichero en foto_persona','exist_file','EDIT','foto_persona_exist_file_ko','No existe foto. Debe subir una foto en .jpg'),
    Array('persona','foto_persona','file',107,'foto persona formato incorrecto','format_name_file','EDIT','foto_persona_format_name_file_ko','nombre de foto incorrecto. Se deben usar letras son acentos y solo se permiten puntos (.)'),
    Array('persona','foto_persona','file',108,'foto persona tamaño excesivo','max_size_file','EDIT','foto_persona_max_size_file_ko','Tamaño fichero foto excesivo. Deben ser menor de 2000 bytes (2MB)'),

);



//Definicion de pruebas que usen los tests creados anteriormente
let persona_pruebas = 
Array(
    //dni --> ADD
    Array('persona','dni',1,1,'ADD',{dni:'1234567A'},'dni_min_size_ko'),
    Array('persona','dni',2,2,'ADD',{dni:'123456789A'},'dni_max_size_ko'),
    Array('persona','dni',3,3,'ADD',{dni:'1234O6789'},'dni_format_ko'),
    Array('persona','dni',4,4,'ADD',{dni:'1234O678A'},'dni_letra_incorrecta'),
    Array('persona','dni',5,5,'ADD',{dni:'12345678Z'},true),
    //nombre_persona --> EDIT
    Array('persona','dni',6,6,'EDIT',{dni:'1234567A'},'dni_min_size_ko'),
    Array('persona','dni',7,7,'EDIT',{dni:'123456789A'},'dni_max_size_ko'),
    Array('persona','dni',8,8,'EDIT',{dni:'E234O67AA'},'dni_format_ko'),
    Array('persona','dni',9,9,'EDIT',{dni:'12345678A'},'dni_letra_incorrecta'),
    Array('persona','dni',10,10,'EDIT',{dni:'12345678Z'},true),
    //nombre_persona --> SEARCH
    Array('persona','dni',11,11,'SEARCH',{dni:'1234567A'},'dni_min_size_ko'),
    Array('persona','dni',12,12,'SEARCH',{dni:'123456789A'},'dni_max_size_ko'),
    Array('persona','dni',13,13,'SEARCH',{dni:'E234O67AA'},'dni_format_ko'),
    Array('persona','dni',14,14,'SEARCH',{dni:'12345678A'},'dni_letra_incorrecta'),
    Array('persona','dni',15,15,'SEARCH',{dni:'12345678Z'},true),

    //nombre_persona --> ADD
    Array('persona','nombre_persona',16,16,'ADD',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',17,17,'ADD',{nombre_persona:'a'.repeat(46)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',18,18,'ADD',{nombre_persona:'E:5g'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',19,19,'ADD',{nombre_persona:'javi'},true),
    //nombre_persona --> EDIT
    Array('persona','nombre_persona',20,20,'EDIT',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',21,21,'EDIT',{nombre_persona:'a'.repeat(46)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',22,22,'EDIT',{nombre_persona:'E:5g'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',23,23,'EDIT',{nombre_persona:'javi'},true),
    //nombre_persona --> SEARCH
    Array('persona','nombre_persona',24,24,'SEARCH',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',25,25,'SEARCH',{nombre_persona:'a'.repeat(46)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',26,26,'SEARCH',{nombre_persona:'E:5g'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',27,27,'SEARCH',{nombre_persona:'javi'},true),


    //apellidos_persona --> ADD
    Array('persona','apellidos_persona',28,28,'ADD',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',29,29,'ADD',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',30,30,'ADD',{apellidos_persona:'E:5g'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',31,31,'ADD',{apellidos_persona:'javi'},true),
    //apellidos_persona --> EDIT
    Array('persona','apellidos_persona',32,32,'EDIT',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',33,33,'EDIT',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',34,34,'EDIT',{apellidos_persona:'E:5g'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',35,35,'EDIT',{apellidos_persona:'javi'},true),
    //apellidos_persona --> SEARCH
    Array('persona','apellidos_persona',36,36,'SEARCH',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',37,37,'SEARCH',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',38,38,'SEARCH',{apellidos_persona:'E:5g'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',39,39,'SEARCH',{apellidos_persona:'javi'},true),

    
    //fechaNacimiento_persona --> ADD
    Array('persona','fechaNacimiento_persona',42,42,'ADD',{fechaNacimiento_persona:'1111/11/11'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',44,44,'ADD',{fechaNacimiento_persona:'67/02/2006'},'fechaNacimiento_persona_dia_incorrecto'),
    Array('persona','fechaNacimiento_persona',45,45,'ADD',{fechaNacimiento_persona:'03/67/2006'},'fechaNacimiento_persona_mes_incorrectos'),
    Array('persona','fechaNacimiento_persona',43,43,'ADD',{fechaNacimiento_persona:'99/99/9999'},'fechaNacimiento_persona_futura'),
    Array('persona','fechaNacimiento_persona',46,46,'ADD',{fechaNacimiento_persona:'11/11/1111'},true),
    //fechaNacimiento_persona --> EDIT
    Array('persona','fechaNacimiento_persona',49,49,'EDIT',{fechaNacimiento_persona:'1111/11/11'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',51,51,'EDIT',{fechaNacimiento_persona:'67/02/2006'},'fechaNacimiento_persona_dia_incorrecto'),
    Array('persona','fechaNacimiento_persona',52,52,'EDIT',{fechaNacimiento_persona:'03/67/2006'},'fechaNacimiento_persona_mes_incorrectos'),
    Array('persona','fechaNacimiento_persona',50,50,'EDIT',{fechaNacimiento_persona:'99/99/9999'},'fechaNacimiento_persona_futura'),
    Array('persona','fechaNacimiento_persona',53,53,'EDIT',{fechaNacimiento_persona:'11/11/1111'},true),
    //fechaNacimiento_persona --> SEARCH
    Array('persona','fechaNacimiento_persona',56,56,'SEARCH',{fechaNacimiento_persona:'1111/11/11'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',58,58,'SEARCH',{fechaNacimiento_persona:'67/02/2006'},'fechaNacimiento_persona_dia_incorrecto'),
    Array('persona','fechaNacimiento_persona',59,59,'SEARCH',{fechaNacimiento_persona:'03/67/2006'},'fechaNacimiento_persona_mes_incorrectos'),
    Array('persona','fechaNacimiento_persona',57,57,'SEARCH',{fechaNacimiento_persona:'99/99/9999'},'fechaNacimiento_persona_futura'),
    Array('persona','fechaNacimiento_persona',60,60,'SEARCH',{fechaNacimiento_persona:'11/11/1111'},true),


    //direccion_persona --> ADD
    Array('persona','direccion_persona',61,61,'ADD',{direccion_persona:'a2b4c6d8'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',62,62,'ADD',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',63,63,'ADD',{direccion_persona:'C:67 _l'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',64,64,'ADD',{direccion_persona:'C/Solaina 67'},true),
    //direccion_persona --> EDIT
    Array('persona','direccion_persona',65,65,'EDIT',{direccion_persona:'a2b4c6d8'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',66,66,'EDIT',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',67,67,'EDIT',{direccion_persona:'C:67 _l'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',68,68,'EDIT',{direccion_persona:'C/Solaina 67'},true),
    //direccion_persona --> SEARCH
    Array('persona','direccion_persona',69,69,'SEARCH',{direccion_persona:'a2b4c6d8'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',70,70,'SEARCH',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',71,71,'SEARCH',{direccion_persona:'C:67 _l'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',72,72,'SEARCH',{direccion_persona:'C/Solaina 67'},true),


    //telefono_persona --> ADD
    Array('persona','telefono_persona',73,73,'ADD',{telefono_persona:'1234'},'telefono_persona_min_size_ko'),
    Array('persona','telefono_persona',74,74,'ADD',{telefono_persona:'9'.repeat(10)},'telefono_persona_max_size_ko'),
    Array('persona','telefono_persona',75,75,'ADD',{telefono_persona:'123-56-89'},'telefono_persona_format_ko'),
    Array('persona','direccion_persona',76,76,'ADD',{telefono_persona:'123456789'},true),
    //telefono_persona --> EDIT
    Array('persona','telefono_persona',77,77,'EDIT',{telefono_persona:'1234'},'telefono_persona_min_size_ko'),
    Array('persona','telefono_persona',78,78,'EDIT',{telefono_persona:'9'.repeat(201)},'telefono_persona_max_size_ko'),
    Array('persona','telefono_persona',79,79,'EDIT',{telefono_persona:'123-56-89'},'telefono_persona_format_ko'),
    Array('persona','telefono_persona',80,80,'EDIT',{telefono_persona:'123456789'},true),
    //telefono_persona --> SEARCH
    Array('persona','telefono_persona',81,81,'SEARCH',{telefono_persona:'1234'},'telefono_persona_min_size_ko'),
    Array('persona','telefono_persona',82,82,'SEARCH',{telefono_persona:'9'.repeat(201)},'telefono_persona_max_size_ko'),
    Array('persona','telefono_persona',83,83,'SEARCH',{telefono_persona:'123-56-89'},'telefono_persona_format_ko'),
    Array('persona','telefono_persona',84,84,'SEARCH',{telefono_persona:'123456789'},true),


    //email_persona --> ADD
    Array('persona','email_persona',85,85,'ADD',{email_persona:'a'.repeat(46)},'email_persona_max_size_ko'),
    Array('persona','email_persona',86,86,'ADD',{email_persona:'usuariogmailes.'},'email_persona_format_ko'),
    Array('persona','emailn_persona',87,87,'ADD',{email_persona:'usuario67@gmail.com'},true),
    //email_persona --> EDIT
    Array('persona','email_persona',88,88,'EDIT',{email_persona:'a'.repeat(46)},'email_persona_max_size_ko'),
    Array('persona','email_persona',89,89,'EDIT',{email_persona:'usuariogmailes.'},'email_persona_format_ko'),
    Array('persona','email_persona',90,90,'EDIT',{email_persona:'usuario67@gmail.com'},true),
    //email_persona --> SEARCH
    Array('persona','email_persona',91,91,'SEARCH',{email_persona:'a'.repeat(46)},'email_persona_max_size_ko'),
    Array('persona','email_persona',92,92,'SEARCH',{email_persona:'usuariogmailes.'},'email_persona_format_ko'),
    Array('persona','email_persona',93,93,'SEARCH',{email_persona:'usuario67@gmail.com'},true),


    //foto_persona --> SEARCH
    Array('persona','foto_persona',100,100,'SEARCH',{foto_persona:'aa'},'foto_persona_min_size_file_ko'),
    Array('persona','foto_persona',101,101,'SEARCH',{foto_persona:'a'.repeat(15)},'foto_persona_max_size_file_ko'),
    Array('persona','foto_persona',102,102,'SEARCH',{foto_persona:'a:3'},'foto_persona_format_file_ko'),


    //nuevo_foto_persona --> ADD
    Array('persona','foto_persona',103,103,'ADD',{},'foto_persona_not_exist_file_ko'),
    Array('persona','foto_persona',104,104,'ADD',{foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'foto_persona_format_name_file_ko'),
    Array('persona','foto_persona',105,105,'ADD',{foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'foto_persona_max_size_file_ko'),
    //nuevo_foto_persona --> EDIT
    Array('persona','foto_persona',106,106,'EDIT',{},'foto_persona_not_exist_file_ko'),
    Array('persona','foto_persona',107,107,'EDIT',{foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'foto_persona_format_name_file_ko'),
    Array('persona','foto_persona',108,108,'EDIT',{foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'foto_persona_max_size_file_ko'),
);
ko','Tamaño muy corto. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',7,'cumple tamaño maximo','max_size','EDIT','dni_persona_max_size_ko','Tamaño muy grande. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',8,'cumple formato','format','EDIT','dni_persona_format_ko','Formato inválido. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',9,'letra dni valida','personalized','EDIT','dni_persona_letra_incorrecta','La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('persona','dni','input',10,'es correcto','valid','EDIT',true,'DNI persona correcto'),
    //dni --> SEARCH
    Array('persona','dni','input',11,'cumple tamaño minimo','max_size','SEARCH','dni_persona_min_size_ko','Tamaño muy corto. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',12,'cumple tamaño maximo','max_size','SEARCH','dni_persona_max_size_ko','Tamaño muy grande. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',13,'cumple formato','format','SEARCH','dni_persona_format_ko','Formato inválido. El DNI debe ser de 9 caracteres (8 números y una letra al final)'),
    Array('persona','dni','input',14,'letra dni valida','personalized','SEARCH','dni_persona_letra_incorrecta','La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('persona','dni','input',15,'es correcto','valid','SEARCH',true,'DNI persona correcto'),


    //nombre_persona --> ADD
    Array('persona','nombre_persona','input',16,'cumple tamaño minimo','min_size','ADD','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',17,'cumple tamaño maximo','max_size','ADD','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',18,'cumple formato','format','ADD','nombre_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','nombre_persona','input',19,'es correcto','valid','ADD',true,'Nombre persona correcto'),
    //nombre_persona --> EDIT
    Array('persona','nombre_persona','input',20,'cumple tamaño minimo','min_size','EDIT','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',21,'cumple tamaño maximo','max_size','EDIT','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',22,'cumple formato','format','EDIT','nombre_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','nombre_persona','input',23,'es correcto','valid','EDIT',true,'Nombre persona correcto'),
    //nombre_persona --> SEARCH
    Array('persona','nombre_persona','input',24,'cumple tamaño minimo','min_size','SEARCH','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',25,'cumple tamaño maximo','max_size','SEARCH','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',26,'cumple formato','format','SEARCH','nombre_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','nombre_persona','input',27,'es correcto','valid','SEARCH',true,'Nombre persona correcto'),
    

    //apellidos_persona --> ADD
    Array('persona','apellidos_persona','input',28,'cumple tamaño minimo','min_size','ADD','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',29,'cumple tamaño maximo','max_size','ADD','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',30,'cumple formato','format','ADD','apellidos_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','apellidos_persona','input',31,'es correcto','valid','ADD',true,'Apellidos persona correcto'),
    //apellidos_persona --> EDIT
    Array('persona','apellidos_persona','input',32,'cumple tamaño minimo','min_size','EDIT','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',33,'cumple tamaño maximo','max_size','EDIT','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',34,'cumple formato','format','EDIT','apellidos_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','apellidos_persona','input',35,'es correcto','valid','EDIT',true,'Apellidos persona correcto'),
    //apellidos_persona --> SEARCH
    Array('persona','apellidos_persona','input',36,'cumple tamaño minimo','min_size','SEARCH','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',37,'cumple tamaño maximo','max_size','SEARCH','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','apellidos_persona','input',38,'cumple formato','format','SEARCH','apellidos_persona_format_ko','Formato inválido. Debe contener caracteres alfabéticos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.) y guión (-)'),
    Array('persona','apellidos_persona','input',39,'es correcto','valid','SEARCH',true,'Apellidos persona correcto'),


    //fechaNacimiento_persona --> ADD
    Array('persona','fechaNacimiento_persona','input',42,'cumple formato','format','ADD','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato Formato dd/mm/aaaa'),
    Array('persona','fechaNacimiento_persona','input',44,'cumple día válido','personalized','ADD','fechaNacimiento_persona_dia_incorrecto','Fecha inválida. El día no puede ser 0 ni mayor que 28,29,30 o 31 (dependiendo del mes y año)'),
    Array('persona','fechaNacimiento_persona','input',45,'cumple mes válido','personalized','ADD','fechaNacimiento_persona_mes_incorrectos','Fecha inválida. El mes no puede ser 0 ni mayor que 12'),
    Array('persona','fechaNacimiento_persona','input',43,'cumple fecha no futura','personalized','ADD','fechaNacimiento_persona_persona_futura','Fecha inválida. No debe ser una fecha futura'),
    Array('persona','fechaNacimiento_persona','input',46,'es correcta','valid','ADD',true,'Fecha nacimiento persona correcta'),
    //fechaNacimiento --> EDIT
    Array('persona','fechaNacimiento_persona','input',49,'cumple formato','format','EDIT','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato Formato dd/mm/aaaa'),
    Array('persona','fechaNacimiento_persona','input',51,'cumple día válido','personalized','EDIT','fechaNacimiento_persona_dia_incorrecto','Fecha inválida. El día no puede ser 0 ni mayor que 28,29,30 o 31 (dependiendo del mes y año)'),
    Array('persona','fechaNacimiento_persona','input',52,'cumple mes válido','personalized','EDIT','fechaNacimiento_persona_mes_incorrectos','Fecha inválida. El mes no puede ser 0 ni mayor que 12'),
    Array('persona','fechaNacimiento_persona','input',50,'cumple fecha no futura','personalized','EDIT','fechaNacimiento_persona_futura','Fecha inválida. No debe ser una fecha futura'),
    Array('persona','fechaNacimiento_persona','input',53,'es correcta','valid','EDIT',true,'Fecha Nacimiento persona correcta'), 
    //fechaNacimiento --> SEARCH
    Array('persona','fechaNacimiento_persona','input',56,'cumple formato','format','SEARCH','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato Formato dd/mm/aaaa'),
    Array('persona','fechaNacimiento_persona','input',58,'cumple día válido','personalized','SEARCH','fechaNacimiento_persona_dia_incorrecto','Fecha inválida. El día no puede ser 0 ni mayor que 28,29,30 o 31 (dependiendo del mes y año)'),
    Array('persona','fechaNacimiento_persona','input',59,'cumple mes válido','personalized','SEARCH','fechaNacimiento_persona_mes_incorrectos','Fecha inválida. El mes no puede ser 0 ni mayor que 12'),
    Array('persona','fechaNacimiento_persona','input',57,'cumple fecha no futura','personalized','SEARCH','fechaNacimiento_persona_futura','Fecha inválida. No debe ser una fecha futura'),
    Array('persona','fechaNacimiento_persona','input',60,'es correcta','valid','SEARCH',true,'Fecha Nacimiento persona correcta'), 


    //direccion_persona --> ADD
    Array('persona','direccion_persona','input',61,'cumple tamaño minimo','min_size','ADD','direccion_persona_min_size_ko','Tamaño muy corto. Debe estar entre 10 y 200 caracteres'),
    Array('persona','direccion_persona','input',62,'cumple tamaño maximo','max_size','ADD','direccion_persona_max_size_ko','Tamaño muy grande. Debe estar entre 10 y 200 caracteres'),
    Array('persona','direccion_persona','input',63,'cumple formato','format','ADD','direccion_persona_format_ko','Formato inválido. Debe contener caracteres alfanuméricos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.), punto y coma (;), barra (/) y guión (-)'),
    Array('persona','direccion_persona','input',64,'es correcto','valid','ADD',true,'Direccion persona correcta'),
    //direccion_persona --> EDIT
    Array('persona','direccion_persona','input',65,'cumple tamaño minimo','min_size','EDIT','direccion_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',66,'cumple tamaño maximo','max_size','EDIT','direccion_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',67,'cumple formato','format','EDIT','direccion_persona_format_ko','Formato inválido. Debe contener caracteres alfanuméricos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.), punto y coma (;), barra (/) y guión (-)'),
    Array('persona','direccion_persona','input',68,'es correcto','valid','EDIT',true,'Direccion persona correcta'),
    //direccion_persona --> SEARCH
    Array('persona','direccion_persona','input',69,'cumple tamaño minimo','min_size','SEARCH','direccion_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',70,'cumple tamaño maximo','max_size','SEARCH','direccion_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona','direccion_persona','input',71,'cumple formato','format','SEARCH','direccion_persona_format_ko','Formato inválido. Debe contener caracteres alfanuméricos (incluidos ñ,á,Á,é,É,í,Í,ó,Ó,ú,Ú,ü,Ü) y solo se permiten los signos punto (.), punto y coma (;), barra (/) y guión (-)'),
    Array('persona','direccion_persona','input',72,'es correcto','valid','SEARCH',true,'Direccion persona correcta'),


    //telefono_persona --> ADD
    Array('persona','telefono_persona','input',73,'cumple tamaño minimo','min_size','ADD','telefono_persona_min_size_ko','Tamaño muy corto. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',74,'cumple tamaño maximo','max_size','ADD','telefono_persona_max_size_ko','Tamaño muy grande. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',75,'cumple formato','format','ADD','telefono_persona_format_ko','Formato inválido. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',76,'es correcto','valid','ADD',true,'telefono persona correcto'),
    //telefono --> EDIT
    Array('persona','telefono_persona','input',77,'cumple tamaño minimo','min_size','EDIT','telefono_persona_min_size_ko','Tamaño muy corto. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',78,'cumple tamaño maximo','max_size','EDIT','telefono_persona_max_size_ko','Tamaño muy grande. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',79,'cumple formato','format','EDIT','telefono_persona_format_ko','Formato inválido. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',80,'es correcto','valid','EDIT',true,'telefono persona correcto'), 
    //telefono --> SEARCH
    Array('persona','telefono_persona','input',81,'cumple tamaño minimo','min_size','SEARCH','telefono_persona_min_size_ko','Tamaño muy corto. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',82,'cumple tamaño maximo','max_size','SEARCH','telefono_persona_max_size_ko','Tamaño muy grande. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',83,'cumple formato','format','SEARCH','telefono_persona_format_ko','Formato inválido. Debe tener exactamente 9 números'),
    Array('persona','telefono_persona','input',84,'es correcto','valid','SEARCH',true,'telefono persona correcto'),


    //email_persona --> ADD
    Array('persona','email_persona','input',85,'cumple tamaño maximo','max_size','ADD','email_persona_max_size_ko','Tamaño muy grande. Debe tener menos de 45 caracteres'),
    Array('persona','email_persona','input',86,'cumple formato','format','ADD','email_persona_format_ko','Formato inválido. Debe ser usuario67@dominio.tld'),
    Array('persona','email_persona','input',87,'es correcto','valid','ADD',true,'email persona correcto'),
    //email --> EDIT
    Array('persona','email_persona','input',88,'cumple tamaño maximo','max_size','EDIT','email_persona_max_size_ko','Tamaño muy grande. Debe tener menos de 45 caracteres'),
    Array('persona','email_persona','input',89,'cumple formato','format','EDIT','email_persona_format_ko','Formato inválido. Debe ser usuario67@dominio.tld'),
    Array('persona','email_persona','input',90,'es correcto','valid','EDIT',true,'email persona correcto'), 
    //email --> SEARCH
    Array('persona','email_persona','input',91,'cumple tamaño maximo','max_size','SEARCH','email_persona_max_size_ko','Tamaño muy grande. Debe tener menos de 45 caracteres'),
    Array('persona','email_persona','input',92,'cumple formato','format','SEARCH','email_persona_format_ko','Formato inválido. Debe ser usuario67@dominio.tld'),
    Array('persona','email_persona','input',93,'es correcto','valid','SEARCH',true,'email persona correcto'), 


    //foto_persona --> SEARCH
    Array('persona','foto_persona','file',100,'cumple tamaño minimo','min_size','SEARCH','foto_persona_min_size_ko','Nombre demasiado corto. Debe ser mayor de 3 caracteres.'),
    Array('persona','foto_persona','file',101,'cumple tamaño maximo','max_size','SEARCH','foto_persona_max_ko','Nombre demaisado largo. debe ser menor de 15 caracteres.'),
    Array('persona','foto_persona','file',102,'formato','format','SEARCH','foto_persona_format_ko','Formato incorrecto. Solo se admiten letras y punto (.)'),


    //nuevo_foto_persona --> ADD
    Array('persona','foto_persona','file',103,'existe fichero en foto_persona','exist_file','ADD','foto_persona_exist_file_ko','No existe foto. Debe subir una foto en .jpg'),
    Array('persona','foto_persona','file',104,'foto persona formato incorrecto','format_name_file','ADD','foto_persona_format_name_file_ko','nombre de foto incorrecto. Se deben usar letras son acentos y solo se permiten puntos (.)'),
    Array('persona','foto_persona','file',105,'foto persona tamaño excesivo','max_size_file','ADD','foto_persona_max_size_file_ko','Tamaño fichero foto excesivo. Deben ser menor de 2000 bytes (2MB)'),
    //nuevo_foto_persona --> EDIT
    Array('persona','foto_persona','file',106,'existe fichero en foto_persona','exist_file','EDIT','foto_persona_exist_file_ko','No existe foto. Debe subir una foto en .jpg'),
    Array('persona','foto_persona','file',107,'foto persona formato incorrecto','format_name_file','EDIT','foto_persona_format_name_file_ko','nombre de foto incorrecto. Se deben usar letras son acentos y solo se permiten puntos (.)'),
    Array('persona','foto_persona','file',108,'foto persona tamaño excesivo','max_size_file','EDIT','foto_persona_max_size_file_ko','Tamaño fichero foto excesivo. Deben ser menor de 2000 bytes (2MB)'),

);



//Definicion de pruebas que usen los tests creados anteriormente
let persona_pruebas = 
Array(
    //dni --> ADD
    Array('persona','dni',1,1,'ADD',{dni:'1234567A'},'dni_persona_min_size_ko'),
    Array('persona','dni',2,2,'ADD',{dni:'123456789A'},'dni_persona_max_size_ko'),
    Array('persona','dni',3,3,'ADD',{dni:'1234O6789'},'dni_persona_format_ko'),
    Array('persona','dni',4,4,'ADD',{dni:'1234O678A'},'dni_persona_letra_incorrecta'),
    Array('persona','dni',5,5,'ADD',{dni:'12345678Z'},true),
    //nombre_persona --> EDIT
    Array('persona','dni',6,6,'EDIT',{dni:'1234567A'},'dni_persona_min_size_ko'),
    Array('persona','dni',7,7,'EDIT',{dni:'123456789A'},'dni_persona_max_size_ko'),
    Array('persona','dni',8,8,'EDIT',{dni:'E234O67AA'},'dni_persona_format_ko'),
    Array('persona','dni',9,9,'EDIT',{dni:'12345678A'},'dni_persona_letra_incorrecta'),
    Array('persona','dni',10,10,'EDIT',{dni:'12345678Z'},true),
    //nombre_persona --> SEARCH
    Array('persona','dni',11,11,'SEARCH',{dni:'1234567A'},'dni_persona_min_size_ko'),
    Array('persona','dni',12,12,'SEARCH',{dni:'123456789A'},'dni_persona_max_size_ko'),
    Array('persona','dni',13,13,'SEARCH',{dni:'E234O67AA'},'dni_persona_format_ko'),
    Array('persona','dni',14,14,'SEARCH',{dni:'12345678A'},'dni_persona_letra_incorrecta'),
    Array('persona','dni',15,15,'SEARCH',{dni:'12345678Z'},true),

    //nombre_persona --> ADD
    Array('persona','nombre_persona',16,16,'ADD',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',17,17,'ADD',{nombre_persona:'a'.repeat(46)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',18,18,'ADD',{nombre_persona:'E:5g'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',19,19,'ADD',{nombre_persona:'javi'},true),
    //nombre_persona --> EDIT
    Array('persona','nombre_persona',20,20,'EDIT',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',21,21,'EDIT',{nombre_persona:'a'.repeat(46)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',22,22,'EDIT',{nombre_persona:'E:5g'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',23,23,'EDIT',{nombre_persona:'javi'},true),
    //nombre_persona --> SEARCH
    Array('persona','nombre_persona',24,24,'SEARCH',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',25,25,'SEARCH',{nombre_persona:'a'.repeat(46)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',26,26,'SEARCH',{nombre_persona:'E:5g'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',27,27,'SEARCH',{nombre_persona:'javi'},true),


    //apellidos_persona --> ADD
    Array('persona','apellidos_persona',28,28,'ADD',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',29,29,'ADD',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',30,30,'ADD',{apellidos_persona:'E:5g'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',31,31,'ADD',{apellidos_persona:'javi'},true),
    //apellidos_persona --> EDIT
    Array('persona','apellidos_persona',32,32,'EDIT',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',33,33,'EDIT',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',34,34,'EDIT',{apellidos_persona:'E:5g'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',35,35,'EDIT',{apellidos_persona:'javi'},true),
    //apellidos_persona --> SEARCH
    Array('persona','apellidos_persona',36,36,'SEARCH',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',37,37,'SEARCH',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',38,38,'SEARCH',{apellidos_persona:'E:5g'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',39,39,'SEARCH',{apellidos_persona:'javi'},true),

    
    //fechaNacimiento_persona --> ADD
    Array('persona','fechaNacimiento_persona',42,42,'ADD',{fechaNacimiento_persona:'1111/11/11'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',44,44,'ADD',{fechaNacimiento_persona:'67/02/2006'},'fechaNacimiento_persona_dia_incorrecto'),
    Array('persona','fechaNacimiento_persona',45,45,'ADD',{fechaNacimiento_persona:'03/67/2006'},'fechaNacimiento_persona_mes_incorrectos'),
    Array('persona','fechaNacimiento_persona',43,43,'ADD',{fechaNacimiento_persona:'99/99/9999'},'fechaNacimiento_persona_futura'),
    Array('persona','fechaNacimiento_persona',46,46,'ADD',{fechaNacimiento_persona:'11/11/1111'},true),
    //fechaNacimiento_persona --> EDIT
    Array('persona','fechaNacimiento_persona',49,49,'EDIT',{fechaNacimiento_persona:'1111/11/11'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',51,51,'EDIT',{fechaNacimiento_persona:'67/02/2006'},'fechaNacimiento_persona_dia_incorrecto'),
    Array('persona','fechaNacimiento_persona',52,52,'EDIT',{fechaNacimiento_persona:'03/67/2006'},'fechaNacimiento_persona_mes_incorrectos'),
    Array('persona','fechaNacimiento_persona',50,50,'EDIT',{fechaNacimiento_persona:'99/99/9999'},'fechaNacimiento_persona_futura'),
    Array('persona','fechaNacimiento_persona',53,53,'EDIT',{fechaNacimiento_persona:'11/11/1111'},true),
    //fechaNacimiento_persona --> SEARCH
    Array('persona','fechaNacimiento_persona',56,56,'SEARCH',{fechaNacimiento_persona:'1111/11/11'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',58,58,'SEARCH',{fechaNacimiento_persona:'67/02/2006'},'fechaNacimiento_persona_dia_incorrecto'),
    Array('persona','fechaNacimiento_persona',59,59,'SEARCH',{fechaNacimiento_persona:'03/67/2006'},'fechaNacimiento_persona_mes_incorrectos'),
    Array('persona','fechaNacimiento_persona',57,57,'SEARCH',{fechaNacimiento_persona:'99/99/9999'},'fechaNacimiento_persona_futura'),
    Array('persona','fechaNacimiento_persona',60,60,'SEARCH',{fechaNacimiento_persona:'11/11/1111'},true),


    //direccion_persona --> ADD
    Array('persona','direccion_persona',61,61,'ADD',{direccion_persona:'a2b4c6d8'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',62,62,'ADD',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',63,63,'ADD',{direccion_persona:'C:67 _l'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',64,64,'ADD',{direccion_persona:'C/Solaina 67'},true),
    //direccion_persona --> EDIT
    Array('persona','direccion_persona',65,65,'EDIT',{direccion_persona:'a2b4c6d8'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',66,66,'EDIT',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',67,67,'EDIT',{direccion_persona:'C:67 _l'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',68,68,'EDIT',{direccion_persona:'C/Solaina 67'},true),
    //direccion_persona --> SEARCH
    Array('persona','direccion_persona',69,69,'SEARCH',{direccion_persona:'a2b4c6d8'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',70,70,'SEARCH',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',71,71,'SEARCH',{direccion_persona:'C:67 _l'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',72,72,'SEARCH',{direccion_persona:'C/Solaina 67'},true),


    //telefono_persona --> ADD
    Array('persona','telefono_persona',73,73,'ADD',{telefono_persona:'1234'},'telefono_persona_min_size_ko'),
    Array('persona','telefono_persona',74,74,'ADD',{telefono_persona:'9'.repeat(10)},'telefono_persona_max_size_ko'),
    Array('persona','telefono_persona',75,75,'ADD',{telefono_persona:'123-56-89'},'telefono_persona_format_ko'),
    Array('persona','direccion_persona',76,76,'ADD',{telefono_persona:'123456789'},true),
    //telefono_persona --> EDIT
    Array('persona','telefono_persona',77,77,'EDIT',{telefono_persona:'1234'},'telefono_persona_min_size_ko'),
    Array('persona','telefono_persona',78,78,'EDIT',{telefono_persona:'9'.repeat(201)},'telefono_persona_max_size_ko'),
    Array('persona','telefono_persona',79,79,'EDIT',{telefono_persona:'123-56-89'},'telefono_persona_format_ko'),
    Array('persona','telefono_persona',80,80,'EDIT',{telefono_persona:'123456789'},true),
    //telefono_persona --> SEARCH
    Array('persona','telefono_persona',81,81,'SEARCH',{telefono_persona:'1234'},'telefono_persona_min_size_ko'),
    Array('persona','telefono_persona',82,82,'SEARCH',{telefono_persona:'9'.repeat(201)},'telefono_persona_max_size_ko'),
    Array('persona','telefono_persona',83,83,'SEARCH',{telefono_persona:'123-56-89'},'telefono_persona_format_ko'),
    Array('persona','telefono_persona',84,84,'SEARCH',{telefono_persona:'123456789'},true),


    //email_persona --> ADD
    Array('persona','email_persona',85,85,'ADD',{email_persona:'a'.repeat(46)},'email_persona_max_size_ko'),
    Array('persona','email_persona',86,86,'ADD',{email_persona:'usuariogmailes.'},'email_persona_format_ko'),
    Array('persona','emailn_persona',87,87,'ADD',{email_persona:'usuario67@gmail.com'},true),
    //email_persona --> EDIT
    Array('persona','email_persona',88,88,'EDIT',{email_persona:'a'.repeat(46)},'email_persona_max_size_ko'),
    Array('persona','email_persona',89,89,'EDIT',{email_persona:'usuariogmailes.'},'email_persona_format_ko'),
    Array('persona','email_persona',90,90,'EDIT',{email_persona:'usuario67@gmail.com'},true),
    //email_persona --> SEARCH
    Array('persona','email_persona',91,91,'SEARCH',{email_persona:'a'.repeat(46)},'email_persona_max_size_ko'),
    Array('persona','email_persona',92,92,'SEARCH',{email_persona:'usuariogmailes.'},'email_persona_format_ko'),
    Array('persona','email_persona',93,93,'SEARCH',{email_persona:'usuario67@gmail.com'},true),


    //foto_persona --> SEARCH
    Array('persona','foto_persona',100,100,'SEARCH',{foto_persona:'aa'},'foto_persona_min_size_file_ko'),
    Array('persona','foto_persona',101,101,'SEARCH',{foto_persona:'a'.repeat(15)},'foto_persona_max_size_file_ko'),
    Array('persona','foto_persona',102,102,'SEARCH',{foto_persona:'a:3'},'foto_persona_format_file_ko'),


    //nuevo_foto_persona --> ADD
    Array('persona','foto_persona',103,103,'ADD',{},'foto_persona_not_exist_file_ko'),
    Array('persona','foto_persona',104,104,'ADD',{foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'foto_persona_format_name_file_ko'),
    Array('persona','foto_persona',105,105,'ADD',{foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'foto_persona_max_size_file_ko'),
    //nuevo_foto_persona --> EDIT
    Array('persona','foto_persona',106,106,'EDIT',{},'foto_persona_not_exist_file_ko'),
    Array('persona','foto_persona',107,107,'EDIT',{foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'foto_persona_format_name_file_ko'),
    Array('persona','foto_persona',108,108,'EDIT',{foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'foto_persona_max_size_file_ko'),
);
