import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const characterCollection = new CharactersCollection("Xaayb");
characterCollection.sort();
characterCollection.print();

const numbersCollection = new NumbersCollection([4, 3, 2, 1]);
numbersCollection.sort();
numbersCollection.print();

const linkedList = new LinkedList();
linkedList.add(10000);
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
linkedList.add(4);
linkedList.sort();
linkedList.print();
