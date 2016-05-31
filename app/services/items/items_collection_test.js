'use strict';

describe('crossover.items service', function() {

    beforeEach(module('crossover.items'));

    describe('Items Collection', function(){

        it('should add items to the collection', inject(function(ItemObject, ItemsCollection) {
            var item1 = new ItemObject({id: 'DEMO1'});
            var item2 = new ItemObject({id: 'DEMO2'});
            var item3 = new ItemObject({id: 'DEMO3'});
            var item4 = new ItemObject({id: 'DEMO4'});

            //Check adding 1
            ItemsCollection.addItem(item1);
            expect(ItemsCollection.items.length).toBe(1);

            //Check adding another
            ItemsCollection.addItem(item2);
            expect(ItemsCollection.items.length).toBe(2);

            //Check adding several
            ItemsCollection.addItems([item3, item4]);
            expect(ItemsCollection.items.length).toBe(4);
        }));

        it('should remove items from the collection', inject(function(ItemObject, ItemsCollection) {
            var item1 = new ItemObject({id: 'DEMO1'});
            var item2 = new ItemObject({id: 'DEMO2'});
            var item3 = new ItemObject({id: 'DEMO3'});
            var item4 = new ItemObject({id: 'DEMO4'});

            //Check if the item is removed
            ItemsCollection.addItems([item1, item2, item3]);
            ItemsCollection.removeItem(item2);

            expect(ItemsCollection.items.length).toBe(2);

            //Check if it doesn't remove an unexisting item
            ItemsCollection.removeItem(item4);
            expect(ItemsCollection.items.length).toBe(2);
        }));

        it('should set the items properly', inject(function(ItemObject, ItemsCollection) {
            var item1 = new ItemObject({id: 'DEMO1'});
            var item2 = new ItemObject({id: 'DEMO2'});
            var item3 = new ItemObject({id: 'DEMO3'});
            var item4 = new ItemObject({id: 'DEMO4'});

            //Check if the items are replaced properly
            ItemsCollection.addItems([item1]);
            ItemsCollection.setItems([item2, item3, item4]);

            expect(ItemsCollection.items.length).toBe(3);
        }));

        it('should get the correct item properly', inject(function(ItemObject, ItemsCollection) {
            var item1 = new ItemObject({id: 'DEMO1'});
            var item2 = new ItemObject({id: 'DEMO2'});
            var item3 = new ItemObject({id: 'DEMO3'});

            //Check if the item is found properly
            ItemsCollection.addItems([item1, item2, item3]);
            expect(ItemsCollection.getItem(item2)).toBe(1);
            expect(ItemsCollection.getItem(item3)).toBe(2);
            expect(ItemsCollection.getItem(item1)).toBe(0);
        }));
    });
});