let express = require('express');
let router = express.Router();


let getController = (con_id) => {
    return new Promise((resolve, reject) => {
            //find controller from database
            let a = {
                id: con_id,
                name: "demo"
            };
            resolve(a);

            if (errno) {
                reject(errno);
            }
        }
    )
};

let getModules = (con_id) => {
    return new Promise((resolve, reject) => {
        //find all modules with that controller id
        let modules = [{id: 1, name: "m1"}, {id: 2, name: "m2"}];
        resolve(modules);

        if (errno) {
            reject(errno);
        }
    })
};

/* GET controller listing. */
router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    let ret = {};
    getController(id)
        .then((controller) => {
                console.log(controller);
                getModules(id)
                    .then(
                        (modules) => {
                            modules.forEach(module => {
                                module.name = "gg";
                            });
                            console.log(modules);
                            //update module info
                        }
                    )
                    .catch((err) => {
                        console.log(err)
                    });
            }
        )

        .catch((err) => {
            console.log(err)
        });


    // let p = new Promise((resolve, reject) => {
    //     //do something
    //     let a = "honghao";
    //     let b = "shabi";
    //     if (a === b) {
    //         resolve(a);
    //     } else {
    //         reject(b);
    //     }
    // });
    // p
    //     .then(
    //         (name) => {
    //             console.log(name);
    //             res.send("ssa");
    //         },
    //         (name) => {
    //             console.log("fail " + name);
    //             res.send("bbbb");
    //         }
    //     )
    //     .catch(
    //         (e) => {
    //             console.log(e);
    //             res.send("error");
    //         }
    //     );
    res.send("ok")
});

module.exports = router;
