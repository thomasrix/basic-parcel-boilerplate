const Parcel = require('parcel-bundler');
let dev = ()=>{
    const parcel = new Parcel(
        ['./src/script/index.html', '../assets/**/*'],
        {
            outDir:'./dev'
        }
        );
        
        parcel.bundle();
        parcel.serve();
    }
    dev();