import { Employee, Retiree, IHaveAName } from '../src/hr';

describe('creating and using classes', () => {

    it('creating an employee', () => {
        const carla = new Employee('Carla', 'Jones', 'CEO', 182_000);

        expect(carla.firstName).toBe('Carla');
        expect(carla.lastName).toBe('Jones');

        expect(carla.fullName).toBe('Jones, Carla');

        expect(carla.salary).toBe(182_000);

        carla.giveRaise(1000);
        expect(carla.salary).toBe(183_000);

        displayName(carla);
        displayName({ fullName: 'Boba Fett' });
        function displayName(thingy: IHaveAName) {
            console.log(`***||${thingy.fullName}||***`);
        }
    });
    it('new retiree', () => {
        const paul = new Retiree('Paul', 'Jones', 83_000);
    });
});