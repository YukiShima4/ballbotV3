import got from "got";
import cheerio from "cheerio";
import { format, inspect } from "util";
import fs from "fs";

class Main {
	constructor(db, {Mek, Func, Logger, Metadata, Fake, Global}) {
		this.prefix = "=>";
		this.category = "owner"
		this.mainten = "false"
		this.custom = async (query) => {
			if (!Mek.isDev) return Func.sendteks(Mek.chat, Logger.JUST_DEV, Mek);
			await Func.sendteks(Mek.chat, "Evaling...", Mek)
			try {
				let evaling = await eval(`(async () => {${query}})();`)
				Func.sendteks(Mek.chat, typeof evaling != 'string' ? inspect(evaling) : format(evaling), Fake.fakeStatus(format(evaling), ""))
			} catch(e) {
				Func.sendteks(Mek.chat, await format(e) + '\n\n*Anda Sepertinya Harus banyak belajar bangg*\n*Jangan Asal tempel code*', Fake.fakeStatus(format(e), ""))
			}
		}
	}
}

export default Main;
