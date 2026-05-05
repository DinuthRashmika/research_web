const fs = require('fs');

let c = fs.readFileSync('src/App.jsx', 'utf-8');

const replacements = [
    ['id="modules" className="py-32 bg-white relative overflow-hidden"', 'id="modules" className="py-32 bg-[#0a0a0a] relative overflow-hidden"'],
    ['bg-yellow-50 border border-yellow-200 shadow-sm', 'bg-[#18181b] border border-white/5 shadow-black/50'],
    ['text-primary-dark font-bold text-xs tracking-[0.2em] uppercase', 'text-yellow-500 font-bold text-xs tracking-[0.2em] uppercase'],
    ['text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight', 'text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight'],
    ['from-primary-dark to-yellow-500', 'from-yellow-400 to-yellow-600'],
    ['text-gray-500 text-xl font-medium max-w-2xl mx-auto', 'text-gray-400 text-xl font-medium max-w-2xl mx-auto'],
    ['shadow-2xl shadow-gray-300/50 border border-gray-100', 'shadow-2xl shadow-black/60 border border-white/5'],
    ['text-3xl font-black text-gray-900 leading-tight', 'text-3xl font-black text-white leading-tight'],
    ['text-gray-500 text-lg leading-relaxed font-medium', 'text-gray-400 text-lg leading-relaxed font-medium'],
    ['bg-gray-50 rounded-xl px-4 py-3 border border-gray-100', 'bg-[#111111] rounded-xl px-4 py-3 border border-white/5'],
    ['text-gray-700 font-medium text-sm', 'text-gray-300 font-medium text-sm'],
    ['bg-gradient-to-br from-red-50 to-orange-50 border border-red-100', 'bg-[#18181b] border border-white/10'],
    ['bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100', 'bg-[#18181b] border border-white/10'],
    ['bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100', 'bg-[#18181b] border border-white/10'],
    ['bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700', 'bg-[#18181b] border border-white/10']
];

for (const [oldStr, newStr] of replacements) {
    c = c.split(oldStr).join(newStr);
}

fs.writeFileSync('src/App.jsx', c, 'utf-8');
console.log('Done');
