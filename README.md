# Backend API Speed Test
> Backend API Performance Check with Asp.net vs NodeJs vs NextJs vs NestJs
<a href="https://github.com/imrannawabkhan/api-speed" target="_blank"><img src="https://github.com/imrannawabkhan/statics/blob/main/server-api-request-img/server-call.png" alt="Server API Endpoints"></a>

<a href="https://github.com/imrannawabkhan/api-speed" target="_blank"><img src="https://github.com/imrannawabkhan/statics/blob/main/server-api-request-img/server_request_per_call.gif" alt="Server API Calls/Sec"></a>

## Getting Started
Create simple web api and install the module with: 

### Setup Monitor:

```bash
$ npm init -y
$ npm install -save autocannon
```

### NodeJs Example:

```bash
$ npm init -y
$ npm install -save express
```

Create server.js
```javascript
const express = require('express');
const app = express();
const port = 3000; // Choose any port you prefer

// Define a route that returns "Hello, World!"
app.get('/api/hello', (req, res) => {
    res.status(200).json({ message: 'Hello World! From Node Js' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
```

Start NodeJs Server

```bash
$ node app.js
```

Open your browser and point it to the server (where server.js is started) IP and port:
http://localhost:3000/api/hello

### NextJs Example:

```bash
$ npx create-next-app webapi-next
```

Create folder hello.js in pages/api folder 
```javascript
// pages/api/hello.js
export default (req, res) => {
    res.status(200).json({ message: 'Hello World! From Next Js' });
  };
```

Start NextJs Server

```bash
$ npm run dev
```

Open your browser and point it to the server IP and port:
http://localhost:3001/api/hello

### Asp.net Core Example:

```c#
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/hello")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var message = "Hello World! From Asp.net";
            return Ok(new { Message = message });
        }
    }
}
```

Change the default port under project > Properties > launchSettings.json

```javascript
{
  "$schema": "https://json.schemastore.org/launchsettings.json",
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:47211",
      "sslPort": 0
    }
  },
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "launchUrl": "swagger",
      "applicationUrl": "http://localhost:3002",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "launchUrl": "swagger",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```
Open your browser and point it to the server IP and port:
http://localhost:3002/api/hello

### NestJs Example:

```bash
$ npx @nestjs/cli new webapi-nest
$ npx @nestjs/cli generate controller hello
```

Open the generated hello.controller.ts file located in the "src" directory
```javascript
// src/hello.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('api/hello')
export class HelloController {
    @Get()
    getHello():{ message: string } {
        return { message: 'Hello World! From Nest Js' };
    }
}
```

Changes the in src > app.module.ts 
```javascript
import { Module } from '@nestjs/common';
import { HelloController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [AppService],
})
export class AppModule {}

```
Change the default port under src > main.ts
```javascript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3003);
}
bootstrap();

```

Start NestJs Server

```bash
$ npm run start
```

Open your browser and point it to the server IP and port:
http://localhost:3003/api/hello

### Start the Monitor:
NodeJs
```bash
$ ./node_modules/.bin/autocannon http://localhost:3000/api/hello
```

NextJs
```bash
./node_modules/.bin/autocannon http://localhost:3001/api/hello
```

Asp.Net Core
```bash
./node_modules/.bin/autocannon http://localhost:3002/api/hello
```

NestJs
```bash
./node_modules/.bin/autocannon http://localhost:3003/api/hello
```

## License 

The MIT License

Copyright (c) 2024, Imran Nawab Khan

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
