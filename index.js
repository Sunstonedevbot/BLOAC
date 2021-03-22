const Discord = require('discord.js');
const Client = new Discord.Client;

Client.on("ready" , () => {
    console.log("bot is online");
	var activities = [ `${Client.guilds.cache.size} serveurs `, `${Client.users.cache.size} utilisateurs !` ], i = 0;
    setInterval(() => Client.user.setActivity(`${prefix}help_bot | J'aime Austri | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)
});

const prefix = "!";

Client.on("message" , message => {
    if(message.author.bot)return;
    if(message.channel.type == "dm")return;

    if(message.content == prefix + "lama"){
        message.channel.send("les codes ne marchent pas, je vais flipper");
    }

	if(message.content == prefix + "buvo"){
        message.channel.send("https://cdn.discordapp.com/attachments/817039482549174332/817096605475536926/Capture_decran_2021-03-04_a_19.10.07.png");
    }

	if(message.content == prefix + "buvoli"){
        message.channel.send("bof");
    }

	if(message.content == prefix + "para"){
        message.channel.send("Je snobe les messages");
    }

	if(message.content == prefix + "gazi"){
        message.channel.send("Faucheuse Experte");
    }

	if(message.content == prefix + "nami"){
        message.channel.send("J'aime mes petits BLOAC ❤️");
    }

	if(message.content == prefix + "doudi"){
        message.channel.send("origine = 50");
    }

	if(message.content == prefix + "catow"){
        message.channel.send("prof adorée");
    }

	if(message.content == prefix + "kaya"){
        message.channel.send("maman du serveur, notre animatrice de qualité");
    }

	if(message.content == prefix + "kayak"){
        message.channel.send("pure visiteur");
    }

	if(message.content == prefix + "lina"){
        message.channel.send("petit pois de bloac");
    }

	if(message.content == prefix + "slaggy"){
        message.channel.send("futur grand clasheur");
    }

	if(message.content == prefix + "ayers"){
        message.channel.send("la policière de bloac");
    }

	if(message.content == prefix + "tica"){
        message.channel.send("la plus sainte");
    }

	if(message.content == prefix + "buvolii"){
        message.channel.send("je rq.");
    }

	if(message.content == prefix + "lotie"){
        message.channel.send("modo pref");
    }

	if(message.content == prefix + "Buvolove"){
        message.channel.send("https://media.discordapp.net/attachments/817093543515914260/820274882159837224/Screenshot_20210203_153449.jpg");
    }

	if(message.content == prefix + "Namitea"){
        message.channel.send("https://media.discordapp.net/attachments/817093543515914260/820274850059911198/Screenshot_20210313_133240.jpg");
    }
	
	if(message.content == prefix + "Naminglish"){
        message.channel.send("https://media.discordapp.net/attachments/817093543515914260/820274714869497857/Screenshot_20210313_133411.jpg");
    }

    if(message.content == "le bot est méchant"){
        message.channel.send('shdfozehfozhfgohziofgyvonsdogfv :(')
    }

	if(message.content == prefix + "BLOAC"){
        message.channel.send('https://media.discordapp.net/attachments/427556687524790273/810215450473922580/top_1_.png?width=720&height=50')
    }

	if(message.content == prefix + "clem"){
        message.channel.send('https://cdn.discordapp.com/emojis/788500813785202738.gif?v=1')
    }

	if(message.content == prefix + "clem2"){
        message.channel.send('https://cdn.discordapp.com/attachments/817091165928161390/820081673764601866/Capture_decran_2021-03-13_a_00.51.37.png')
    }

	if(message.content == prefix + "dys"){
        message.channel.send("je suis belge et j'aime la bière")
    }

	if(message.content == prefix + "adrien"){
        message.channel.send("Mr dépression")
    }

	if(message.content == prefix + "hugo"){
        message.channel.send("Pouet Pouet")
    }

	if(message.content == prefix + "Rhvm"){
        message.channel.send("Serpent du serveur")
    }

	if(message.content == prefix + "Lurra"){
        message.channel.send("Mme Afk")
    }

	if(message.content == prefix + "Meli"){
        message.channel.send("Je suis perdue, omg, qu'est ce qui s'est passé encore ici")
    }

	if(message.content == prefix + "Braum"){
        message.channel.send("Tartine au chocolat")
    }

	if(message.content == prefix + "Austri"){
        message.channel.send("Toute mimi et sensible")
    }

	if(message.content == prefix + "theman"){
        message.channel.send("Informaticien d'exception")
    }

	if(message.content == prefix + "timmoo"){
        message.channel.send("je râle tout le temps")
    }

	if(message.content == prefix + "mel"){
        message.channel.send("mascotte bloac")
    }

	if(message.content == prefix + "rhvmlove"){
        message.channel.send("https://media.discordapp.net/attachments/780191075658498101/820267538214158386/Screenshot_20210313_130926.jpg?width=908&height=1037")
    }

	if(message.content == prefix + "rhvmligue"){
        message.channel.send("https://cdn.discordapp.com/attachments/780191075658498101/820266019670065162/Screenshot_20210113_210333.jpg")
    }

	if(message.content == prefix + "mad"){
        message.channel.send("https://cdn.discordapp.com/emojis/820272275646709829.gif?v=1")
    }

	if(message.content == prefix + "buvamour"){
        message.channel.send("https://media.discordapp.net/attachments/780191075658498101/820266019398221824/Screenshot_20210104_003729.jpg")
    }

	if(message.content == prefix + "icon"){
        message.channel.send("https://cdn.discordapp.com/attachments/817091165928161390/820266084354621440/pink-flower-white-background-cute-flower-drawings-colored-painting.jpeg")
    }

	if(message.content == prefix + "oulaaa"){
        message.channel.send("https://cdn.discordapp.com/attachments/817091165928161390/820268743275708416/Capture_decran_2021-03-13_a_13.14.43.png")
    }

	if(message.content == prefix + "staff"){
        message.channel.send("**Nami :** Maire de BLOAC")
		message.channel.send("**Clem :** modérateur des animations")
		message.channel.send("**Sol :** modérateur des rôles")
		message.channel.send("**Austri :** notre nouvelle petite adjointe ")
		message.channel.send("**Buvolii :** notre adjoint le plus fidèle")
		message.channel.send("**Dysnomya :** petit tdc devenu adjoint")
    }
});

Client.on("message" , message => {
    if(message.author.bot)return;

    const help = new Discord.MessageEmbed()
	.setColor('#E7BEB8')
	.setTitle('Liste des commandes bot (1)')
	.setDescription("Voici la liste des commandes fonctionnelles du bot :")
	.setThumbnail('https://cdn.discordapp.com/attachments/817091165928161390/820266084354621440/pink-flower-white-background-cute-flower-drawings-colored-painting.jpeg')
	.addFields(
		{ name: '!lama', value: 'Commande Textuel', inline: true },
		{ name: '!buvo', value: 'Commande Textuel', inline: true },
	)
	.addField('!buvoli', 'Commande Textuel', true)
	.addFields(
		{ name: '!para', value: 'Commande Textuel', inline: true },
		{ name: '!gazi', value: 'Commande Textuel', inline: true },
	)
	.addFields(
		{ name: '!nami', value: 'Commande Textuel', inline: true },
		{ name: '!doudi', value: 'Commande Textuel', inline: true },
	)
	.addField('!catow', 'Commande Textuel', true)
	.addFields(
		{ name: '!kaya', value: 'Commande Textuel', inline: true },
		{ name: '!kayak', value: 'Commande Textuel', inline: true },
	)
	.addFields(
		{ name: '!lina', value: 'Commande Textuel', inline: true },
		{ name: '!slaggy', value: 'Commande Textuel', inline: true },
	)
	.addField('!ayers', 'Commande Textuel', true)
	.addFields(
		{ name: '!tica', value: 'Commande Textuel', inline: true },
		{ name: '!buvolii', value: 'Commande Textuel', inline: true },
	)
	.addField('!lotie', 'Commande Textuel', true)
	.addFields(
		{ name: '!buvolove', value: 'Commande Textuel', inline: true },
		{ name: '!Namitea', value: 'Commande Textuel', inline: true },
	)
	.addFields(
		{ name: '!Naminglish', value: 'Commande Textuel', inline: true },
		{ name: '!BLOAC', value: 'Commande Textuel', inline: true },
	)
	.addField('!clem', 'Commande Textuel', true)
	.addFields(
		{ name: '!clem2', value: 'Commande Textuel', inline: true },
		{ name: '!dys', value: 'Commande Textuel', inline: true },
	)
	.addField('!adrien', 'Commande Textuel', true)
	.setTimestamp()
	.setFooter('Développé avec ❤️ par Lamangue98');

	if(message.content == prefix + "help_bloac"){
		message.channel.send(help);
	};
});

Client.on("message" , message => {
    if(message.author.bot)return;

    const help_bloac2 = new Discord.MessageEmbed()
	.setColor('#E7BEB8')
	.setTitle('Liste des commandes bot (2)')
	.setDescription("Voici la liste des commandes fonctionnelles du bot :")
	.setThumbnail('https://cdn.discordapp.com/attachments/817091165928161390/820266084354621440/pink-flower-white-background-cute-flower-drawings-colored-painting.jpeg')
	.addFields(
		{ name: '!hugo', value: 'Commande Textuel', inline: true },
		{ name: '!Rhvm', value: 'Commande Textuel', inline: true },
	)
	.addFields(
		{ name: '!Lurra', value: 'Commande Textuel', inline: true },
		{ name: '!Meli', value: 'Commande Textuel', inline: true },
	)
	.addField('!Braum', 'Commande Textuel', true)
	.addFields(
		{ name: '!Austri', value: 'Commande Textuel', inline: true },
		{ name: '!theman', value: 'Commande Textuel', inline: true },
	)
	.addField('!timmoo', 'Commande Textuel', true)
	.addFields(
		{ name: '!mel', value: 'Commande Textuel', inline: true },
		{ name: '!rhvmlove', value: 'Commande Textuel', inline: true },
	)
	.addFields(
		{ name: '!rhvmligue', value: 'Commande Textuel', inline: true },
		{ name: '!mad', value: 'Commande Textuel', inline: true },
	)
	.addField('!buvoamour', 'Commande Textuel', true)
	.addFields(
		{ name: '!icon', value: 'Commande Textuel', inline: true },
		{ name: '!oulaa', value: 'Commande Textuel', inline: true },
	)
	.addField('!staff', 'Commande Textuel', true)
	.setTimestamp()
	.setFooter('Développé avec ❤️ par Lamangue98');

	if(message.content == prefix + "help_bloac2"){
		message.channel.send(help_bloac2);
	};
});

Client.on("message" , message => {
    if(message.author.bot)return;

    const botdown = new Discord.MessageEmbed()
	.setColor('#E7BEB8')
	.setTitle('BOT Status')
	.setDescription('Le bot sera hors-ligne le 13 mars entre 16h et 16h30 pour des modifications de codes !')
	.setThumbnail('https://cdn.discordapp.com/attachments/817091165928161390/820266084354621440/pink-flower-white-background-cute-flower-drawings-colored-painting.jpeg')
	.setTimestamp()
	.setFooter('Développé avec ❤️ par Lamangue98');

	if(message.content == prefix + "dev"){
		message.channel.send(botdown);
	};
});

Client.on("message" , message => {
    if(message.author.bot)return;

    const update = new Discord.MessageEmbed()
	.setColor('#E7BEB8')
	.setTitle('Bienvenue sur la page BLOAC BOT')
	.setDescription('Modifications des pages suivantes : ')
	.setThumbnail('https://cdn.discordapp.com/attachments/817091165928161390/820266084354621440/pink-flower-white-background-cute-flower-drawings-colored-painting.jpeg')
	.addFields(
		{ name: '!help_bloac', value: 'Liste des commandes', inline: true },
		{ name: '!help_bloac2', value: 'Liste des commandes', inline: true },
		{ name: '!help_modo', value: 'Page en cours de construction', inline: true },
	)
	.addField("!play", 'Commande musique en cours', true)
	.setTimestamp()
	.setFooter('Développé avec ❤️ par Lamangue98');

	if(message.content == prefix + "help_bot"){
		message.channel.send(update);
	};
});

Client.on("message" , message => {
    if(message.author.bot)return;

    const helpmod = new Discord.MessageEmbed()
	.setColor('#E7BEB8')
	.setTitle('Liste des commandes de modération')
	.setDescription("Voici la liste des commandes de modération :")
	.setThumbnail('https://cdn.discordapp.com/attachments/817091165928161390/820266084354621440/pink-flower-white-background-cute-flower-drawings-colored-painting.jpeg')
	.addFields(
		{ name: '!clear', value: 'Supprime les messages', inline: true },
	)
	.setTimestamp()
	.setFooter('Développé avec ❤️ par Lamangue98');

	if(message.content == prefix + "help_modo"){
		message.channel.send(helpmod);
	};
});

Client.login("ODE2NjI5OTU2NzYyOTI3MTg1.YD9v6Q.7SPrl7JNibS9zlDbUvvZ2bhmxj8")