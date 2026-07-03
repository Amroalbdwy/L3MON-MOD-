const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

// إعداد المنفذ للاستضافة
const port = process.env.PORT || 3000;

// خادم ويب بسيط لتجنب إغلاق البوت من قبل الاستضافة
app.get('/', (req, res) => {
    res.send('Bot is running safely.');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// تهيئة البوت باستخدام التوكن من متغيرات البيئة
const token = process.env.TOKEN;
if (!token) {
    console.error("خطأ: يرجى إدخال التوكن في متغيرات البيئة باسم TOKEN");
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

// هنا ضع "منطق الأوامر" الذي كان في ملفاتك القديمة
// مثال:
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "أهلاً بك! البوت يعمل الآن بشكل نظيف وآمن.");
});

console.log('Bot is active...');
