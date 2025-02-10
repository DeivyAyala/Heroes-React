// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

import { TextEncoder, TextDecoder } from 'util';

// Asegúrate de que TextEncoder y TextDecoder estén disponibles globalmente
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;