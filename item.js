/* item in a shopping cart */
const items = requrie('./fakeDb')

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }

    static findAll(){
        return items
    }

    /** Update found item with matching name to data. */
    static update(name, data) {
        let foundItem = Item.find(name);
        if (foundItem === undefined) {
            throw {message: 'not found', status: 404}
        }
        foundItem.price = data.price;
        foundItem.name = name;

        return foundItem;
    }

    /** Find & return item with matching name. */
    static find(name) {
        const foundItem = items.find(v => v.name === name);
        if(foundItem === undefined) {
            throw {message: 'not found', status: 404}
        }
        return foundItem
    }

    /** Remove item with matching id. */
    static remove(name) {
        let foundIdx = items.findIndex(v => v.id === name);
        if (foundId === -1) {
            throw {message: 'not found', status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports = Item;