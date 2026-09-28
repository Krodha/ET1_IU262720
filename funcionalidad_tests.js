let funcionalidad_def_tests = 
Array(
    // id_funcionalidad --> ADD
    Array('funcionalidad','id_funcionalidad','input',1,'Comprobar tamaño mínimo','min_size','ADD','id_funcionalidad_min_size_ko','El id de la funcionalidad tiene una longitud inválida. Introduce por lo menos 1 dígito.'),
    Array('funcionalidad','id_funcionalidad','input',2,'Comprobar tamaño máximo','max_size','ADD','id_funcionalidad_max_size_ko','El id de la funcionalidad tiene una longitud inválida. Introduce como mucho 11 dígitos.'),
    Array('funcionalidad','id_funcionalidad','input',3,'Comprobar formato','format','ADD','id_funcionalidad_format_ko','El id de la funcionalidad tiene un formato inválido. Sólo se pueden introducir los dígitos del 0 al 9.'),
    Array('funcionalidad','id_funcionalidad','input',4,'Formato válido','valid','ADD',true,'id funcionalidad correcto.'),
    // id_funcionalidad --> EDIT
    Array('funcionalidad','id_funcionalidad','input',5,'Comprobar tamaño mínimo','min_size','EDIT','id_funcionalidad_min_size_ko','El id de la funcionalidad tiene una longitud inválida. Introduce por lo menos 1 dígito.'),
    Array('funcionalidad','id_funcionalidad','input',6,'Comprobar tamaño máximo','max_size','EDIT','id_funcionalidad_max_size_ko','El id de la funcionalidad tiene una longitud inválida. Introduce como mucho 11 dígitos.'),
    Array('funcionalidad','id_funcionalidad','input',7,'Comprobar formato','format','EDIT','id_funcionalidad_format_ko','El id de la funcionalidad tiene un formato inválido. Sólo se pueden introducir los dígitos del 0 al 9.'),
    Array('funcionalidad','id_funcionalidad','input',8,'Formato válido','valid','EDIT',true,'id funcionalidad correcto.'),
    // id_funcionalidad --> SEARCH
    Array('funcionalidad','id_funcionalidad','input',9,'Comprobar tamaño mínimo','min_size','SEARCH','id_funcionalidad_min_size_ko','El id de la funcionalidad tiene una longitud inválida. Introduce por lo menos 1 dígito.'),
    Array('funcionalidad','id_funcionalidad','input',10,'Comprobar tamaño máximo','max_size','SEARCH','id_funcionalidad_max_size_ko','El id de la funcionalidad tiene una longitud inválida. Introduce como mucho 11 dígitos.'),
    Array('funcionalidad','id_funcionalidad','input',11,'Comprobar formato','format','SEARCH','id_funcionalidad_format_ko','El id de la funcionalidad tiene un formato inválido. Sólo se pueden introducir los dígitos del 0 al 9.'),
    Array('funcionalidad','id_funcionalidad','input',12,'Formato válido','valid','SEARCH',true,'id funcionalidad correcto.'),

    // nombre_funcionalidad --> ADD
    Array('funcionalidad','nombre_funcionalidad','input',13,'Comprobar tamaño mínimo','min_size','ADD','nombre_funcionalidad_min_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',14,'Comprobar tamaño máximo','max_size','ADD','nombre_funcionalidad_max_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce como mucho 48 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',15,'Comprobar formato','format','ADD','nombre_funcionalidad_format_ko','El nombre de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ).'),
    Array('funcionalidad','nombre_funcionalidad','input',16,'Formato válido','valid','ADD',true,'Nombre funcionalidad correcto.'),
    // nombre_funcionalidad --> EDIT
    Array('funcionalidad','nombre_funcionalidad','input',17,'Comprobar tamaño mínimo','min_size','EDIT','nombre_funcionalidad_min_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',18,'Comprobar tamaño máximo','max_size','EDIT','nombre_funcionalidad_max_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce como mucho 48 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',19,'Comprobar formato','format','EDIT','nombre_funcionalidad_format_ko','El nombre de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ).'),
    Array('funcionalidad','nombre_funcionalidad','input',20,'Formato válido','valid','EDIT',true,'Nombre funcionalidad correcto.'),
    // nombre_funcionalidad --> SEARCH
    Array('funcionalidad','nombre_funcionalidad','input',21,'Comprobar tamaño mínimo','min_size','SEARCH','nombre_funcionalidad_min_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',22,'Comprobar tamaño máximo','max_size','SEARCH','nombre_funcionalidad_max_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce como mucho 48 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',23,'Comprobar formato','format','SEARCH','nombre_funcionalidad_format_ko','El nombre de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ).'),
    Array('funcionalidad','nombre_funcionalidad','input',24,'Formato válido','valid','SEARCH',true,'Nombre funcionalidad correcto.'),

    // descrip_funcionalidad --> ADD
    Array('funcionalidad','descrip_funcionalidad','textarea',25,'Comprobar tamaño mínimo','min_size','ADD','descrip_funcionalidad_min_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',26,'Comprobar tamaño máximo','max_size','ADD','descrip_funcionalidad_max_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce como mucho 200 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',27,'Comprobar formato','format','ADD','descrip_funcionalidad_format_ko','La descripción de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ), espacio y signos de puntuación.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',28,'Formato válido','valid','ADD',true,'descripción de funcionalidad correcta.'),
    // descrip_funcionalidad --> EDIT
    Array('funcionalidad','descrip_funcionalidad','textarea',29,'Comprobar tamaño mínimo','min_size','EDIT','descrip_funcionalidad_min_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',30,'Comprobar tamaño máximo','max_size','EDIT','descrip_funcionalidad_max_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce como mucho 200 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',31,'Comprobar formato','format','EDIT','descrip_funcionalidad_format_ko','La descripción de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ), espacio y signos de puntuación.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',32,'Formato válido','valid','EDIT',true,'descripción de funcionalidad correcta.'),
    // descrip_funcionalidad --> SEARCH
    Array('funcionalidad','descrip_funcionalidad','textarea',33,'Comprobar tamaño mínimo','min_size','SEARCH','descrip_funcionalidad_min_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',34,'Comprobar tamaño máximo','max_size','SEARCH','descrip_funcionalidad_max_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce como mucho 200 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',35,'Comprobar formato','format','SEARCH','descrip_funcionalidad_format_ko','La descripción de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ), espacio y signos de puntuación.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',36,'Formato válido','valid','SEARCH',true,'descripción de funcionalidad correcta.'),
);

