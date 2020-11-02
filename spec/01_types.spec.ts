describe('types', () => {

    describe('declaring variables and stuff', () => {
        it('using let', () => {
            let x = 10;

            x = 30;

            let z = 'Dale';
            z = 'Dianne';

            let q: string[];

            q = ['bird', 'plane', 'tacos'];

            let y: any = 3;

            y = 3.14;

            y = 'Tacos are delicious';

            y = ['dog', 'cat', 'mouse'];

            const p = 'pizza';

        });

        it('some more details about let', () => {
            let a: number | string;
            a = 'Pizza';
            a = 42;
            const x = 12;
            const y = 'bird';
            const z = { cat: 'Meow' };
        });

        it('a bit about constants', () => {
            // They are names that cannot be reassigned to. That is it. No more.

            const a = 12;

            // a = 13; can't do this.

            const luckyNumbers = [7, 9, 20];
        });

        it('so what is wrong with the var keyword anyhow?', () => {
            const age = 21;
            let message: string;
            if (age >= 21) {
                message = 'Old Enough';
            } else {
                message = 'Too Young';
            }

            expect(message).toBe('Old Enough');
        });
    });

    describe('literals', () => {

        describe('number literals', () => {
            it('some samples', () => {
                let sample: number;
                sample = 10;
                sample = 10.5;
                sample = 0xff;
                sample = 0o22; // base 8
                sample = 0b01010; // base 2 - binary
                sample = 18_989_098_928.22;

                sample = parseFloat('555.55');
                expect(sample).toBe(555.55);
                sample = parseInt('3.1415927', 10);
                expect(sample).toBe(3);
                sample = +'1.33';
                expect(sample).toBe(1.33);
            });
        });

        describe('some strings', () => {

            it('delimiting strings', () => {
                const message1 = 'Hello How Are You?';
                const message2 = "Hello How Are You?";
                expect(message1).toEqual(message2);

            });

            it('has format strings, too', () => {
                const story = `Chapter 1.
                    
It was a dark and stormy night.
                    
The End.`;

                console.log(story);

                const name = 'Bob';
                const salary = 32_123.23;

                const report1 = 'The Employee ' + name + ' has a salary of $' + salary + ' per year';
                const report2 = `The Employee ${name} has a salary of $${salary} per year`;
                expect(report1).toEqual(report2);
            });
        });
    });
    describe('array literals', () => {

        it('using them', () => {
            const stuff = ['dogs', 'birds', 18];

            expect(stuff.length).toBe(3);
            stuff[2] = 'Owls';
            expect(stuff).toEqual(['dogs', 'birds', 'Owls']);

            const missing = stuff[99];
            expect(missing).toBeUndefined();

            // const someOtherArray: (string | number)[] = [];
            const someOtherArray: Array<string | number> = [];
            const friends: Array<string> = [];

        });
        describe('tuples and objects and stuff like that', () => {

            it('doing it with objects', () => {
                interface FormattedNameInfo { fullName: string, numberOfLetters: number }
                function formatName(first: string, last: string): FormattedNameInfo {
                    const name = `${last}, ${first}`;
                    return {
                        fullName: name,
                        numberOfLetters: name.length
                    }
                }
                // const fullName = formatName('Han', 'Solo');
                // expect(fullName.fullName).toBe('Solo, Han');
                // expect(fullName.numberOfLetters).toBe(9);

                const { fullName, numberOfLetters } = formatName('Han', 'Solo');
                expect(fullName).toBe('Solo, Han');
                expect(numberOfLetters).toBe(9);
            });

            // it('doing it with atuple', () => {
            //     type NameInfo = [string, number];
            //     function formatName(first: string, last: string): NameInfo {
            //         const name = `${last}, ${first}`;
            //         return [name, name.length];
            //     }
            // });
        });
    });
});