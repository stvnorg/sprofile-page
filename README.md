# sprofile-page

[![dependencies Status](https://david-dm.org/stvnorg/sprofile-page/status.svg)](https://david-dm.org/stvnorg/sprofile-page)

A simple one-page personal site. Built on FastifyJS. Started by [Steven Stevanus](https://github.com/stvnorg).
Work on-progress, missing the CMS feature

## Prequisites
  
   ```
   nodejs
   postgresql
   ```
  
## Deployment for the Production Environment

### Environment Variables

Before the deployment, make sure postgresql db is installed with the required permissions and export all the variables as below (to run the db:migrate and db:seed)

  ```$ export NODE_ENV='production'
  $ export DATABASE_URL=<db_url>
  $ export DATABASE_USERNAME=<username>
  $ export DATABASE_PASSWORD=<password>
  $ export DATABASE_NAME=<db_name>
  $ export DATABASE_PORT=<db_port>
  ```

### Packages Installation

  `$ npm install`

### Database Migration

  `$ npm run db:migrate`

### Database seeds

  `$ npm run db:seed:all`

### Run the App

Before running the app export below environment variable:

  `$ export DATABASE_ENDPOINT=postgres://username:password@localhost/db_name`

and lastly 

  `$ npm start`

If you have docker installed in your system, you can also run directly using docker-compose (with the default environment variables that are inside the docker-compose.yml file)

  `$ docker-compose up`

### Optional (run linter) for the CI pipeline

  `$ npm run lint`

## CI/Test Environment

For the Continous Integration part you need to export below variables:

  ```$ export CI_DATABASE_URL=localhost
  $ export CI_DATABASE_USERNAME=<username>
  $ export CI_DATABASE_PASSWORD=<password>
  $ export CI_DATABASE_NAME=<db_name>
  $ export CI_DATABASE_PORT=<db_port>
  ```

### Database Migration for the UnitTest

  `$ npm run db:migrate`

### Database seeds for the UnitTest

  `$ npm run db:seed:all`

### Run the Unit Test

  `$ npm run test`


## License

MIT License

Copyright (c) 2020 Steven Stevanus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
