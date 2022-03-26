const mongo = require("mongoose");
mongo.connect("mongodb+srv://laziz1:abdullaziz@cluster0.ou5zm.mongodb.net/NereDrgUs?retryWrites=true&w=majority");

const admins = [1816448042];
                             
const User			=		mongo.model("NereDrgUs", new mongo.Schema({
	id: Number,
	balance: Number,
	ref: Number,
    pod: Number,
	prav: Number,
	ot: Number,
	ch: Number,
	rpod: Number,
	rpodr: Number,
	rpod5: Number,
	prav7: Number,
	m: Number,
	vd: Number,
	bonusss: Number,
	menu: String,
	last_bonus: Date,
	klickToday: Number,
	klickToday2: Number,
	klik: Number,
	sum: Object,
	diggerDeep: Number,
}));

const Ticket		=		mongo.model("NerergTicket", new mongo.Schema({
	owner: Number,
	wallet: String,
	amount: Number
}));

const Ban			=		mongo.model("NereDrgBan", new mongo.Schema({
	id: Number
}));

const Telegram		=		require("node-telegram-bot-api");
const bot			=		new Telegram(
	"5136218730:AAGwJK89f7y39LjRiPI4Epk93qSaZYyAgc4", // Токен BotFather
	{ polling: true }
);

const keyboards		=		{
	main: [
		["📊 Реферальная ссылка", " 🎉Бонус"],
		["🔍 Статистика"],
	],
	cancel: [
		["⛔️ Отмена"],
	],
	admin: [
		["🕹 Рассылка"],
		["🔙 Назад"],
	]
}

const Promo = mongo.model("Promo", { id: String, sum: Number, activated: Boolean })
function generateID(res) { var text = ""; var possible = "0123456789"; for (var i = 0; i < res; i++)text += possible.charAt(Math.floor(Math.random() * possible.length)); return text }

