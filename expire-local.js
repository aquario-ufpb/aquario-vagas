const fs = require('fs');
const path = require('path');

const base = path.join('centro-de-informatica');

const getTodaySaoPaulo = () => {
  const now = new Date();
  const sp = new Date(
    now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })
  );
  sp.setHours(0, 0, 0, 0);
  return sp;
};

const parsePrazo = (s) => {
  if (typeof s !== 'string') return null;
  const parts = s.split('/');
  if (parts.length !== 3) return null;
  const [dia, mes, ano] = parts.map(Number);
  if (!dia || !mes || !ano) return null;
  const d = new Date(ano, mes - 1, dia);
  if (isNaN(d.getTime())) return null;
  d.setHours(0, 0, 0, 0);
  return d;
};

const today = getTodaySaoPaulo();
let removed = 0;

console.log('Data de hoje (SP):', today.toLocaleDateString('pt-BR'));
console.log('Lendo pasta:', base);

if (fs.existsSync(base)) {
  for (const f of fs.readdirSync(base)) {
    if (!f.endsWith('.json')) continue;

    const p = path.join(base, f);

    try {
      const data = JSON.parse(fs.readFileSync(p, 'utf8'));
      const prazo = parsePrazo(data.prazo);

      console.log(`Arquivo: ${f} | Prazo: ${data.prazo}`);

      if (prazo && prazo < today) {
        fs.unlinkSync(p);
        removed++;
        console.log('✅ REMOVIDO:', f);
      } else {
        console.log('⏳ AINDA VÁLIDO:', f);
      }
    } catch (e) {
      console.warn('⚠️ JSON inválido, ignorado:', f);
    }
  }
} else {
  console.log('❌ Pasta não encontrada:', base);
}

if (removed === 0) {
  console.log('⚠️ Nenhuma vaga expirada foi removida.');
} else {
  console.log(`✅ Total removido: ${removed}`);
}
