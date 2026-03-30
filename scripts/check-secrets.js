const { readFileSync, existsSync, readdirSync, statSync } = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const binaryExtensions = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.ico',
  '.pdf',
  '.webp',
  '.mp4',
  '.mov',
  '.zip',
  '.woff',
  '.woff2',
]);

const detectors = [
  {
    name: 'Private key material',
    regex: /-----BEGIN (?:RSA |DSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/,
  },
  {
    name: 'GitHub token',
    regex: /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/,
  },
  {
    name: 'Slack token',
    regex: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/,
  },
  {
    name: 'AWS access key',
    regex: /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
  },
  {
    name: 'Generic secret assignment',
    regex: /\b(?:api[_-]?key|secret|token|password|client[_-]?secret)\b\s*[:=]\s*['"][^'"\r\n]{8,}['"]/i,
  },
];

const ignoredDirectories = new Set([
  '.git',
  'dist',
  'node_modules',
  'public/cv',
]);

function walkDirectory(relativeDirectory = '') {
  const absoluteDirectory = path.join(repoRoot, relativeDirectory);
  const entries = readdirSync(absoluteDirectory, { withFileTypes: true });
  const files = [];

  entries.forEach((entry) => {
    const relativePath = path.join(relativeDirectory, entry.name);
    const normalizedPath = relativePath.replace(/\\/g, '/');

    if (ignoredDirectories.has(normalizedPath)) {
      return;
    }

    if (entry.isDirectory()) {
      files.push(...walkDirectory(relativePath));
      return;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!binaryExtensions.has(extension) && statSync(path.join(repoRoot, relativePath)).isFile()) {
      files.push(relativePath);
    }
  });

  return files;
}

function scanFile(filePath) {
  const absolutePath = path.join(repoRoot, filePath);

  if (!existsSync(absolutePath)) {
    return [];
  }

  const content = readFileSync(absolutePath, 'utf8');
  const matches = [];

  content.split(/\r?\n/).forEach((line, index) => {
    detectors.forEach(({ name, regex }) => {
      if (regex.test(line)) {
        matches.push({
          detector: name,
          filePath,
          line: index + 1,
        });
      }
    });
  });

  return matches;
}

const findings = walkDirectory().flatMap(scanFile);

if (findings.length > 0) {
  console.error('Potential secrets detected:');
  findings.forEach(({ detector, filePath, line }) => {
    console.error(`- ${filePath}:${line} (${detector})`);
  });
  process.exit(1);
}

console.log('No secrets detected in tracked text files.');
