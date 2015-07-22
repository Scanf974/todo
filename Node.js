export class Node {
	constructor(elem) {
		this.elem = elem;
		this.childs = [];
		this.lvl = 0;
	}

	getChild(str) {
		for (var i = 0; this.childs[i]; i++){
			if (str === this.childs[i].elem)
				return this.childs[i];
		}
		return null;
	}

	addChild(child) {
		if (typeof child === 'object')
			this.childs.push(child);
		else if (typeof child !== 'undefined')
			this.childs.push(new Node(child));
		if (typeof child !== 'undefined')
			this.childs[this.childs.length - 1].adjustLvl(this.lvl);
		return (this.childs[this.childs.length - 1]);
	}

	adjustLvl(lvl) {
		this.lvl = lvl + 1;
		for (var i = 0; this.childs[i]; i++)
		{
			this.childs[i].adjustLvl(lvl + 1);
		}
	}

	printNode() {
		console.log(this.elem);
		for (var i = 0; this.childs[i]; i++)
		{
			console.log("  " + this.childs[i].elem);
		}
	}
	printNodeRecursiveWhiteLvl(lvl) {

		for (var l = 0; l < lvl; l++)
			process.stdout.write("  ");
		console.log(this.elem);
		for (var i = 0; this.childs[i]; i++)
			this.childs[i].printNodeRecursiveWhiteLvl(lvl + 1);
	}

	printNodeRecursive() {
		this.printNodeRecursiveWhiteLvl(0);
	}
}