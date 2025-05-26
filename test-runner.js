const { spawn } = require('child_process');

const args = process.argv.slice(2);
const env = { ...process.env };
const playwrightArgs = [];

args.forEach(arg => {
  if (arg.startsWith('--browser=')) {
    env.BROWSER = arg.split('=')[1];
  } else if (arg.startsWith('--resolution=')) {
    env.RESOLUTION = arg.split('=')[1];
  } else if (arg.startsWith('--headless=')) {
    env.HEADLESS = arg.split('=')[1];
  } else if (arg.startsWith('--workers=')) {
    env.WORKERS = arg.split('=')[1];
    playwrightArgs.push('--workers=' + arg.split('=')[1]);
  } else {
    playwrightArgs.push(arg);
  }
});

console.log(`Starting tests with:`, {
  browser: env.BROWSER || 'chromium',
  resolution: env.RESOLUTION || '1280x720',
  headless: env.HEADLESS !== 'false',
  workers: env.WORKERS || 'default'
});

const browser = env.BROWSER || 'chromium';
const cmd = (browser === 'cucumber')
  ? ['cucumber-js', ...playwrightArgs]
  : ['playwright', 'test', ...playwrightArgs];

const runner = spawn('npx', cmd, {
  env,
  stdio: 'inherit'
});

runner.on('exit', code => {
  process.exit(code);
});