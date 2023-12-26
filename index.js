import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const answer = await inquirer.prompt([{
    type: 'input',
    name: 'URL',
    message: 'Enter the URL : '
}]);

var qr_code = qr.image(answer.URL);
qr_code.pipe(fs.createWriteStream('qr_code.png'));

fs.writeFile('URL.txt', answer.URL, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File has been saved!');
    }
});

// console.log(answer.URL);