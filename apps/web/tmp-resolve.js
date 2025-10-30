// Temporary script to check where packages resolve from
console.log('process.cwd():', process.cwd());
try {
  console.log('tailwind:', require.resolve('tailwindcss'))
} catch (e) {
  console.error('tailwind not found:', e.message)
}
try {
  console.log('postcss:', require.resolve('postcss'))
} catch (e) {
  console.error('postcss not found:', e.message)
}
try {
  console.log('postcss-load-config:', require.resolve('postcss-load-config'))
} catch (e) {
  console.error('postcss-load-config not found:', e.message)
}
