const { build } = require('esbuild')

build({
  entryPoints: ['./service-worker.js'],
  outfile: './public/service-worker.js',
  minify: true,
  bundle: true,
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.LAYER0_PREFETCH_HEADER_VALUE': '"1"',
    'process.env.LAYER0_PREFETCH_CACHE_NAME': '"prefetch"',
  },
}).catch(() => process.exit(1))
