// IMPORT MODULES under test here:
import { renderDino, renderListItem, renderFood, renderCountry } from '../utils.js';
import { foods } from '../food-data.js';
import { countries } from '../country-data.js';

const test = QUnit.test;

test('test renderDino', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dinosaur"><img src="./assets/dinosaurs/tyrannosaurus.png"><h5>Tyrannosaurus</h5><ul><li>Time period: Cretaceous</li><li>Suborder: Theropoda</li><li>Length: 40 ft</li></ul></div>`;
    
    // Call the function you're testing and set the result to a const
    const trex = {
        name: 'Tyrannosaurus',
        period: 'Cretaceous',
        suborder: 'Theropoda',
        length: 40,
        image: './assets/dinosaurs/tyrannosaurus.png'
    };
    const actual = renderDino(trex);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test favorite things', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>Raindrops on roses</li>`;
    const actual = renderListItem('Raindrops on roses');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test renderFood', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="food"><h5>Yogurt</h5><p>Serving size: 150 g</p><ul><li>calories: 160</li><li>fiber: 0</li><li>protein: 4</li><li>fat: 5</li><li>sugar: 21</li></ul></div>`;
    const actual = renderFood(foods[0]);
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test renderCountry', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="country"><h5>United States</h5><p>Continent: North America</p><strong>Neighbors:</strong><ul><li>Canada</li><li>Mexico</li></ul></div>`;

    const actual = renderCountry(countries[0]);
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});