const sass = require('sass');
const fs = require('fs');

let result = sass.compile('./src/theme.scss', {
    style: 'compressed',
    sourceMap: false
});

fs.writeFileSync('./dist/theme.css', result.css);
fs.writeFileSync('./dist/theme.js', `e=\`${result.css.replace(/\uFEFF/g, '')}\`; s = document.getElementById('amoled'); if (!s) s = document.createElement('style'); s.id = "amoled"; s.innerHTML = e; document.body.appendChild(s);`);