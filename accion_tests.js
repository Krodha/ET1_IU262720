let accion_def_tests = 
Array(
    // id_accion --> ADD
    Array('accion','id_accion','input',1,'Comprobar tamaño mínimo','min_size','ADD','id_accion_min_size_ko','El id de la accion tiene una longitud inválida. Introduce por lo menos 1 dígito.'),
    Array('accion','id_accion','input',2,'Comprobar tamaño máximo','max_size','ADD','id_accion_max_size_ko','El id de la accion tiene una longitud inválida. Introduce como mucho 11 dígitos.'),
    Array('accion','id_accion','input',3,'Comprobar formato','format','ADD','id_accion_format_ko','El id de la accion tiene un formato inválido. Sólo se pueden introducir los dígitos del 0 al 9.'),
    Array('accion','id_accion','input',4,'Formato válido','valid','ADD',true,'id accion correcto.'),
    // id_accion --> EDIT
    Array('accion','id_accion','input',5,'Comprobar tamaño mínimo','min_size','EDIT','id_accion_min_size_ko','El id de la accion tiene una longitud inválida. Introduce por lo menos 1 dígito.'),
    Array('accion','id_accion','input',6,'Comprobar tamaño máximo','max_size','EDIT','id_accion_max_size_ko','El id de la accion tiene una longitud inválida. Introduce como mucho 11 dígitos.'),
    Array('accion','id_accion','input',7,'Comprobar formato','format','EDIT','id_accion_format_ko','El id de la accion tiene un formato inválido. Sólo se pueden introducir los dígitos del 0 al 9.'),
    Array('accion','id_accion','input',8,'Formato válido','valid','EDIT',true,'id accion correcto.'),
    // id_accion --> SEARCH
    Array('accion','id_accion','input',9,'Comprobar tamaño mínimo','min_size','SEARCH','id_accion_min_size_ko','El id de la accion tiene una longitud inválida. Introduce por lo menos 1 dígito.'),
    Array('accion','id_accion','input',10,'Comprobar tamaño máximo','max_size','SEARCH','id_accion_max_size_ko','El id de la accion tiene una longitud inválida. Introduce como mucho 11 dígitos.'),
    Array('accion','id_accion','input',11,'Comprobar formato','format','SEARCH','id_accion_format_ko','El id de la accion tiene un formato inválido. Sólo se pueden introducir los dígitos del 0 al 9.'),
    Array('accion','id_accion','input',12,'Formato válido','valid','SEARCH',true,'id accion correcto.'),

    // nombre_accion --> ADD
    Array('accion','nombre_accion','input',13,'Comprobar tamaño mínimo','min_size','ADD','nombre_accion_min_size_ko','El nombre de la accion tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('accion','nombre_accion','input',14,'Comprobar tamaño máximo','max_size','ADD','nombre_accion_max_size_ko','El nombre de la accion tiene una longitud inválida. Introduce como mucho 48 caracteres.'),
    Array('accion','nombre_accion','input',15,'Comprobar formato','format','ADD','nombre_accion_format_ko','El nombre de la accion tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ).'),
    Array('accion','nombre_accion','input',16,'Formato válido','valid','ADD',true,'Nombre accion correcto.'),
    // nombre_accion --> EDIT
    Array('accion','nombre_accion','input',17,'Comprobar tamaño mínimo','min_size','EDIT','nombre_accion_min_size_ko','El nombre de la accion tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('accion','nombre_accion','input',18,'Comprobar tamaño máximo','max_size','EDIT','nombre_accion_max_size_ko','El nombre de la accion tiene una longitud inválida. Introduce como mucho 48 caracteres.'),
    Array('accion','nombre_accion','input',19,'Comprobar formato','format','EDIT','nombre_accion_format_ko','El nombre de la accion tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ).'),
    Array('accion','nombre_accion','input',20,'Formato válido','valid','EDIT',true,'Nombre accion correcto.'),
    // nombre_accion --> SEARCH
    Array('accion','nombre_accion','input',21,'Comprobar tamaño mínimo','min_size','SEARCH','nombre_accion_min_size_ko','El nombre de la accion tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('accion','nombre_accion','input',22,'Comprobar tamaño máximo','max_size','SEARCH','nombre_accion_max_size_ko','El nombre de la accion tiene una longitud inválida. Introduce como mucho 48 caracteres.'),
    Array('accion','nombre_accion','input',23,'Comprobar formato','format','SEARCH','nombre_accion_format_ko','El nombre de la accion tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ).'),
    Array('accion','nombre_accion','input',24,'Formato válido','valid','SEARCH',true,'Nombre accion correcto.'),

    // descrip_accion --> ADD
    Array('accion','descrip_accion','textarea',25,'Comprobar tamaño mínimo','min_size','ADD','descrip_accion_min_size_ko','La descripción de la accion tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('accion','descrip_accion','textarea',26,'Comprobar tamaño máximo','max_size','ADD','descrip_accion_max_size_ko','La descripción de la accion tiene una longitud inválida. Introduce como mucho 200 caracteres.'),
    Array('accion','descrip_accion','textarea',27,'Comprobar formato','format','ADD','descrip_accion_format_ko','La descripción de la accion tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ), espacio y signos de puntuación.'),
    Array('accion','descrip_accion','textarea',28,'Formato válido','valid','ADD',true,'descripción de accion correcta.'),
    // descrip_accion --> EDIT
    Array('accion','descrip_accion','textarea',29,'Comprobar tamaño mínimo','min_size','EDIT','descrip_accion_min_size_ko','La descripción de la accion tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('accion','descrip_accion','textarea',30,'Comprobar tamaño máximo','max_size','EDIT','descrip_accion_max_size_ko','La descripción de la accion tiene una longitud inválida. Introduce como mucho 200 caracteres.'),
    Array('accion','descrip_accion','textarea',31,'Comprobar formato','format','EDIT','descrip_accion_format_ko','La descripción de la accion tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ), espacio y signos de puntuación.'),
    Array('accion','descrip_accion','textarea',32,'Formato válido','valid','EDIT',true,'descripción de accion correcta.'),
    // descrip_accion --> SEARCH
    Array('accion','descrip_accion','textarea',33,'Comprobar tamaño mínimo','min_size','SEARCH','descrip_accion_min_size_ko','La descripción de la accion tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('accion','descrip_accion','textarea',34,'Comprobar tamaño máximo','max_size','SEARCH','descrip_accion_max_size_ko','La descripción de la accion tiene una longitud inválida. Introduce como mucho 200 caracteres.'),
    Array('accion','descrip_accion','textarea',35,'Comprobar formato','format','SEARCH','descrip_accion_format_ko','La descripción de la accion tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ), espacio y signos de puntuación.'),
    Array('accion','descrip_accion','textarea',36,'Formato válido','valid','SEARCH',true,'descripción de accion correcta.'),
);

let accion_pruebas = 
Array(
    // id_accion --> ADD
    Array('accion','id_accion',1,1,'ADD',{id_accion:''},'id_accion_min_size_ko'),
    Array('accion','id_accion',2,2,'ADD',{id_accion:'123456789012'},'id_accion_max_size_ko'),
    Array('accion','id_accion',3,3,'ADD',{id_accion:'abcd'},'id_accion_format_ko'),
    Array('accion','id_accion',4,4,'ADD',{id_accion:'123'},true),
    // id_accion --> EDIT
    Array('accion','id_accion',5,5,'EDIT',{id_accion:''},'id_accion_min_size_ko'),
    Array('accion','id_accion',6,6,'EDIT',{id_accion:'123456789012'},'id_accion_max_size_ko'),
    Array('accion','id_accion',7,7,'EDIT',{id_accion:'abcd'},'id_accion_format_ko'),
    Array('accion','id_accion',8,8,'EDIT',{id_accion:'123'},true),
    // id_accion --> SEARCH
    Array('accion','id_accion',9,9,'SEARCH',{id_accion:''},'id_accion_min_size_ko'),
    Array('accion','id_accion',10,10,'SEARCH',{id_accion:'123456789012'},'id_accion_max_size_ko'),
    Array('accion','id_accion',11,11,'SEARCH',{id_accion:'abcd'},'id_accion_format_ko'),
    Array('accion','id_accion',12,12,'SEARCH',{id_accion:'123'},true),

    // nombre_accion --> ADD
    Array('accion','nombre_accion',13,13,'ADD',{nombre_accion:'abcd'},'nombre_accion_min_size_ko'),
    Array('accion','nombre_accion',14,14,'ADD',{nombre_accion:'a'.repeat(49)},'nombre_accion_max_size_ko'),
    Array('accion','nombre_accion',15,15,'ADD',{nombre_accion:'ab-d23'},'nombre_accion_format_ko'),
    Array('accion','nombre_accion',16,16,'ADD',{nombre_accion:'nombreñ'},true),
    // nombre_accion --> EDIT
    Array('accion','nombre_accion',17,17,'EDIT',{nombre_accion:'abcd'},'nombre_accion_min_size_ko'),
    Array('accion','nombre_accion',18,18,'EDIT',{nombre_accion:'a'.repeat(49)},'nombre_accion_max_size_ko'),
    Array('accion','nombre_accion',19,19,'EDIT',{nombre_accion:'ab-d23'},'nombre_accion_format_ko'),
    Array('accion','nombre_accion',20,20,'EDIT',{nombre_accion:'nombreñ'},true),
    // nombre_accion --> SEARCH
    Array('accion','nombre_accion',21,21,'SEARCH',{nombre_accion:'abcd'},'nombre_accion_min_size_ko'),
    Array('accion','nombre_accion',22,22,'SEARCH',{nombre_accion:'a'.repeat(49)},'nombre_accion_max_size_ko'),
    Array('accion','nombre_accion',23,23,'SEARCH',{nombre_accion:'ab-d23'},'nombre_accion_format_ko'),
    Array('accion','nombre_accion',24,24,'SEARCH',{nombre_accion:'nombreñ'},true),

    // descrip_accion --> ADD
    Array('accion','descrip_accion',25,25,'ADD',{descrip_accion:'abcd'},'descrip_accion_min_size_ko'),
    Array('accion','descrip_accion',26,26,'ADD',{descrip_accion:'a'.repeat(201)},'descrip_accion_max_size_ko'),
    Array('accion','descrip_accion',27,27,'ADD',{descrip_accion:'funcion@lidad23'},'descrip_accion_format_ko'),
    Array('accion','descrip_accion',28,28,'ADD',{descrip_accion:'descrip.,; Descrip-ñ'},true),
    // descrip_accion --> EDIT
    Array('accion','descrip_accion',29,29,'EDIT',{descrip_accion:'abcd'},'descrip_accion_min_size_ko'),
    Array('accion','descrip_accion',30,30,'EDIT',{descrip_accion:'a'.repeat(201)},'descrip_accion_max_size_ko'),
    Array('accion','descrip_accion',31,31,'EDIT',{descrip_accion:'funcion@lidad23'},'descrip_accion_format_ko'),
    Array('accion','descrip_accion',32,32,'EDIT',{descrip_accion:'descrip.,; Descrip-ñ'},true),
    // descrip_accion --> SEARCH
    Array('accion','descrip_accion',33,33,'SEARCH',{descrip_accion:'abcd'},'descrip_accion_min_size_ko'),
    Array('accion','descrip_accion',34,34,'SEARCH',{descrip_accion:'a'.repeat(201)},'descrip_accion_max_size_ko'),
    Array('accion','descrip_accion',35,35,'SEARCH',{descrip_accion:'funcion@lidad23'},'descrip_accion_format_ko'),
    Array('accion','descrip_accion',36,36,'SEARCH',{descrip_accion:'descrip.,; Descrip-ñ'},true),
);
