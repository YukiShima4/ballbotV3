class Main {
	constructor({ config }, {Conn, Mek, Func, Logger}) {
		this.command = ["oadd", "addowner", "owneradd"];
		this.category = "owner";
		this.mainten = "false";
		this.mid = async function () {
			if (!Mek.isDev) return Func.sendteks(Mek.chat, Logger.JUST_DEV, Mek);
			let user = Mek.mentionedJid[0] ? Mek.mentionedJid[0].split("@")[0] : Mek.quoted.sender ? Mek.quoted.sender.split("@")[0] : Mek.query.replace(/[^0-9]/g, '');
			if (!user) return Func.sendteks(Mek.chat, `User tidak valid`, Mek);
			config.owner.push(user);
			Func.sendteks(Mek.chat, `Sukses Menambahkan ${user} sebagai owner`, Mek);
		};
	}
}

export default Main;
