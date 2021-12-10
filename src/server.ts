/**
 * Entrypoint for the web server.
 */

import { AddressInfo } from 'net';
import app from './app';
import config from './config';

const server = app.listen(config.server.port, config.server.hostname, function () {
    const { address, port } = server.address() as AddressInfo;
    console.log(`Server is listening at http://${address}:${port}.`);
});
