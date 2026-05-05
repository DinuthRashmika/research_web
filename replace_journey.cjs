const fs = require('fs');

let c = fs.readFileSync('src/App.jsx', 'utf-8');

const replacements = [
    ['className="py-28 relative overflow-hidden bg-white"', 'className="py-28 relative overflow-hidden bg-[#0a0a0a]"'],
    ['bg-gradient-to-br from-[#FFFBF0] via-white to-white', 'bg-[#111111]'],
    ['bg-primary/3 rounded-full', 'bg-yellow-500/5 rounded-full'],
    ['bg-yellow-50 border border-yellow-200 shadow-sm', 'bg-white/5 border border-white/10 shadow-black/50'],
    ['text-gray-900 leading-[1.1]', 'text-white leading-[1.1]'],
    ['bg-[#FAFAFA] rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100', 'bg-[#18181b] rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-black/50 border border-white/5'],
    ['bg-gradient-to-bl from-yellow-50 to-transparent', 'bg-gradient-to-bl from-yellow-500/5 to-transparent'],
    ['text-gray-900 mb-10', 'text-white mb-10'],
    ['font-black text-gray-900 text-xl', 'font-black text-white text-xl'],
    ['shadow-2xl shadow-gray-300/40', 'shadow-2xl shadow-black/50'],
    ['bg-[#FAFAFA] relative overflow-hidden', 'bg-[#0d0d0d] relative overflow-hidden'],
    ['bg-gradient-to-b from-white via-[#FFFBF0] to-white', 'bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0d0d0d]'],
    ['bg-primary/4 rounded-full', 'bg-yellow-500/5 rounded-full'],
    ['bg-white border border-yellow-200 shadow-sm', 'bg-white/5 border border-white/10 shadow-black/50'],
    ['shadow-xl shadow-gray-200/60', 'shadow-xl shadow-black/50']
];

for (const [oldStr, newStr] of replacements) {
    c = c.split(oldStr).join(newStr);
}

fs.writeFileSync('src/App.jsx', c, 'utf-8');
console.log('Done');
