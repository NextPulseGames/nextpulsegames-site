const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const script = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
for (const stored of ['pl', 'en', 'invalid']) {
  const environment = {
    document: {querySelectorAll: () => [], getElementById: () => null},
    navigator: {language: 'pl-PL'},
    localStorage: {getItem: () => stored}
  };
  Object.defineProperty(environment.document, 'title', {set: () => assert.fail('Title mutation')});
  vm.runInNewContext(script, environment);
}
const unavailable = {document: {querySelectorAll: () => [], getElementById: () => null}};
Object.defineProperty(unavailable, 'localStorage', {get: () => {throw new Error('Storage unavailable');}});
vm.runInNewContext(script, unavailable);
console.log('PASS: invalid, opposite-language and unavailable storage have no effect.');