let funcionalidad_pruebas = 
Array(
    // id_funcionalidad --> ADD
    Array('funcionalidad','id_funcionalidad',1,1,'ADD',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'),
    Array('funcionalidad','id_funcionalidad',2,2,'ADD',{id_funcionalidad:'123456789012'},'id_funcionalidad_max_size_ko'),
    Array('funcionalidad','id_funcionalidad',3,3,'ADD',{id_funcionalidad:'abcd'},'id_funcionalidad_format_ko'),
    Array('funcionalidad','id_funcionalidad',4,4,'ADD',{id_funcionalidad:'123'},true),
    // id_funcionalidad --> EDIT
    Array('funcionalidad','id_funcionalidad',5,5,'EDIT',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'),
    Array('funcionalidad','id_funcionalidad',6,6,'EDIT',{id_funcionalidad:'123456789012'},'id_funcionalidad_max_size_ko'),
    Array('funcionalidad','id_funcionalidad',7,7,'EDIT',{id_funcionalidad:'abcd'},'id_funcionalidad_format_ko'),
    Array('funcionalidad','id_funcionalidad',8,8,'EDIT',{id_funcionalidad:'123'},true),
    // id_funcionalidad --> SEARCH
    Array('funcionalidad','id_funcionalidad',9,9,'SEARCH',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'),
    Array('funcionalidad','id_funcionalidad',10,10,'SEARCH',{id_funcionalidad:'123456789012'},'id_funcionalidad_max_size_ko'),
    Array('funcionalidad','id_funcionalidad',11,11,'SEARCH',{id_funcionalidad:'abcd'},'id_funcionalidad_format_ko'),
    Array('funcionalidad','id_funcionalidad',12,12,'SEARCH',{id_funcionalidad:'123'},true),

    // nombre_funcionalidad --> ADD
    Array('funcionalidad','nombre_funcionalidad',13,13,'ADD',{nombre_funcionalidad:'abcd'},'nombre_funcionalidad_min_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',14,14,'ADD',{nombre_funcionalidad:'a'.repeat(49)},'nombre_funcionalidad_max_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',15,15,'ADD',{nombre_funcionalidad:'ab-d23'},'nombre_funcionalidad_format_ko'),
    Array('funcionalidad','nombre_funcionalidad',16,16,'ADD',{nombre_funcionalidad:'nombreñ'},true),
    // nombre_funcionalidad --> EDIT
    Array('funcionalidad','nombre_funcionalidad',17,17,'EDIT',{nombre_funcionalidad:'abcd'},'nombre_funcionalidad_min_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',18,18,'EDIT',{nombre_funcionalidad:'a'.repeat(49)},'nombre_funcionalidad_max_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',19,19,'EDIT',{nombre_funcionalidad:'ab-d23'},'nombre_funcionalidad_format_ko'),
    Array('funcionalidad','nombre_funcionalidad',20,20,'EDIT',{nombre_funcionalidad:'nombreñ'},true),
    // nombre_funcionalidad --> SEARCH
    Array('funcionalidad','nombre_funcionalidad',21,21,'SEARCH',{nombre_funcionalidad:'abcd'},'nombre_funcionalidad_min_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',22,22,'SEARCH',{nombre_funcionalidad:'a'.repeat(49)},'nombre_funcionalidad_max_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',23,23,'SEARCH',{nombre_funcionalidad:'ab-d23'},'nombre_funcionalidad_format_ko'),
    Array('funcionalidad','nombre_funcionalidad',24,24,'SEARCH',{nombre_funcionalidad:'nombreñ'},true),

    // descrip_funcionalidad --> ADD
    Array('funcionalidad','descrip_funcionalidad',25,25,'ADD',{descrip_funcionalidad:'abcd'},'descrip_funcionalidad_min_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',26,26,'ADD',{descrip_funcionalidad:'a'.repeat(201)},'descrip_funcionalidad_max_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',27,27,'ADD',{descrip_funcionalidad:'funcion@lidad23'},'descrip_funcionalidad_format_ko'),
    Array('funcionalidad','descrip_funcionalidad',28,28,'ADD',{descrip_funcionalidad:'descrip.,; Descrip-ñ'},true),
    // descrip_funcionalidad --> EDIT
    Array('funcionalidad','descrip_funcionalidad',29,29,'EDIT',{descrip_funcionalidad:'abcd'},'descrip_funcionalidad_min_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',30,30,'EDIT',{descrip_funcionalidad:'a'.repeat(201)},'descrip_funcionalidad_max_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',31,31,'EDIT',{descrip_funcionalidad:'funcion@lidad23'},'descrip_funcionalidad_format_ko'),
    Array('funcionalidad','descrip_funcionalidad',32,32,'EDIT',{descrip_funcionalidad:'descrip.,; Descrip-ñ'},true),
    // descrip_funcionalidad --> SEARCH
    Array('funcionalidad','descrip_funcionalidad',33,33,'SEARCH',{descrip_funcionalidad:'abcd'},'descrip_funcionalidad_min_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',34,34,'SEARCH',{descrip_funcionalidad:'a'.repeat(201)},'descrip_funcionalidad_max_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',35,35,'SEARCH',{descrip_funcionalidad:'funcion@lidad23'},'descrip_funcionalidad_format_ko'),
    Array('funcionalidad','descrip_funcionalidad',36,36,'SEARCH',{descrip_funcionalidad:'descrip.,; Descrip-ñ'},true),
);
