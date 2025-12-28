import swaggerJsdoc from 'swagger-jsdoc';
import { options } from '../config/swagger';
import fs from 'fs';

const spec = swaggerJsdoc(options);
fs.writeFileSync('./openapi.json', JSON.stringify(spec, null, 2));
console.log('✅ OpenAPI spec generated at openapi.json');
