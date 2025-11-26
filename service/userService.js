export async function initializeUsuarioTable(db) {
  try {
    await db.execAsync('DROP TABLE IF EXISTS usuarios;');
    console.log('[DB] Tabela de usuários removida (se existia).');
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL
      );
    `);

    console.log('[DB] Tabela de usuários pronta.');
  } catch (error) {
    console.error('Erro ao criar tabela de usuários:', error);
  }
}

// Função para inserir um user novo
export async function insertUsuario(db, usuario) {
  const result = await db.runAsync(
    `INSERT INTO usuarios (nome, email, senha)
     VALUES (?, ?, ?);`,
    usuario.nome,
    usuario.email,
    usuario.senha
  );

  console.log('Usuário inserido com ID:', result.lastInsertRowId);
  console.log(`Dados do usuário:`, usuario.nome);
  console.log(`Dados do usuário:`, usuario.email);
  console.log(`Dados do usuário:`, usuario.senha);

  return result.lastInsertRowId;
}

// função para buscar todos os users
export async function getUsuarios(db) {
  const rows = await db.getAllAsync(`SELECT * FROM usuarios;`);

  return {
    items: rows
  };
}

// função para buscar user por id
export async function getUsuarioById(db, id) {
  const rows = await db.getAllAsync(
    `SELECT * FROM usuarios WHERE id = ?;`,
    id
  );

  return {
    item: rows.length > 0 ? rows[0] : null
  };
}

// função para deletar um user por id
export async function deleteUsuario(db, id) {
  const result = await db.runAsync(
    `DELETE FROM usuarios WHERE id = ?;`,
    id
  );

  return {
    changes: result.changes
  };
}