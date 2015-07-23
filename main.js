import {Node} from './Node'

var terre = new Node("Terre");

terre.writeTree("Europe:France:Lyon");
terre.writeTree("Europe:France:Bordeaux");
terre.writeTree("Afrique:Congo");
terre.writeTree("Ameriques:New York");
terre.writeTree("Europe:Asie:Chine:Pekin");

terre.printNodeRecursive();