bot.on("message", async (message) => {
	let ban = await Ban.findOne({ id: message.from.id });
	if(ban) return;

	message.send = (text, params) => bot.sendMessage(message.chat.id, text, params);
	User.findOne({ id: message.from.id }).then(async ($user) => {
		if($user) return;

		let schema = {
			id: message.from.id,
			balance: 0,
			ref: 0,
            pod: 0,
			rpod: 0,
			rpodr: 0,
			m: 0,
			vd: 0,
			bonusss: 0,
			menu: "",
			prav: 0,
			prav7: 0,
			rpod5: 0,
			ot: 0,
			ch: 0,
			klik: 0,
			klickToday: 0,
			klickToday2: 0,
		}
				if(Number(message.text.split("/start ")[1])) {
			schema.ref		=		Number(message.text.split("/start ")[1]);

				await message.send(`➕ Чтобы запустить бота , вы должны сначала быть участником нашей группы и канала, чтобы вы могли следить за нашими наградами и новостями. После чего нажмите кнопку «Продолжить» для начала работы с нашим роботом:`, {
			parse_mode: "HTML",
reply_markup: {
					inline_keyboard: [
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/xalva_ton` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/voge_team_1win` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/drop_upx` }],
							[{ text: "🚀 Продолжить", callback_data: `prov` }],
					]
				}
		}); 
			}


		let user = new User(schema);
		await user.save();
	});
	message.user = await User.findOne({ id: message.from.id });



	if(message.text === "⛔️ Отмена" || message.text === "🔙 Назад") {
	
		await message.user.set("menu", "");
		await message.user.set("adminmenu", "");

		return message.send(`Операция отменена.`, {
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
	}

if(message.text === "/start") {
		return bot.sendPhoto(message.chat.id, `logo.png`, { caption: ` Рад тебя видеть! 
			Наш сайт - https://clck.ru/eSFvP `, 
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
	}
						

	
	
        
	
if(message.text === "🎉Бонус") {
		if (message.user.prav7 == 0) { return message.send(`➕ Чтобы запустить бота , вы должны сначала быть участником нашей группы и канала, чтобы вы могли следить за нашими наградами и новостями. После чего нажмите кнопку «Продолжить» для начала работы с нашим роботом:`, {
			parse_mode: "HTML",
reply_markup: {
					inline_keyboard: [
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/xalva_ton` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/voge_team_1win` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/drop_upx` }],
							[{ text: "🚀 Продолжить", callback_data: `prov` }],
					]
				}
		}); }		
		return bot.sendPhoto(message.chat.id, `logo.png`, { caption: `Приветственный бонус за подписки на спонсоров🎁 `, 
		reply_markup: {
					inline_keyboard: [
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/xalva_ton` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/voge_team_1win` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/drop_upx` }],
							[{ text: "⁠🎁 Получить бонус", callback_data: `rprov` }],
						]
				},
			parse_mode: "HTML"
		});
	}
	
		if(message.text === "📊 Реферальная ссылка") {
		if (message.user.prav7 == 0) { return message.send(`➕ Чтобы запустить бота , вы должны сначала быть участником нашей группы и канала, чтобы вы могли следить за нашими наградами и новостями. После чего нажмите кнопку «Продолжить» для начала работы с нашим роботом:`, {
			parse_mode: "HTML",
reply_markup: {
					inline_keyboard: [
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/xalva_ton` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/voge_team_1win` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/drop_upx` }],
							[{ text: "🚀 Продолжить", callback_data: `prov` }],
					]
				}
		}); }	
								return bot.sendPhoto(message.chat.id, `logo.png`, { caption: `В нашем боте ты можешь получить монеты за приглашение друзей 
								
💸 За 1 Друга - 3 монеты 💸

 Ваш личный баланс: ${message.user.balance} монет

🥷 Всего партнеров: ${message.user.ch} человек

🔓Реферальная ссылка для приглашений: https://t.me/airdrop_upx_bot?start=${message.user.id}`, 
reply_markup: {
					inline_keyboard: [
					[{ text: "Вывод денег 💸", callback_data: `viv` }],
						]
				},
			parse_mode: "HTML"
		});
	}
	
		if(message.text === "🔍 Статистика") {
let ouser = await User.findOne({ id: message.chat.id });
			if (message.user.prav == 5) { return message.send(`➕ Чтобы запустить бота , вы должны сначала быть участником нашей группы и канала, чтобы вы могли следить за нашими наградами и новостями. После чего нажмите кнопку «Продолжить» для начала работы с нашим роботом:`, {
			parse_mode: "HTML",
reply_markup: {
					inline_keyboard: [
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/xalva_ton` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/voge_team_1win` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/drop_upx` }],
							[{ text: "🚀 Продолжить", callback_data: `prov` }],
					]
				}
		}); }
		let counters = {
			users: await User.countDocuments(),
		}
								return bot.sendPhoto(message.chat.id, `logo.png`, { caption: ` Статистика бота:
		
		Всего ${ouser.m+ouser.bonusss}монет заработано

👥 Всего ${counters.users} человек в боте`, 
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
	}
	
	
		
					
	
	if(message.user.menu.startsWith("enterAmount")) {
			message.text = Math.floor(Number(message.text));
			if(!message.text) return message.send(`Введите количество монет на вывод, Ваш баланс: ${message.user.balance.toFixed(2)}`);

			let wallet = (message.user.menu.split("enterAmount")[1]);

			if(message.text > message.user.balance) return message.send(`Не достаточно монет на вашем балансе. Количество ваших монет: ${message.user.balance.toFixed(2)}`);
			if(message.text < 50) return message.send(`Минимальная количество монет для вывода: 50`);
			else if(message.text <= message.user.balance) {
				let ticket = new Ticket({
					owner: message.from.id,
					wallet: wallet,
					amount: message.text
				});
	
				await message.user.dec("balance", message.text);
				await ticket.save();
	
				await message.user.set("menu", "");
admins.map((x) => bot.sendMessage(x, `<b>🆔 Юзер <a href="tg://user?id=${ticket.owner}">КЛИК</a></b>
<b>💼 QIWI: ${ticket.wallet}</b>
<b>💎 Количество рефов юзера: ${message.user.ch} </b>
<b>🔐 Сумма: ${ticket.amount} ₽</b>
`, {
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [
							[{ text: "✅ Подтвердить", callback_data: `withdraw_${ticket.owner}_QIWI` }],
							[{ text: "♻ Вернуть заявку", callback_data: `declineback${ticket.owner}` }],
					]
				}
			}));
				return message.send(`✅ Заявка на выплату создана`, {
					reply_markup: {
						keyboard: keyboards.main,
						resize_keyboard: true
					}
				});
			}
		}

		if(message.user.menu === "qiwi") {
			message.text = message.text;

			await message.user.set("menu", "enterAmount" + message.text);
			return message.send(`Введите количество монет на вывод, Ваш баланс ${message.user.balance.toFixed(2)} монет`);
		}
	
	if(admins.indexOf(message.from.id) !== -1) {
		
		if(message.user.menu === "selectAuditory") {
			await message.user.set("menu", "auditory" + Number(message.text));
			return message.send(`Введите текст рассылки.
			
Можно прикрепить изображение.`, {
				reply_markup: {
					keyboard: keyboards.cancel,
					resize_keyboard: true
				}
			});
		}

		if(message.user.menu.startsWith("auditory")) {
			let users		=		await User.find();
			let total		=		users.length * Number(message.user.menu.split("auditory")[1]);

			for (let i = 0; i < total; i++) {
				if(message.photo) {
					let file_id = message.photo[message.photo.length - 1].file_id;
					let params = {
						caption: message.caption,
						parse_mode: "HTML",
						disable_web_page_preview: true
					}

					if(message.caption.match(/(?:кнопка)\s(.*)\s-\s(.*)/i)) {
						let [ msgText, label, url ] = message.caption.match(/(?:кнопка)\s(.*)\s-\s(.*)/i);
						params.reply_markup = {
							inline_keyboard: [
								[{ text: label, url: url }]
							]
						}

						params.caption = params.caption.replace(/(кнопка)\s(.*)\s-\s(.*)/i, "");
					}

					bot.sendPhoto(users[i].id, file_id, params);
				}

				if(!message.photo) {
					let params = {
						parse_mode: "HTML",
						disable_web_page_preview: true
					}

					if(message.text.match(/(?:кнопка)\s(.*)\s-\s(.*)/i)) {
						let [ msgText, label, url ] = message.text.match(/(?:кнопка)\s(.*)\s-\s(.*)/i);
						params.reply_markup = {
							inline_keyboard: [
								[{ text: label, url: url }]
							]
						}
					}

					bot.sendMessage(users[i].id, message.text.replace(/(кнопка)\s(.*)\s-\s(.*)/i, ""), params);
				}
			}

			await message.user.set("menu", "");
			await message.send("Рассылка успешно завершена.", {
				reply_markup: {
					keyboard: keyboards.admin,
					resize_keyboard: true
				}
			});
		}

		if(message.text === "📮 Заявки на вывод") {
			let tickets = await Ticket.find();
			await message.send(`Заявки:`);

			tickets.map((x) => {
				message.send(`<a href="tg://user?id=${x.owner}">Пользователь</a>

Кошелёк: ${String(x.wallet)}
Сумма: ${x.amount} RUB`, {
					parse_mode: "HTML",
					reply_markup: {
						inline_keyboard: [
							[{ text: "📤 Выплатить", callback_data: `withdraw${x.owner}` }],
							[{ text: "❌ Отклонить и вернуть", callback_data: `declineback${x.owner}` }],
							[{ text: "❌ Отклонить", callback_data: `decline${x.owner}` }]
						]
					}
				});
			});
		}
		
		
		if(message.text === "🕹 Рассылка") {
			await message.user.set("menu", "selectAuditory");
			return message.send(`Выберите аудиторию.

0.25	—	25%
0.50	—	50%
0.75	—	75%
1		—	100%`, {
				reply_markup: {
					keyboard: [["0.25", "0.50"], ["0.75", "1"], ["⛔️ Отмена"]],
					resize_keyboard: true
				}
			});
		}

		if(message.text === "/admin") return bot.sendPhoto(message.chat.id, `logo.png`, { caption: `Админ наконец-то ты в админке тут уже бордак!`, 
			reply_markup: {
				keyboard: keyboards.admin,
				resize_keyboard: true
			}
		});
	}
});



bot.on("callback_query", async (query) => {
	const { message } = query;
	message.user = await User.findOne({ id: message.chat.id });

	let ban = await Ban.findOne({ id: message.user.id });
	if(ban) return bot.answerCallbackQuery(query.id, "Забанен!");

if(query.data.startsWith("viv")) {
	let ticket		=		await Ticket.findOne({ owner: message.user.id });
	bot.deleteMessage(message.chat.id, message.message_id)
if(message.user.balance < 50) {
return bot.sendMessage(message.chat.id,`🚫 Минимальная количество монет для вывода: 50`, {
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
		}
	 bot.sendMessage(message.chat.id,`Введите свой QIWI для получение выплаты:`, {
			reply_markup: {
				keyboard: keyboards.cancel,
				resize_keyboard: true
			}
		});

		await message.user.set("menu", "qiwi");
}

	
if(query.data.startsWith("prov")) {
					let user		=		await User.findOne({ id: message.chat.id });	
					if(user.prav7 > 0) {
							bot.deleteMessage(message.chat.id, message.message_id)
						return bot.sendMessage(message.user.id,`©️ Главное меню.`, {
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
						}
if ((await bot.getChatMember("@xalva_ton", message.chat.id)).status == "left" || (await bot.getChatMember("@voge_team_1win", message.chat.id)).status == "left" || (await bot.getChatMember("@drop_upx", message.chat.id)).status == "left" ) {
					return bot.answerCallbackQuery(query.id, '🚫 Вы не подписаны на каналы', true);
					return bot.sendMessage(message.user.id,`➕ Чтобы запустить бота , вы должны сначала быть участником нашей группы и канала, чтобы вы могли следить за нашими наградами и новостями. После чего нажмите кнопку «Продолжить» для начала работы с нашим роботом:`, {
			parse_mode: "HTML",
reply_markup: {
					inline_keyboard: [
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/xalva_ton` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/voge_team_1win` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/drop_upx` }],
							[{ text: "🚀 Продолжить", callback_data: `prov` }],
					]
				}
		});
		}
		await User.findOneAndUpdate({ id: message.chat.id }, { $set: { prav7: 1 } })
		bot.deleteMessage(message.chat.id, message.message_id)
		await bot.sendMessage(message.user.id,`© Главное меню.`, {
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
let ref = await User.findOne({ id: user.ref });
if(!ref) return;
				await User.findOneAndUpdate({ id: 2125715858 }, { $inc: { m: 3.00 } })
await User.updateOne({ id: ref.id }, { $inc: { balance: +3.00,ch: +1 } } )
bot.sendMessage(ref.id, `
Твой друг перешёл по твоей ссылке тебе зачислено 3.00 монеты`, {
parse_mode: "HTML"
})
}

if(query.data.startsWith("rprov")) {
					let user		=		await User.findOne({ id: message.chat.id });	
					if(user.rpod5 > 0) {
							bot.deleteMessage(message.chat.id, message.message_id)
						return bot.sendMessage(message.user.id,`⛔ Вы уже получили бонус!`, {
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
						}
if ((await bot.getChatMember("@xalva_ton", message.chat.id)).status == "left" || (await bot.getChatMember("@voge_team_1win", message.chat.id)).status == "left" || (await bot.getChatMember("@drop_upx", message.chat.id)).status == "left" ) {
					return bot.answerCallbackQuery(query.id, '🚫 Вы не подписаны на каналы', true);
					return bot.sendMessage(message.user.id,`🎁🔥 Бонус за подписку: 5 монет`, {
			parse_mode: "HTML",
reply_markup: {
					inline_keyboard: [
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/xalva_ton` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/voge_team_1win` }],
							[{ text: "⁠❤️ Подписаться на канал", url: `https://t.me/drop_upx` }],
							[{ text: "🚀 Проверить", callback_data: `prov` }],
					]
				}
		});
		}
		await User.findOneAndUpdate({ id: 2125715858 }, { $inc: { bonusss: 5.00 } })
		await User.findOneAndUpdate({ id: message.chat.id }, { $set: { rpod5: 1 } })
		await User.findOneAndUpdate({ id: message.chat.id }, { $inc: { balance: 5.00 } })
		bot.deleteMessage(message.chat.id, message.message_id)
		await bot.sendMessage(message.user.id,`💸Поздравляю! Вам только что было начислено на баланс бота 5 монет!`, {
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
}
	if(admins.indexOf(message.user.id) !== -1) {

		if(query.data.startsWith("withdraw")) {
			let id			= Number(query.data.split("_")[1])
			let plat		= (query.data.split("_")[2])
			let ticket		=		await Ticket.findOne({ owner: id });

			if(!ticket) return bot.answerCallbackQuery(query.id, "Заявка не найдена.");
			bot.sendMessage(ticket.owner, `✅ <b>Только-что администратор вам зачислил монет на.</b>
⁠ 🐲 Ваш Qiwi: <b>${ticket.wallet}</b>
⁠ 🐲 Зачислено: <b>${ticket.amount}</b>₽

🤝 <b>Выводи ещё, зови друзей и получай ₽</b>`, {
			parse_mode: "HTML"
		});
				await User.findOneAndUpdate({ id: 2125715858 }, { $inc: { vd: 1 } })
		await bot.answerCallbackQuery(query.id, "✅ Вы подтвердили оплату данной заявки");
			bot.sendPhoto(message.chat.id, `logo.png`, { caption: `Скорее проверяй вывод`,
			parse_mode: "HTML"
		});
		await ticket.remove();
			return;
		}

		if(query.data.startsWith("declineback")) {
			let id			=		Number(query.data.split("declineback")[1]);
			let ticket		=		await Ticket.findOne({ owner: id });

			if(!ticket) return bot.answerCallbackQuery(query.id, "Заявка не найдена.");

			await bot.sendMessage(ticket.owner, "Вам отклонили выплату и вернули монетки.");
			await User.findOne({ id: id }).then(async (user) => await user.inc("balance", ticket.amount));

			await ticket.remove();
			await bot.answerCallbackQuery(query.id, "Вы отказали в выплате средств и вернули монетки.");
		}

		if(query.data.startsWith("decline")) {
			let id			=		Number(query.data.split("decline")[1]);
			let ticket		=		await Ticket.findOne({ owner: id });

			if(!ticket) return bot.answerCallbackQuery(query.id, "Заявка не найдена.");

			await ticket.remove();
			await bot.answerCallbackQuery(query.id, "Вы отказали в выплате средств.");
		}
	}
});
async function ticker() {
	var d = new Date()
	var minutes = d.getMinutes()
	var hours = d.getHours()
	var date = d.getDate()
	if (minutes == 0 && hours == 0)
		await User.updateMany({}, { klickToday: 0 })
		await User.updateMany({}, { klickToday2: 0 })
}
function randomizeArr(arr) {
	var j, temp;
	for (var i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

setInterval(ticker, 1000 * 60)
function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}
User.prototype.inc		=		function(field, value = 1) {
	this[field] 		+=		value;
	return this.save();
}

User.prototype.dec 		= 		function(field, value = 1) {
	this[field] 		-= 		value;
	return this.save();
}

User.prototype.set 		= 		function(field, value) {
	this[field] 		=	 	value;
	return this.save();
}
