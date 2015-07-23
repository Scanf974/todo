import {Node} from './Node'

function createTree(tree, tab) {
	if (tab.length) {
		let str = tab[0];
		tab.shift();
		if (tree.getChild(str) == null)
			tree.addChild(str);
		createTree(tree.getChild(str), tab);
	}
}

function writeTree(tree, sentence) {
	let tab = sentence.split(":");
	createTree(tree, tab);
}

var terre = new Node("Terre");

writeTree(terre, "Europe:France:Lyon");
writeTree(terre, "Europe:France:Bordeaux");
writeTree(terre, "Afrique:Congo");
writeTree(terre, "Ameriques:New York");
writeTree(terre, "Europe:Asie:Chine:Pekin");
terre.printNodeRecursive();
