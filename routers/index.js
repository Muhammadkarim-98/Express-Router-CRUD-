const express = require("express");
const router = express.Router();
//
const instructors = [];
let id = 1;
//
router
    .route("/")
    .get((req, res) => {
        res.render("base", { instructors });
    })
    .post((req, res) => {
        instructors.push({ id, ...req.body });
        id++;
        res.redirect("/");
    });
//
router.get("/newOne", (req, res) => {
    res.render("newOne");
});
//
router
    .route("/:id")
    .get((req, res) => {
        const instructor = instructors.find((v) => v.id === Number(req.params.id));
        res.render("show", { instructor });
    })
    .patch((req, res) => {
        const instructor = instructors.find((v) => v.id === Number(req.params.id));
        instructor.inputText = req.body.inputText;
        res.redirect("/");
    })
    .delete((req, res) => {
        const instructor = instructors.findIndex(
            (v) => v.id === Number(req.body.id)
        );
        instructors.splice(instructor, 1);
        res.redirect("/");
    });
//
router.route("/:id/edit").get((req, res) => {
    const instructor = instructors.find((v) => v.id === Number(req.params.id));
    return res.render("edit", { instructor });
});
//
module.exports = router;