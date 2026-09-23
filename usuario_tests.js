let usuario_def_tests = Array(  
    // CAMPO: dni (DNI estándar válido - Exactamente 9 caracteres)
    // ACCIÓN: ADD
    Array('usuario', 'dni', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'dni_min_size_ko', 'Tamaño de DNI muy corto. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'dni_max_size_ko', 'Tamaño de DNI muy largo. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 3, 'cumple formato', 'format', 'ADD', 'dni_format_ko', 'Formato de DNI inválido. Debe constar de 8 números y una letra final válida'),
    Array('usuario', 'dni', 'input', 4, 'es correcto', 'valid', 'ADD', true, 'DNI de usuario correcto'),

    // ACCIÓN: EDIT
    Array('usuario', 'dni', 'input', 5, 'cumple tamaño minimo', 'min_size', 'EDIT', 'dni_min_size_ko', 'Tamaño de DNI muy corto. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 6, 'cumple tamaño maximo', 'max_size', 'EDIT', 'dni_max_size_ko', 'Tamaño de DNI muy largo. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 7, 'cumple formato', 'format', 'EDIT', 'dni_format_ko', 'Formato de DNI inválido. Debe constar de 8 números y una letra final válida'),
    Array('usuario', 'dni', 'input', 8, 'es correcto', 'valid', 'EDIT', true, 'DNI de usuario correcto'),

    // CAMPO: usuario (Alfabético sin ñ ni acentos, min 5 - max 45)
    // ACCIÓN: ADD
    Array('usuario', 'usuario', 'input', 9, 'cumple tamaño minimo', 'min_size', 'ADD', 'usuario_min_size_ko', 'Tamaño de nombre de usuario muy corto. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 10, 'cumple tamaño maximo', 'max_size', 'ADD', 'usuario_max_size_ko', 'Tamaño de nombre de usuario muy largo. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 11, 'cumple formato' , 'format', 'ADD', 'usuario_format_ko', 'Formato de usuario inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'usuario', 'input', 12, 'es correcto', 'valid', 'ADD', true, 'Nombre de usuario correcto'),
    // ACCIÓN: EDIT
    Array('usuario', 'usuario', 'input', 13, 'cumple tamaño minimo', 'min_size', 'EDIT', 'usuario_min_size_ko', 'Tamaño de nombre de usuario muy corto. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 14, 'cumple tamaño maximo', 'max_size', 'EDIT', 'usuario_max_size_ko', 'Tamaño de nombre de usuario muy largo. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 15, 'cumple formato', 'format', 'EDIT', 'usuario_format_ko', 'Formato de usuario inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'usuario', 'input', 16, 'es correcto', 'valid', 'EDIT', true, 'Nombre de usuario correcto'),

    // CAMPO: contrasena (Alfabético sin ñ ni acentos, min 8 - max 45)
     // ACCIÓN: ADD
    Array('usuario', 'contrasena', 'input', 17, 'cumple tamaño minimo', 'min_size', 'ADD', 'contrasena_min_size_ko', 'Tamaño de contraseña muy corto. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 18, 'cumple tamaño maximo', 'max_size', 'ADD', 'contrasena_max_size_ko', 'Tamaño de contraseña muy largo. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 19, 'cumple formato', 'format', 'ADD', 'contrasena_format_ko', 'Formato de contraseña inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'contrasena', 'input', 20, 'es correcto', 'valid', 'ADD', true, 'Contraseña correcta'),

    // ACCIÓN: EDIT
    Array('usuario', 'contrasena', 'input', 21, 'cumple tamaño minimo', 'min_size', 'EDIT', 'contrasena_min_size_ko', 'Tamaño de contraseña muy corto. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 22, 'cumple tamaño maximo', 'max_size', 'EDIT', 'contrasena_max_size_ko', 'Tamaño de contraseña muy largo. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 23, 'cumple formato', 'format', 'EDIT', 'contrasena_format_ko', 'Formato de contraseña inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'contrasena', 'input', 24, 'es correcto', 'valid', 'EDIT', true, 'Contraseña correcta'),

    // CAMPO: id_rol (Numérico, min 1 - max 11 dígitos)  //NOTA: Le puse SELECT porque al ser una FK el id_rol tiene que existir
    // ACCIÓN: ADD
    Array('usuario', 'id_rol', 'select', 25, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_rol_min_size_ko', 'Tamaño de id_rol muy corto. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 26, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_rol_max_size_ko', 'Tamaño de id_rol muy largo. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 27, 'cumple formato', 'format', 'ADD', 'id_rol_format_ko', 'Formato de id_rol inválido. Debe contener únicamente dígitos numéricos'),
    Array('usuario', 'id_rol', 'select', 28, 'es correcto', 'valid', 'ADD', true, 'id_rol correcto'),

    // ACCIÓN: EDIT
    Array('usuario', 'id_rol', 'select', 29, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_rol_min_size_ko', 'Tamaño de id_rol muy corto. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 30, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_rol_max_size_ko', 'Tamaño de id_rol muy largo. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 31, 'cumple formato', 'format', 'EDIT', 'id_rol_format_ko', 'Formato de id_rol inválido. Debe contener únicamente dígitos numéricos'),
    Array('usuario', 'id_rol', 'select', 32, 'es correcto', 'valid', 'EDIT', true, 'id_rol correcto')
);

let usuario_pruebas = Array(
    // CAMPO: dni
    // ACCIÓN: ADD
    Array('usuario', 'dni', 1, 1, 'ADD', {dni: '12345678'}, 'dni_min_size_ko'),       
    Array('usuario', 'dni', 2, 2, 'ADD', {dni: '1234567890'}, 'dni_max_size_ko'),      
    Array('usuario', 'dni', 3, 3, 'ADD', {dni: '12345678A'}, 'dni_format_ko'),        // Fallo formato: Letra errónea
    Array('usuario', 'dni', 3, 4, 'ADD', {dni: '123456789'}, 'dni_format_ko'),        // Fallo formato: Sin letra
    Array('usuario', 'dni', 4, 5, 'ADD', {dni: '12345678Z'}, true),                   

    // ACCIÓN: EDIT
    Array('usuario', 'dni', 5, 6, 'EDIT', {dni: '12345678'}, 'dni_min_size_ko'),
    Array('usuario', 'dni', 6, 7, 'EDIT', {dni: '1234567890'}, 'dni_max_size_ko'),
    Array('usuario', 'dni', 7, 8, 'EDIT', {dni: '12345678A'}, 'dni_format_ko'),       // Fallo formato: Letra errónea
    Array('usuario', 'dni', 7, 9, 'EDIT', {dni: '123456789'}, 'dni_format_ko'),       // Fallo formato: Sin letra
    Array('usuario', 'dni', 8, 10, 'EDIT', {dni: '12345678Z'}, true),

    // CAMPO: usuario
    // ACCIÓN: ADD
    Array('usuario', 'usuario', 9, 11, 'ADD', {usuario: 'user'}, 'usuario_min_size_ko'),
    Array('usuario', 'usuario', 10, 12, 'ADD', {usuario: 'a'.repeat(46)}, 'usuario_max_size_ko'),
    Array('usuario', 'usuario', 11, 13, 'ADD', {usuario: 'usuario_ñú7'}, 'usuario_format_ko'), // Fallo formato: 'ñ', acento o número
    Array('usuario', 'usuario', 12, 14, 'ADD', {usuario: 'adminuser'}, true),

    // ACCIÓN: EDIT
    Array('usuario', 'usuario', 13, 15, 'EDIT', {usuario: 'user'}, 'usuario_min_size_ko'),
    Array('usuario', 'usuario', 14, 16, 'EDIT', {usuario: 'a'.repeat(46)}, 'usuario_max_size_ko'),
    Array('usuario', 'usuario', 15, 17, 'EDIT', {usuario: 'usuario_ñú7'}, 'usuario_format_ko'), // Fallo formato: 'ñ', acento o número
    Array('usuario', 'usuario', 16, 18, 'EDIT', {usuario: 'adminuser'}, true),

    // CAMPO: contrasena
    // ACCIÓN: ADD
    Array('usuario', 'contrasena', 17, 19, 'ADD', {contrasena: 'contras'}, 'contrasena_min_size_ko'),
    Array('usuario', 'contrasena', 18, 20, 'ADD', {contrasena: 'a'.repeat(46)}, 'contrasena_max_size_ko'),
    Array('usuario', 'contrasena', 19, 21, 'ADD', {contrasena: 'contraséñA9'}, 'contrasena_format_ko'), // Fallo formato: 'ñ', acento o número
    Array('usuario', 'contrasena', 20, 22, 'ADD', {contrasena: 'passwordsegura'}, true),

    // ACCIÓN: EDIT
    Array('usuario', 'contrasena', 21, 23, 'EDIT', {contrasena: 'contras'}, 'contrasena_min_size_ko'),
    Array('usuario', 'contrasena', 22, 24, 'EDIT', {contrasena: 'a'.repeat(46)}, 'contrasena_max_size_ko'),
    Array('usuario', 'contrasena', 23, 25, 'EDIT', {contrasena: 'contraséñA9'}, 'contrasena_format_ko'), // Fallo formato: 'ñ', acento o número
    Array('usuario', 'contrasena', 24, 26, 'EDIT', {contrasena: 'passwordsegura'}, true),

    // CAMPO: id_rol
    // ACCIÓN: ADD
    Array('usuario', 'id_rol', 25, 27, 'ADD', {id_rol: ''}, 'id_rol_min_size_ko'),
    Array('usuario', 'id_rol', 26, 28, 'ADD', {id_rol: '123456789012'}, 'id_rol_max_size_ko'),
    Array('usuario', 'id_rol', 27, 29, 'ADD', {id_rol: 'letras'}, 'id_rol_format_ko'), // Fallo formato: uso de letras
    Array('usuario', 'id_rol', 28, 30, 'ADD', {id_rol: '1'}, true),

    // ACCIÓN: EDIT
    Array('usuario', 'id_rol', 29, 31, 'EDIT', {id_rol: ''}, 'id_rol_min_size_ko'),
    Array('usuario', 'id_rol', 30, 32, 'EDIT', {id_rol: '123456789012'}, 'id_rol_max_size_ko'),
    Array('usuario', 'id_rol', 31, 33, 'EDIT', {id_rol: 'letras'}, 'id_rol_format_ko'), // Fallo formato: uso de letras
    Array('usuario', 'id_rol', 32, 34, 'EDIT', {id_rol: '1'}, true)
);
