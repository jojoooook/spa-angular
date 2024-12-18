
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/fakultas"
  },
  {
    "renderMode": 2,
    "route": "/prodi"
  },
  {
    "renderMode": 2,
    "route": "/mahasiswa"
  },
  {
    "renderMode": 2,
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "redirectTo": "/auth",
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 4973, hash: '20a29512895a71ee06fc7f9c892c0c9dd57ce96bc09ff7ce74b5e32c56ae1c75', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1072, hash: 'a9983f889a10e483467af411ebedf0abbe9de06e8bfec69375c7c1584a882b98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['fakultas/index.html', {size: 11300, hash: 'ca7cb0236e9b6366109e431ceea5462ed97bfcc47c290687c2ad02b6bf913197', text: () => import('./assets-chunks/fakultas_index_html.mjs').then(m => m.default)}], 
['prodi/index.html', {size: 11300, hash: 'ca7cb0236e9b6366109e431ceea5462ed97bfcc47c290687c2ad02b6bf913197', text: () => import('./assets-chunks/prodi_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 11373, hash: '433830f76cd0ff4d27459d998cb0f01a498c6b121229861626cdbac5c3f73b1e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['auth/index.html', {size: 17371, hash: '643a69be789a2fefd9d63da7b921cca681ef854c7f5c702743311cfc226a18e3', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)}], 
['mahasiswa/index.html', {size: 11300, hash: 'ca7cb0236e9b6366109e431ceea5462ed97bfcc47c290687c2ad02b6bf913197', text: () => import('./assets-chunks/mahasiswa_index_html.mjs').then(m => m.default)}], 
['styles-DZ6UBGXD.css', {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
