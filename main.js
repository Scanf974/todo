import {Node} from './Node'


var t = new Node("God");

t.addChild("Bruno");
t.addChild("Manue");
t.addChild("George");
t.addChild("Daniel");
t.childs[2].addChild("Poyer");
t.childs[0].addChild("Petit");
t.childs[0].childs[0].addChild("Tres");
t.childs[0].childs[0].addChild("Trop");
t.childs[0].childs[0].addChild("Triste");
t.childs[0].childs[0].childs[1].addChild("Amusant");



var e = new Node("Terre");

e.addChild("Europe").addChild("France").addChild("Lyon");
e.addChild("Afrique");
e.addChild("Ameriques").addChild("New York");

e.getChild("Europe").getChild("France").addChild("Bordeaux");

// t.addChild(e);
e.printNodeRecursive();
