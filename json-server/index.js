import jsonServer from 'json-server';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Читаем конфигурацию
const configPath = path.resolve(__dirname, 'config.json');
let config = { apiPrefix: '' }; // значение по умолчанию

if (fs.existsSync(configPath)) {
   const configContent = fs.readFileSync(configPath, 'utf-8');
   config = JSON.parse(configContent);
}

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
   await new Promise(res => {
      setTimeout(res, 800);
   });
   next();
});

let notificationsCount = 1;

// Эндпоинт для уведомлений (без префикса)
server.get('/notifications', (req, res) => {
   try {
      notificationsCount += 1;
      return res.json({ notificationsCount });
   } catch (e) {
      return res.status(500).json({ message: e.message });
   }
});

// Если указан apiPrefix, добавляем префикс для всех маршрутов из db.json
if (config.apiPrefix) {
   server.use(config.apiPrefix, router);
} else {
   server.use(router);
}

// запуск сервера
const HTTP_PORT = 8080;

const httpServer = http.createServer(server);

httpServer.listen(HTTP_PORT, () => {
   console.log(`server is running on http://localhost:${HTTP_PORT}`);
});
