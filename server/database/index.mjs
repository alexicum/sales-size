import mongoose from 'mongoose';

export default (cfg) => {
  const mongoDB =`mongodb://${cfg.DB_USER}:${cfg.DB_PASS}@${cfg.DB_SERVER}`;

  const mongoDBDriverOptions = {
    useNewUrlParser: true,
  };
  mongoose.connect(mongoDB, mongoDBDriverOptions);
  mongoose.set('debug', true);
  // Получение Mongoose для использования глобаного промиса
  mongoose.Promise = global.Promise;
  // Получение по умолчанию подключения
  const db = mongoose.connection;

  // Привязать подключение к ошибке события ( получение уведомления ошибок подключение )
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};