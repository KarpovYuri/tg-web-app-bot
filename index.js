const TelegramBot = require('node-telegram-bot-api');

const token = '8037528346:AAFbVb5yvIXWu_aoZX1U5XTI3sF7r5YyBgo';
const webAppUrl = 'https://x3a.karaudio.ru/';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Выберите действие', {
            reply_markup: {
                inline_keyboard: [
                    [ { text: 'Открыть приложение', web_app: { url: webAppUrl } } ]
                ]
            }
        });
    }
});
