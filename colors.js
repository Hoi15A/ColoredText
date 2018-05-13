exports.raw = _rw => {
	const def = "\\x1b[";
	if (_rw == undefined) return undefined;
	switch (_rw.toLowerCase()) {
		case "alloff":
			return `${def}0m`;
		case "bold":
			return `${def}1m`;
		case "underline on":
		case "underlineon":
		case "underline":
			return `${def}4m`;
		case "blink on":
		case "blinkon":
		case "blink":
			return `${def}5m`;
		case "bold off":
		case "boldoff":
			return `${def}21m`;
		case "underline off":
		case "underlineoff":
			return `${def}24m`;
		case "blink off":
		case "blinkoff":
			return `${def}25m`;
		case "all":
		case "list":
			return [
				"alloff",
				"bold",
				"underline on",
				"underlineon",
				"underline",
				"blink on",
				"blinkon",
				"blink",
				"bold off",
				"boldoff",
				"underline off",
				"underlineoff",
				"blink off",
				"blinkoff",
				"all",
				"list"
			];
	}
}

exports.rawForeground = color => {
	const def = "\\x1b[";
	if (color == undefined) return undefined;
	switch (color.toLowerCase()) {
		case "black":
			return `${def}30m`;
		case "red":
			return `${def}31m`;
		case "green":
			return `${def}32m`;
		case "yellow":
			return `${def}33m`;
		case "blue":
			return `${def}34m`;
		case "magenta":
			return `${def}35m`;
		case "cyan":
			return `${def}36m`;
		case "white":
			return `${def}37m`;
		case "default":
			return `${def}39m`;
		case "gray":
		case "grey":
			return `${def}90m`;
		case "light red":
		case "lightred":
			return `${def}91m`;
		case "light green":
		case "lightgreen":
			return `${def}92m`;
		case "light yellow":
		case "lightyellow":
			return `${def}93m`;
		case "light blue":
		case "lightblue":
			return `${def}94m`;
		case "light magenta":
		case "lightmagenta":
			return `${def}95m`;
		case "light cyan":
		case "lightcyan":
			return `${def}96m`;
		case "light white":
		case "lightwhite":
			return `${def}97m`;
		case "all":
		case "list":
			return [
				"black",
				"red",
				"green",
				"yellow",
				"blue",
				"magenta",
				"cyan",
				"white",
				"default",
				"light gray",
				"light grey",
				"lightgray",
				"lightgray",
				"light red",
				"lightred",
				"light green",
				"lightgreen",
				"light yellow",
				"lightyellow",
				"light blue",
				"lightblue",
				"light magenta",
				"lightmagenta",
				"light cyan",
				"lightcyan",
				"light white",
				"lightwhite",
				"all",
				"list"
			];
	}
}
exports.rawBackground = color => {
	const def = "\\x1b[";
	if (color == undefined) return undefined;
	switch (color.toLowerCase()) {
		case "black":
			return `${def}40m`;
		case "red":
			return `${def}41m`;
		case "green":
			return `${def}42m`;
		case "yellow":
			return `${def}43m`;
		case "blue":
			return `${def}44m`;
		case "magenta":
			return `${def}45m`;
		case "cyan":
			return `${def}46m`;
		case "white":
			return `${def}47m`;
		case "default":
			return `${def}49m`;
		case "gray":
		case "gray":
			return `${def}100m`;
		case "light red":
		case "lightred":
			return `${def}101m`;
		case "light green":
		case "lightgreen":
			return `${def}102m`;
		case "light yellow":
		case "lightyellow":
			return `${def}103m`;
		case "light blue":
		case "lightblue":
			return `${def}104m`;
		case "light magenta":
		case "lightmagenta":
			return `${def}105m`;
		case "light cyan":
		case "lightcyan":
			return `${def}106m`;
		case "light white":
		case "lightwhite":
			return `${def}107m`;
		case "all":
		case "list":
			return [
				"black",
				"red",
				"green",
				"yellow",
				"blue",
				"magenta",
				"cyan",
				"white",
				"default",
				"light gray",
				"light grey",
				"lightgray",
				"lightgray",
				"light red",
				"lightred",
				"light green",
				"lightgreen",
				"light yellow",
				"lightyellow",
				"light blue",
				"lightblue",
				"light magenta",
				"lightmagenta",
				"light cyan",
				"lightcyan",
				"light white",
				"lightwhite",
				"all",
				"list"
			];
	}
}

exports.alloff = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[0m" + txt;
}
exports.bg = {
	black: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[40m" + txt + "\x1b[0m";
	},
	blue: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[44m" + txt + "\x1b[0m";
	},
	cyan: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[46m" + txt + "\x1b[0m";
	},
	gray: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[100m" + txt + "\x1b[0m";
	},
	green: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[42m" + txt + "\x1b[0m";
	},
	grey: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[100m" + txt + "\x1b[0m";
	},
	lightblue: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[104m" + txt + "\x1b[0m";
	},
	lightcyan: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[106m" + txt + "\x1b[0m";
	},
	lightgreen: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[102m" + txt + "\x1b[0m";
	},
	lightred: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[101m" + txt + "\x1b[0m";
    },
	lightyellow: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[103m" + txt + "\x1b[0m";
	},
	lightmagenta: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[105m" + txt + "\x1b[0m";
	},
	lightwhite: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[107m" + txt + "\x1b[0m";
	},
	magenta: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[45m" + txt + "\x1b[0m";
	},
	red: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[41m" + txt + "\x1b[0m";
	},
	yellow: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[43m" + txt + "\x1b[0m";
	},
	white: txt => {
		if (txt == undefined) return undefined;
		return "\x1b[47m" + txt + "\x1b[0m";
	}
}
exports.black = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[30m" + txt + "\x1b[0m";
}
exports.blink = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[5m" + txt + "\x1b[0m";
}
exports.blinkoff = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[25m" + txt + "\x1b[0m";
}
exports.blue = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[34m" + txt + "\x1b[0m";
}
exports.bold = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[1m" + txt + "\x1b[0m";
}
exports.boldoff = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[21m" + txt + "\x1b[0m";
}
exports.cyan = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[36m" + txt + "\x1b[0m";
}
exports.green = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[32m" + txt + "\x1b[0m";
}
exports.lightblue = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[94m" + txt + "\x1b[0m";
}
exports.lightcyan = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[96m" + txt + "\x1b[0m";
}
exports.gray = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[90m" + txt + "\x1b[0m";
}
exports.lightgreen = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[92m" + txt + "\x1b[0m";
}
exports.grey = txt => this.gray(txt);
exports.lightred = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[91m" + txt + "\x1b[0m";
}
exports.lightyellow = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[93m" + txt + "\x1b[0m";
}
exports.lightmagenta = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[95m" + txt + "\x1b[0m";
}
exports.lightwhite = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[97m" + txt + "\x1b[0m";
}
exports.magenta = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[35m" + txt + "\x1b[0m";
}
exports.red = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[31m" + txt + "\x1b[0m";
}
exports.reset = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[39m" + txt + "\x1b[0m";
}
exports.underline = txt => {
	if (txt === undefined) return undefined;
	return "\x1b[4m" + txt + "\x1b[0m";
}
exports.underlineoff = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[24m" + txt + "\x1b[0m";
}
exports.yellow = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[33m" + txt + "\x1b[0m";
}
exports.white = txt => {
	if (txt == undefined) return undefined;
	return "\x1b[37m" + txt + "\x1b[0m";
}
