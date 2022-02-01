// IMPORT MODULES under test here:
import { renderDino, renderListItem } from '../utils.js';

const test = QUnit.test;

test('test renderDino', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dinosaur"><img src="./assets/dinosaurs/tyrannosaurus.png"><h5>Tyrannosaurus</h5><ul><li>Time period: Cretaceous</li><li>Suborder: Theropoda</li><li>Length: 40 ft</li></ul></div>`;
    
    //Act 
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