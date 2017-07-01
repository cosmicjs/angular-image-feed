var fs = require('fs');

var str = `
    export const environment = {
        production: true,
        write_key: '${process.env.COSMIC_WRITE_KEY}',
        bucket_name: '${process.env.COSMIC_BUCKET}',
        photos_type: 'photos'
    };
`;
fs.writeFile("./src/environments/environment.prod.ts", str, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 