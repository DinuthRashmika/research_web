const fs = require('fs');

let c = fs.readFileSync('src/App.jsx', 'utf-8');

const replacements = [
    // Documents Section
    ['id="documents" className="py-28 bg-white relative overflow-hidden"', 'id="documents" className="py-28 bg-[#0a0a0a] relative overflow-hidden"'],
    ['bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]', 'bg-[#18181b] rounded-[2rem] border border-white/5 shadow-xl shadow-black/50'],
    ['text-primary-dark font-black text-sm tracking-[0.25em] uppercase mb-3">Documents', 'text-yellow-500 font-black text-sm tracking-[0.25em] uppercase mb-3">Documents'],
    ['text-gray-900 leading-tight">Project files', 'text-white leading-tight">Project files'],
    ['bg-white border border-yellow-200 py-2.5 px-5 rounded-full flex', 'bg-[#27272a] border border-yellow-500/20 py-2.5 px-5 rounded-full flex'],
    ['text-gray-700 font-bold text-[11px]">Upload links', 'text-yellow-500 font-bold text-[11px]">Upload links'],
    ['border-b border-gray-100 pb-4 mb-4', 'border-b border-white/10 pb-4 mb-4'],
    ['border-b border-gray-50 last:border-0 hover:bg-gray-50/50', 'border-b border-white/5 last:border-0 hover:bg-[#111111]'],
    ['bg-yellow-50 flex items-center justify-center text-primary-dark font-black text-xs border border-yellow-100/50 shadow-sm group-hover:scale-105 group-hover:shadow-yellow-100', 'bg-[#27272a] flex items-center justify-center text-yellow-500 font-black text-xs border border-white/5 shadow-sm group-hover:scale-105 group-hover:shadow-yellow-500/20'],
    ['font-bold text-gray-900 text-[15px] group-hover:text-primary-dark', 'font-bold text-white text-[15px] group-hover:text-yellow-400'],
    ['bg-white border border-gray-200 py-2 px-5 rounded-full shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-yellow-300 hover:bg-yellow-50/30', 'bg-[#27272a] border border-white/10 py-2 px-5 rounded-full shadow-md hover:border-yellow-500/50 hover:bg-yellow-500/10'],
    ['text-gray-700 font-bold text-[11px] group-hover/btn:text-gray-900', 'text-gray-300 font-bold text-[11px] group-hover/btn:text-white'],
    ['bg-yellow-50 border border-yellow-200/60 py-2 px-5 rounded-full cursor-not-allowed', 'bg-yellow-500/10 border border-yellow-500/20 py-2 px-5 rounded-full cursor-not-allowed'],

    // Presentations Section
    ['id="presentations" className="py-28 bg-[#0d0d0d] relative overflow-hidden border-t border-gray-100"', 'id="presentations" className="py-28 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5"'],
    ['text-primary-dark font-black text-sm tracking-[0.25em] uppercase mb-3">Presentations', 'text-yellow-500 font-black text-sm tracking-[0.25em] uppercase mb-3">Presentations'],
    ['bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)]', 'bg-[#18181b] rounded-[2.5rem] border border-white/5 shadow-xl shadow-black/50'],
    ['bg-white rounded-[2rem] border border-gray-100 p-8 hover:border-yellow-300 hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)]', 'bg-[#111111] rounded-[2rem] border border-white/5 p-8 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10'],
    ['bg-yellow-50/80 flex items-center justify-center text-primary-dark font-black text-sm border border-yellow-100 shadow-sm', 'bg-[#27272a] flex items-center justify-center text-yellow-500 font-black text-sm border border-white/5 shadow-md'],
    ['bg-[#f8fafc] border border-gray-100 text-primary-dark font-bold text-[9px]', 'bg-[#27272a] border border-white/5 text-yellow-500 font-bold text-[9px]'],
    ['text-[22px] font-black text-gray-900 leading-[1.2] mb-4 whitespace-pre-line group-hover:text-primary-dark', 'text-[22px] font-black text-white leading-[1.2] mb-4 whitespace-pre-line group-hover:text-yellow-400'],
    ['border-t border-gray-100 pt-6 mt-auto', 'border-t border-white/10 pt-6 mt-auto'],
    ['bg-white border border-gray-200 py-3 px-6 rounded-full w-fit shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-yellow-300 hover:bg-yellow-50/30', 'bg-[#27272a] border border-white/10 py-3 px-6 rounded-full w-fit shadow-md hover:border-yellow-500/50 hover:bg-yellow-500/10'],
    ['text-gray-800 font-bold text-[12px] group-hover/btn:text-gray-900', 'text-gray-300 font-bold text-[12px] group-hover/btn:text-white'],

    // Team Section
    ['id="team" className="py-32 bg-white relative overflow-hidden"', 'id="team" className="py-32 bg-[#0a0a0a] relative overflow-hidden"'],
    ['bg-white border border-gray-200 shadow-sm mb-6', 'bg-[#18181b] border border-white/5 shadow-black/50 mb-6'],
    ['text-gray-600 font-bold text-xs tracking-[0.2em] uppercase">SLIIT', 'text-gray-400 font-bold text-xs tracking-[0.2em] uppercase">SLIIT'],
    ['bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40', 'bg-[#18181b] p-8 rounded-[2rem] border border-white/5 shadow-xl shadow-black/50'],
    ['bg-gradient-to-br from-primary/10 to-yellow-100/50 flex items-center justify-center mx-auto mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-yellow-100', 'bg-[#27272a] flex items-center justify-center mx-auto mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-white/5'],
    ['text-3xl font-black text-primary-dark tracking-tighter', 'text-3xl font-black text-yellow-500 tracking-tighter'],
    ['text-xl font-black text-gray-900 mb-2 leading-tight', 'text-xl font-black text-white mb-2 leading-tight'],
    ['text-primary-dark font-bold text-sm mb-4', 'text-yellow-500 font-bold text-sm mb-4'],
    ['bg-gray-50 border border-gray-100 text-gray-500', 'bg-[#111111] border border-white/5 text-gray-400'],
    ['bg-gray-50/50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40', 'bg-[#18181b] rounded-2xl p-6 border border-white/5 hover:bg-[#27272a] hover:shadow-xl hover:shadow-black/50'],
    ['bg-gray-200 mb-5 overflow-hidden border-2 border-white shadow-sm', 'bg-[#111111] mb-5 overflow-hidden border-2 border-white/10 shadow-sm'],
    ['text-2xl font-black text-gray-400', 'text-2xl font-black text-gray-500'],
    ['font-black text-lg text-gray-900 mb-1', 'font-black text-lg text-white mb-1'],
    ['bg-gradient-to-r from-transparent to-gray-200', 'bg-gradient-to-r from-transparent to-white/10'],
    ['bg-gradient-to-l from-transparent to-gray-200', 'bg-gradient-to-l from-transparent to-white/10'],
    ['text-primary-dark font-bold text-[10px] tracking-[0.2em] uppercase mb-3">Document Center', 'text-yellow-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-3">Document Center']
];

for (const [oldStr, newStr] of replacements) {
    c = c.split(oldStr).join(newStr);
}

fs.writeFileSync('src/App.jsx', c, 'utf-8');
console.log('Done');
