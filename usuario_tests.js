let usuario_def_tests = Array(
    // CAMPO: dni (DNI estándar válido - 9 caracteres)

    // ACCIÓN: ADD
    Array('usuario', 'dni', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'dni_min_size_ko', 'Tamaño de DNI muy corto. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'dni_max_size_ko', 'Tamaño de DNI muy largo. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 3, 'letra dni valida', 'personalized', 'ADD', 'dni_persona_letra_incorrecta', 'La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('usuario', 'dni', 'input', 4, 'cumple formato', 'format', 'ADD', 'dni_format_ko', 'Formato de DNI inválido. Debe constar de 8 números y una letra final válida'),
    Array('usuario', 'dni', 'input', 5, 'es correcto', 'valid', 'ADD', true, 'DNI de usuario correcto'),

    // ACCIÓN: EDIT
    Array('usuario', 'dni', 'input', 6, 'cumple tamaño minimo', 'min_size', 'EDIT', 'dni_min_size_ko', 'Tamaño de DNI muy corto. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 7, 'cumple tamaño maximo', 'max_size', 'EDIT', 'dni_max_size_ko', 'Tamaño de DNI muy largo. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 8, 'letra dni valida', 'personalized', 'EDIT', 'dni_persona_letra_incorrecta', 'La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('usuario', 'dni', 'input', 9, 'cumple formato', 'format', 'EDIT', 'dni_format_ko', 'Formato de DNI inválido. Debe constar de 8 números y una letra final válida'),
    Array('usuario', 'dni', 'input', 10, 'es correcto', 'valid', 'EDIT', true, 'DNI de usuario correcto'),

    // ACCIÓN: SEARCH
    Array('usuario', 'dni', 'input', 11, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'dni_min_size_ko', 'Tamaño de DNI muy corto. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 12, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'dni_max_size_ko', 'Tamaño de DNI muy largo. Debe tener exactamente 9 caracteres'),
    Array('usuario', 'dni', 'input', 13, 'letra dni valida', 'personalized', 'SEARCH', 'dni_persona_letra_incorrecta', 'La letra del DNI introducida no es correcta o algún número está mal.'),
    Array('usuario', 'dni', 'input', 14, 'cumple formato', 'format', 'SEARCH', 'dni_format_ko', 'Formato de DNI inválido. Debe constar de 8 números y una letra final válida'),
    Array('usuario', 'dni', 'input', 15, 'es correcto', 'valid', 'SEARCH', true, 'DNI de usuario correcto'),


    // CAMPO: usuario (Alfabético sin ñ ni acentos, min 5 - max 45)

    // ACCIÓN: ADD
    Array('usuario', 'usuario', 'input', 16, 'cumple tamaño minimo', 'min_size', 'ADD', 'usuario_min_size_ko', 'Tamaño de nombre de usuario muy corto. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 17, 'cumple tamaño maximo', 'max_size', 'ADD', 'usuario_max_size_ko', 'Tamaño de nombre de usuario muy largo. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 18, 'cumple formato', 'format', 'ADD', 'usuario_format_ko', 'Formato de usuario inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'usuario', 'input', 19, 'es correcto', 'valid', 'ADD', true, 'Nombre de usuario correcto'),

    // ACCIÓN: EDIT
    Array('usuario', 'usuario', 'input', 20, 'cumple tamaño minimo', 'min_size', 'EDIT', 'usuario_min_size_ko', 'Tamaño de nombre de usuario muy corto. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 21, 'cumple tamaño maximo', 'max_size', 'EDIT', 'usuario_max_size_ko', 'Tamaño de nombre de usuario muy largo. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 22, 'cumple formato', 'format', 'EDIT', 'usuario_format_ko', 'Formato de usuario inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'usuario', 'input', 23, 'es correcto', 'valid', 'EDIT', true, 'Nombre de usuario correcto'),

    // ACCIÓN: SEARCH
    Array('usuario', 'usuario', 'input', 24, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'usuario_min_size_ko', 'Tamaño de nombre de usuario muy corto. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 25, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'usuario_max_size_ko', 'Tamaño de nombre de usuario muy largo. Debe estar entre 5 y 45 caracteres'),
    Array('usuario', 'usuario', 'input', 26, 'cumple formato', 'format', 'SEARCH', 'usuario_format_ko', 'Formato de usuario inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'usuario', 'input', 27, 'es correcto', 'valid', 'SEARCH', true, 'Nombre de usuario correcto'),


    // CAMPO: contrasena (Alfabético sin ñ ni acentos, min 8 - max 45)

    // ACCIÓN: ADD
    Array('usuario', 'contrasena', 'input', 28, 'cumple tamaño minimo', 'min_size', 'ADD', 'contrasena_min_size_ko', 'Tamaño de contraseña muy corto. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 29, 'cumple tamaño maximo', 'max_size', 'ADD', 'contrasena_max_size_ko', 'Tamaño de contraseña muy largo. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 30, 'cumple formato', 'format', 'ADD', 'contrasena_format_ko', 'Formato de contraseña inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'contrasena', 'input', 31, 'es correcto', 'valid', 'ADD', true, 'Contraseña correcta'),

    // ACCIÓN: EDIT
    Array('usuario', 'contrasena', 'input', 32, 'cumple tamaño minimo', 'min_size', 'EDIT', 'contrasena_min_size_ko', 'Tamaño de contraseña muy corto. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 33, 'cumple tamaño maximo', 'max_size', 'EDIT', 'contrasena_max_size_ko', 'Tamaño de contraseña muy largo. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 34, 'cumple formato', 'format', 'EDIT', 'contrasena_format_ko', 'Formato de contraseña inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'contrasena', 'input', 35, 'es correcto', 'valid', 'EDIT', true, 'Contraseña correcta'),

    // ACCIÓN: SEARCH
    Array('usuario', 'contrasena', 'input', 36, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'contrasena_min_size_ko', 'Tamaño de contraseña muy corto. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 37, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'contrasena_max_size_ko', 'Tamaño de contraseña muy largo. Debe estar entre 8 y 45 caracteres'),
    Array('usuario', 'contrasena', 'input', 38, 'cumple formato', 'format', 'SEARCH', 'contrasena_format_ko', 'Formato de contraseña inválido. Solo se admiten caracteres alfabéticos sin ñ ni acentos'),
    Array('usuario', 'contrasena', 'input', 39, 'es correcto', 'valid', 'SEARCH', true, 'Contraseña correcta'),


    // CAMPO: id_rol (Numérico, min 1 - max 11 dígitos)

    // ACCIÓN: ADD
    Array('usuario', 'id_rol', 'select', 40, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_rol_min_size_ko', 'Tamaño de id_rol muy corto. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 41, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_rol_max_size_ko', 'Tamaño de id_rol muy largo. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 42, 'cumple formato', 'format', 'ADD', 'id_rol_format_ko', 'Formato de id_rol inválido. Debe contener únicamente dígitos numéricos'),
    Array('usuario', 'id_rol', 'select', 43, 'es correcto', 'valid', 'ADD', true, 'id_rol correcto'),

    // ACCIÓN: EDIT
    Array('usuario', 'id_rol', 'select', 44, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_rol_min_size_ko', 'Tamaño de id_rol muy corto. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 45, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_rol_max_size_ko', 'Tamaño de id_rol muy largo. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 46, 'cumple formato', 'format', 'EDIT', 'id_rol_format_ko', 'Formato de id_rol inválido. Debe contener únicamente dígitos numéricos'),
    Array('usuario', 'id_rol', 'select', 47, 'es correcto', 'valid', 'EDIT', true, 'id_rol correcto'),

    // ACCIÓN: SEARCH
    Array('usuario', 'id_rol', 'select', 48, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'id_rol_min_size_ko', 'Tamaño de id_rol muy corto. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 49, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_rol_max_size_ko', 'Tamaño de id_rol muy largo. Debe tener entre 1 y 11 dígitos'),
    Array('usuario', 'id_rol', 'select', 50, 'cumple formato', 'format', 'SEARCH', 'id_rol_format_ko', 'Formato de id_rol inválido. Debe contener únicamente dígitos numéricos'),
    Array('usuario', 'id_rol', 'select', 51, 'es correcto', 'valid', 'SEARCH', true, 'id_rol correcto')
);

let usuario_pruebas = Array(
    // CAMPO: dni

    // ACCIÓN: ADD
    Array('usuario', 'dni', 1, 1, 'ADD', {dni: '12345678'}, 'dni_min_size_ko'), 
    Array('usuario', 'dni', 2, 2, 'ADD', {dni: '1234567890'}, 'dni_max_size_ko'), 
    Array('usuario', 'dni', 3, 3, 'ADD', {dni: '12345678A'}, 'dni_persona_letra_incorrecta'), // Fallo personalizado: Letra errónea
    Array('usuario', 'dni', 4, 4, 'ADD', {dni: '123456789'}, 'dni_format_ko'),                // Fallo formato: Sin letra
    Array('usuario', 'dni', 5, 5, 'ADD', {dni: '12345678Z'}, true), 

    // ACCIÓN: EDIT
    Array('usuario', 'dni', 6, 6, 'EDIT', {dni: '12345678'}, 'dni_min_size_ko'),
    Array('usuario', 'dni', 7, 7, 'EDIT', {dni: '1234567890'}, 'dni_max_size_ko'),
    Array('usuario', 'dni', 8, 8, 'EDIT', {dni: '12345678A'}, 'dni_persona_letra_incorrecta'), // Fallo personalizado: Letra errónea
    Array('usuario', 'dni', 9, 9, 'EDIT', {dni: '123456789'}, 'dni_format_ko'),                // Fallo formato: Sin letra
    Array('usuario', 'dni', 10, 10, 'EDIT', {dni: '12345678Z'}, true),

    // ACCIÓN: SEARCH
    Array('usuario', 'dni', 11, 11, 'SEARCH', {dni: '12345678'}, 'dni_min_size_ko'),
    Array('usuario', 'dni', 12, 12, 'SEARCH', {dni: '1234567890'}, 'dni_max_size_ko'),
    Array('usuario', 'dni', 13, 13, 'SEARCH', {dni: '12345678A'}, 'dni_persona_letra_incorrecta'), // Fallo personalizado: Letra errónea
    Array('usuario', 'dni', 14, 14, 'SEARCH', {dni: '123456789'}, 'dni_format_ko'),                // Fallo formato: Sin letra
    Array('usuario', 'dni', 15, 15, 'SEARCH', {dni: '12345678Z'}, true),

    // CAMPO: usuario

    // ACCIÓN: ADD
    Array('usuario', 'usuario', 16, 16, 'ADD', {usuario: 'user'}, 'usuario_min_size_ko'),
    Array('usuario', 'usuario', 17, 17, 'ADD', {usuario: 'a'.repeat(46)}, 'usuario_max_size_ko'),
    Array('usuario', 'usuario', 18, 18, 'ADD', {usuario: 'usuario_ñú7'}, 'usuario_format_ko'),
    Array('usuario', 'usuario', 19, 19, 'ADD', {usuario: 'adminuser'}, true),

    // ACCIÓN: EDIT
    Array('usuario', 'usuario', 20, 20, 'EDIT', {usuario: 'user'}, 'usuario_min_size_ko'),
    Array('usuario', 'usuario', 21, 21, 'EDIT', {usuario: 'a'.repeat(46)}, 'usuario_max_size_ko'),
    Array('usuario', 'usuario', 22, 22, 'EDIT', {usuario: 'usuario_ñú7'}, 'usuario_format_ko'),
    Array('usuario', 'usuario', 23, 23, 'EDIT', {usuario: 'adminuser'}, true),

    // ACCIÓN: SEARCH
    Array('usuario', 'usuario', 24, 24, 'SEARCH', {usuario: 'user'}, 'usuario_min_size_ko'),
    Array('usuario', 'usuario', 25, 25, 'SEARCH', {usuario: 'a'.repeat(46)}, 'usuario_max_size_ko'),
    Array('usuario', 'usuario', 26, 26, 'SEARCH', {usuario: 'usuario_ñú7'}, 'usuario_format_ko'),
    Array('usuario', 'usuario', 27, 27, 'SEARCH', {usuario: 'adminuser'}, true),


    // CAMPO: contrasena

    // ACCIÓN: ADD
    Array('usuario', 'contrasena', 28, 28, 'ADD', {contrasena: 'contras'}, 'contrasena_min_size_ko'),
    Array('usuario', 'contrasena', 29, 29, 'ADD', {contrasena: 'a'.repeat(46)}, 'contrasena_max_size_ko'),
    Array('usuario', 'contrasena', 30, 30, 'ADD', {contrasena: 'contraséñA9'}, 'contrasena_format_ko'),
    Array('usuario', 'contrasena', 31, 31, 'ADD', {contrasena: 'passwordsegura'}, true),

    // ACCIÓN: EDIT
    Array('usuario', 'contrasena', 32, 32, 'EDIT', {contrasena: 'contras'}, 'contrasena_min_size_ko'),
    Array('usuario', 'contrasena', 33, 33, 'EDIT', {contrasena: 'a'.repeat(46)}, 'contrasena_max_size_ko'),
    Array('usuario', 'contrasena', 34, 34, 'EDIT', {contrasena: 'contraséñA9'}, 'contrasena_format_ko'),
    Array('usuario', 'contrasena', 35, 35, 'EDIT', {contrasena: 'passwordsegura'}, true),

    // ACCIÓN: SEARCH
    Array('usuario', 'contrasena', 36, 36, 'SEARCH', {contrasena: 'contras'}, 'contrasena_min_size_ko'),
    Array('usuario', 'contrasena', 37, 37, 'SEARCH', {contrasena: 'a'.repeat(46)}, 'contrasena_max_size_ko'),
    Array('usuario', 'contrasena', 38, 38, 'SEARCH', {contrasena: 'contraséñA9'}, 'contrasena_format_ko'),
    Array('usuario', 'contrasena', 39, 39, 'SEARCH', {contrasena: 'passwordsegura'}, true),


    // CAMPO: id_rol

    // ACCIÓN: ADD
    Array('usuario', 'id_rol', 40, 40, 'ADD', {id_rol: ''}, 'id_rol_min_size_ko'),
    Array('usuario', 'id_rol', 41, 41, 'ADD', {id_rol: '123456789012'}, 'id_rol_max_size_ko'),
    Array('usuario', 'id_rol', 42, 42, 'ADD', {id_rol: 'letras'}, 'id_rol_format_ko'),
    Array('usuario', 'id_rol', 43, 43, 'ADD', {id_rol: '1'}, true),

    // ACCIÓN: EDIT
    Array('usuario', 'id_rol', 44, 44, 'EDIT', {id_rol: ''}, 'id_rol_min_size_ko'),
    Array('usuario', 'id_rol', 45, 45, 'EDIT', {id_rol: '123456789012'}, 'id_rol_max_size_ko'),
    Array('usuario', 'id_rol', 46, 46, 'EDIT', {id_rol: 'letras'}, 'id_rol_format_ko'),
    Array('usuario', 'id_rol', 47, 47, 'EDIT', {id_rol: '1'}, true),

    // ACCIÓN: SEARCH
    Array('usuario', 'id_rol', 48, 48, 'SEARCH', {id_rol: ''}, 'id_rol_min_size_ko'),
    Array('usuario', 'id_rol', 49, 49, 'SEARCH', {id_rol: '123456789012'}, 'id_rol_max_size_ko'),
    Array('usuario', 'id_rol', 50, 50, 'SEARCH', {id_rol: 'letras'}, 'id_rol_format_ko'),
    Array('usuario', 'id_rol', 51, 51, 'SEARCH', {id_rol: '1'}, true)
);
