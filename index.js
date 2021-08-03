const { readFileSync } = require("fs");

/**
 * Converter class for `binary` to `text` and `text` to `binary`.
 */
class BinConverter {
	constructor() { };

	/**
	 * Translates the `binary` in a `.bin` file to `text`.
	 * 
	 * To turn `text` into `binary`, use this website: **https://codebeautify.org/text-to-binary**
	 * @param path Path to `.bin` file.
	 * @returns The decoded `string`.
	 */
	async parseBinaryFromFile(path = "") {
		const content = readFileSync(path).toString();
		const cs = content.split(" ");
		const a = [""];

		cs.forEach(num => {
			switch (num) {
				case "01100001":
					a.push("a");
					break;
				case "01100010":
					a.push("b");
					break;
				case "01100011":
					a.push("c");
					break;
				case "01100100":
					a.push("d");
					break;
				case "01100101":
					a.push("e");
					break;
				case "01100110":
					a.push("f");
					break;
				case "01100111":
					a.push("g");
					break;
				case "01101000":
					a.push("h");
					break;
				case "01101001":
					a.push("i");
					break;
				case "01101010":
					a.push("j");
					break;
				case "01101011":
					a.push("k");
					break;
				case "01101100":
					a.push("l");
					break;
				case "01101101":
					a.push("m");
					break;
				case "01101110":
					a.push("n");
					break;
				case "01101111":
					a.push("o");
					break;
				case "01110000":
					a.push("p");
					break;
				case "01110001":
					a.push("q");
					break;
				case "01110010":
					a.push("r");
					break;
				case "01110011":
					a.push("s");
					break;
				case "01110100":
					a.push("t");
					break;
				case "01110101":
					a.push("u");
					break;
				case "01110110":
					a.push("v");
					break;
				case "01110111":
					a.push("w");
					break;
				case "01111000":
					a.push("x");
					break;
				case "01111001":
					a.push("y");
					break;
				case "01111010":
					a.push("z");
					break;
				////////////////
				case "01000001":
					a.push("A");
					break;
				case "01000010":
					a.push("B");
					break;
				case "01000011":
					a.push("C");
					break;
				case "01000100":
					a.push("D");
					break;
				case "01000101":
					a.push("E");
					break;
				case "01000110":
					a.push("F");
					break;
				case "01000111":
					a.push("G");
					break;
				case "01001000":
					a.push("H");
					break;
				case "01001001":
					a.push("I");
					break;
				case "01001010":
					a.push("J");
					break;
				case "01001011":
					a.push("K");
					break;
				case "01001100":
					a.push("L");
					break;
				case "01001101":
					a.push("M");
					break;
				case "01001110":
					a.push("N");
					break;
				case "01001111":
					a.push("O");
					break;
				case "01010000":
					a.push("P");
					break;
				case "01010001":
					a.push("Q");
					break;
				case "01010010":
					a.push("R");
					break;
				case "01010011":
					a.push("S");
					break;
				case "01010100":
					a.push("T");
					break;
				case "01010101":
					a.push("U");
					break;
				case "01010110":
					a.push("V");
					break;
				case "01010111":
					a.push("W");
					break;
				case "01011000":
					a.push("X");
					break;
				case "01011001":
					a.push("Y");
					break;
				case "01011010":
					a.push("Z");
					break;
				////////////////
				case "00110000":
					a.push("0");
					break;
				case "00110001":
					a.push("1");
					break;
				case "00110010":
					a.push("2");
					break;
				case "00110011":
					a.push("3");
					break;
				case "00110100":
					a.push("4");
					break;
				case "00110101":
					a.push("5");
					break;
				case "00110110":
					a.push("6");
					break;
				case "00110111":
					a.push("7");
					break;
				case "00111000":
					a.push("8");
					break;
				case "00111001":
					a.push("9");
					break;
				////////////////
				case "01100000":
					a.push("`");
					break;
				case "01111110":
					a.push("~");
					break;
				case "00100001":
					a.push("!");
					break;
				case "01000000":
					a.push("@");
					break;
				case "00100011":
					a.push("#");
					break;
				case "00100100":
					a.push("$");
					break;
				case "00100101":
					a.push("%");
					break;
				case "01011110":
					a.push("^");
					break;
				case "00100110":
					a.push("&");
					break;
				case "00101010":
					a.push("*");
					break;
				case "00101000":
					a.push("(");
					break;
				case "00101001":
					a.push(")");
					break;
				case "00101101":
					a.push("-");
					break;
				case "01011111":
					a.push("_");
					break;
				case "00111101":
					a.push("=");
					break;
				case "00101011":
					a.push("+");
					break;
				case "01011011":
					a.push("[");
					break;
				case "01111011":
					a.push("{");
					break;
				case "01011101":
					a.push("]");
					break;
				case "01111101":
					a.push("}");
					break;
				case "00111011":
					a.push(";");
					break;
				case "00111010":
					a.push(":");
					break;
				case "00100111":
					a.push("'");
					break;
				case "00100010":
					a.push('"');
					break;
				case "01011100":
					a.push("\\");
					break;
				case "01111100":
					a.push("|");
					break;
				case "00101100":
					a.push(",");
					break;
				case "00111100":
					a.push("<");
					break;
				case "00101110":
					a.push(".");
					break;
				case "00111110":
					a.push(">");
					break;
				case "00101111":
					a.push("/");
					break;
				case "00111111":
					a.push("?");
					break;
				case "00100000":
					a.push(" ");
					break;
				default:
					throw new Error(`BINERROR -> Invalid binnum -> '${num}'`);
			};
		});
		return a.join("");
	};
	/**
	 * Parses a `string` of `binary` to `text`.
	 * @param string The `string` of `binary`.
	 * @returns The decoded `string`.
	 */
	parseBinaryFromString(string) {
		const cs = string.split(" ");
		var a = [""];

		cs.forEach(num => {
			switch (num) {
				case "01100001":
					a.push("a");
					break;
				case "01100010":
					a.push("b");
					break;
				case "01100011":
					a.push("c");
					break;
				case "01100100":
					a.push("d");
					break;
				case "01100101":
					a.push("e");
					break;
				case "01100110":
					a.push("f");
					break;
				case "01100111":
					a.push("g");
					break;
				case "01101000":
					a.push("h");
					break;
				case "01101001":
					a.push("i");
					break;
				case "01101010":
					a.push("j");
					break;
				case "01101011":
					a.push("k");
					break;
				case "01101100":
					a.push("l");
					break;
				case "01101101":
					a.push("m");
					break;
				case "01101110":
					a.push("n");
					break;
				case "01101111":
					a.push("o");
					break;
				case "01110000":
					a.push("p");
					break;
				case "01110001":
					a.push("q");
					break;
				case "01110010":
					a.push("r");
					break;
				case "01110011":
					a.push("s");
					break;
				case "01110100":
					a.push("t");
					break;
				case "01110101":
					a.push("u");
					break;
				case "01110110":
					a.push("v");
					break;
				case "01110111":
					a.push("w");
					break;
				case "01111000":
					a.push("x");
					break;
				case "01111001":
					a.push("y");
					break;
				case "01111010":
					a.push("z");
					break;
				////////////////
				case "01000001":
					a.push("A");
					break;
				case "01000010":
					a.push("B");
					break;
				case "01000011":
					a.push("C");
					break;
				case "01000100":
					a.push("D");
					break;
				case "01000101":
					a.push("E");
					break;
				case "01000110":
					a.push("F");
					break;
				case "01000111":
					a.push("G");
					break;
				case "01001000":
					a.push("H");
					break;
				case "01001001":
					a.push("I");
					break;
				case "01001010":
					a.push("J");
					break;
				case "01001011":
					a.push("K");
					break;
				case "01001100":
					a.push("L");
					break;
				case "01001101":
					a.push("M");
					break;
				case "01001110":
					a.push("N");
					break;
				case "01001111":
					a.push("O");
					break;
				case "01010000":
					a.push("P");
					break;
				case "01010001":
					a.push("Q");
					break;
				case "01010010":
					a.push("R");
					break;
				case "01010011":
					a.push("S");
					break;
				case "01010100":
					a.push("T");
					break;
				case "01010101":
					a.push("U");
					break;
				case "01010110":
					a.push("V");
					break;
				case "01010111":
					a.push("W");
					break;
				case "01011000":
					a.push("X");
					break;
				case "01011001":
					a.push("Y");
					break;
				case "01011010":
					a.push("Z");
					break;
				////////////////
				case "00110000":
					a.push("0");
					break;
				case "00110001":
					a.push("1");
					break;
				case "00110010":
					a.push("2");
					break;
				case "00110011":
					a.push("3");
					break;
				case "00110100":
					a.push("4");
					break;
				case "00110101":
					a.push("5");
					break;
				case "00110110":
					a.push("6");
					break;
				case "00110111":
					a.push("7");
					break;
				case "00111000":
					a.push("8");
					break;
				case "00111001":
					a.push("9");
					break;
				////////////////
				case "01100000":
					a.push("`");
					break;
				case "01111110":
					a.push("~");
					break;
				case "00100001":
					a.push("!");
					break;
				case "01000000":
					a.push("@");
					break;
				case "00100011":
					a.push("#");
					break;
				case "00100100":
					a.push("$");
					break;
				case "00100101":
					a.push("%");
					break;
				case "01011110":
					a.push("^");
					break;
				case "00100110":
					a.push("&");
					break;
				case "00101010":
					a.push("*");
					break;
				case "00101000":
					a.push("(");
					break;
				case "00101001":
					a.push(")");
					break;
				case "00101101":
					a.push("-");
					break;
				case "01011111":
					a.push("_");
					break;
				case "00111101":
					a.push("=");
					break;
				case "00101011":
					a.push("+");
					break;
				case "01011011":
					a.push("[");
					break;
				case "01111011":
					a.push("{");
					break;
				case "01011101":
					a.push("]");
					break;
				case "01111101":
					a.push("}");
					break;
				case "00111011":
					a.push(";");
					break;
				case "00111010":
					a.push(":");
					break;
				case "00100111":
					a.push("'");
					break;
				case "00100010":
					a.push('"');
					break;
				case "01011100":
					a.push("\\");
					break;
				case "01111100":
					a.push("|");
					break;
				case "00101100":
					a.push(",");
					break;
				case "00111100":
					a.push("<");
					break;
				case "00101110":
					a.push(".");
					break;
				case "00111110":
					a.push(">");
					break;
				case "00101111":
					a.push("/");
					break;
				case "00111111":
					a.push("?");
					break;
				case "00100000":
					a.push(" ");
					break;
				default:
					throw new Error(`BINERROR -> Invalid binnum -> '${num}'`);
			};
		});
		return a.join("");
	};
	/**
	 * Converts a `string` to `binary`.
	 * @param string The `string` to convert to `binary`.
	 * @returns A `string` of `binary`.
	 */
	parseStringToBinary(string) {
		const ss = string.split("");
		const a = [""];

		ss.forEach(l => {
			switch (l) {
				case "a":
					a.push("01100001");
					break;
				case "b":
					a.push("01100010");
					break;
				case "c":
					a.push("01100011");
					break;
				case "d":
					a.push("01100100");
					break;
				case "e":
					a.push("01100101");
					break;
				case "f":
					a.push("01100110");
					break;
				case "g":
					a.push("01100111");
					break;
				case "h":
					a.push("01101000");
					break;
				case "i":
					a.push("01101001");
					break;
				case "j":
					a.push("01101010");
					break;
				case "k":
					a.push("01101011");
					break;
				case "l":
					a.push("01101100");
					break;
				case "m":
					a.push("01101101");
					break;
				case "n":
					a.push("01101110");
					break;
				case "o":
					a.push("01101111");
					break;
				case "p":
					a.push("01110000");
					break;
				case "q":
					a.push("01110001");
					break;
				case "r":
					a.push("01110010");
					break;
				case "s":
					a.push("01110011");
					break;
				case "t":
					a.push("01110100");
					break;
				case "u":
					a.push("01110101");
					break;
				case "v":
					a.push("01110110");
					break;
				case "w":
					a.push("01110111");
					break;
				case "x":
					a.push("01111000");
					break;
				case "y":
					a.push("01111001");
					break;
				case "z":
					a.push("01111010");
					break;
				///////////////
				case "A":
					a.push("01000001");
					break;
				case "B":
					a.push("01000010");
					break;
				case "C":
					a.push("01000011");
					break;
				case "D":
					a.push("01000100");
					break;
				case "E":
					a.push("01000101");
					break;
				case "F":
					a.push("01000110");
					break;
				case "G":
					a.push("01000111");
					break;
				case "H":
					a.push("01001000");
					break;
				case "I":
					a.push("01001001");
					break;
				case "J":
					a.push("01001010");
					break;
				case "K":
					a.push("01001011");
					break;
				case "L":
					a.push("01001100");
					break;
				case "M":
					a.push("01001101");
					break;
				case "N":
					a.push("01001110");
					break;
				case "O":
					a.push("01001111");
					break;
				case "P":
					a.push("01010000");
					break;
				case "Q":
					a.push("01010001");
					break;
				case "R":
					a.push("01010010");
					break;
				case "S":
					a.push("01010011");
					break;
				case "T":
					a.push("01010100");
					break;
				case "U":
					a.push("01010101");
					break;
				case "V":
					a.push("01010110");
					break;
				case "W":
					a.push("01010111");
					break;
				case "X":
					a.push("01011000");
					break;
				case "Y":
					a.push("01011001");
					break;
				case "Z":
					a.push("01011010");
					break;
				///////////////
				case "0":
					a.push("00110000");
					break;
				case "1":
					a.push("00110001");
					break;
				case "2":
					a.push("00110010");
					break;
				case "3":
					a.push("00110011");
					break;
				case "4":
					a.push("00110100");
					break;
				case "5":
					a.push("00110101");
					break;
				case "6":
					a.push("00110110");
					break;
				case "7":
					a.push("00110111");
					break;
				case "8":
					a.push("00111000");
					break;
				case "9":
					a.push("00111001");
					break;
				///////////////
				case "`":
					a.push("01100000");
					break;
				case "~":
					a.push("01111110");
					break;
				case "!":
					a.push("00100001");
					break;
				case "@":
					a.push("01000000");
					break;
				case "#":
					a.push("00100011");
					break;
				case "$":
					a.push("00100100");
					break;
				case "%":
					a.push("00100101");
					break;
				case "^":
					a.push("01011110");
					break;
				case "&":
					a.push("00100110");
					break;
				case "*":
					a.push("00101010");
					break;
				case "(":
					a.push("00101000");
					break;
				case ")":
					a.push("00101001");
					break;
				case "-":
					a.push("00101101");
					break;
				case "_":
					a.push("01011111");
					break;
				case "=":
					a.push("00111101");
					break;
				case "+":
					a.push("00101011");
					break;
				case "[":
					a.push("01011011");
					break;
				case "{":
					a.push("01111011");
					break;
				case "]":
					a.push("01011101");
					break;
				case "}":
					a.push("01111101");
					break;
				case ";":
					a.push("00111011");
					break;
				case ":":
					a.push("00111010");
					break;
				case "'":
					a.push("00100111");
					break;
				case '"':
					a.push("00100010");
					break;
				case "\\":
					a.push("01011100");
					break;
				case "|":
					a.push("01111100");
					break;
				case ",":
					a.push("00101100");
					break;
				case "<":
					a.push("00111100");
					break;
				case ".":
					a.push("00101110");
					break;
				case ">":
					a.push("00111110");
					break;
				case "/":
					a.push("00101111");
					break;
				case "?":
					a.push("00111111");
					break;
				case " ":
					a.push("00100000");
					break;
				default:
					throw new Error(`BINERROR -> Invalid character -> '${l}'`);
			};
		});
		a.shift();
		return a.join(" ");
	};
}

module.exports = BinConverter;

// lol heya