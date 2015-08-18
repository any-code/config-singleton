# config-singleton

> common JS module that requires a JSON file and provides a mutable config singleton that can be required everywhere else

## Getting Started

### 1. Installation

``` bash
npm install config-singleton
```

### 2. Examples

``` javascript
// defaults.json
{
  "defaultLanguage": "en"
}

// main.js
require('config-singleton').load('defaults.json');
    
// module.js
var config = require('config-singleton');   
console.log("default language is %s", config.defaultLanguage);
```

## Copyright and license
Copyright (c) 2015, Any Code <lee@anycode.io>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

